<?php

$isCreatorView = $isCreatorView ?? false;

if (empty($tableConfig)) {
    if (empty($error)) {
        if (!empty($tmp_tables) || !empty($html)) {
            if (!empty($tmp_tables)) { ?>
                <div id="tables_tabls">
                    <ul class="nav nav-tabs">
                        <?php
                        foreach ($tmp_tables as $i => $_t) {
                            echo '<li' . ($i === 0 ? ' class="active"' : '') . '><a data-toggle="tab" data-table_id="' . $_t['id'] . '" href="#table' . $_t['id'] . '">' . htmlspecialchars($_t['title']) . '</a></li>';
                        }

                        if (!empty($html)) {
                            echo '<li><a data-toggle="tab" href="#description">Описание</a></li>';
                        }
                        ?>
                    </ul>

                    <div class="tab-content">
                        <?php
                        foreach ($tmp_tables as $i => $_t) {
                            $_title = htmlspecialchars($_t['title']);
                            $iframe="";
                            if ($i===0) {
                                $iframe='<iframe src="/Table/0/'.$_t['id'].'" frameborder="0"></iframe>';
                            }
                            echo <<<HTML
<div id="table{$_t['id']}" class="tab-pane fade in active">{$iframe}</div>
HTML;
                        }
                        if (!empty($html)) {
                            echo '<div id="description" class="tab-pane fade"><div id="main-page">' . $html . '</div></div>';
                        }
                        ?>
                    </div>
                </div>
                <script>

                    $('#tables_tabls iframe').on('load', function(){
                        let _window = this.contentWindow;
                        let body=$(_window.document.body).css('background-color', 'transparent').addClass('notification-table');
                        /*setTimeout(()=>{
                           $(this).height(body.find('#table .pcTable-scrollwrapper').height());
                        });*/
                    })

                    $('#tables_tabls a').click(function () {
                        let target=$($(this).attr('href'));
                        if(!target.find('iframe').length && $(this).data('table_id')){
                            let iframe=$('<iframe src="/Table/0/'+$(this).data('table_id')+'" frameborder="0"></iframe>');
                            target.append(iframe)
                        }
                    })
                </script>

                <?php
            }
        } elseif (!empty($html)) {
            echo '<div id="main-page">' . $html . '</div>';
        } else {
            ?>

            <div class="panel panel-default">
                <div class="panel-body">
                    Выберите таблицу
                </div>
            </div>

            <?php
        }
        echo '<div id="page-tree"></div>';
    }
    return;
} ?>
<div id="table"></div>
<script>
    var TableModel = App.models.table(window.location.href, {'updated': <?=($tableConfig['updated'])?><?=($tableConfig['tableRow']['sess_hash'] ?? null) ? ', sess_hash: "' . $tableConfig['tableRow']['sess_hash'] . '"' : ''?>})
</script>
<script>
    window.top_branch = <?=$this->branchId?>;
    let TableConfig = <?=json_encode($tableConfig, JSON_UNESCAPED_UNICODE);?>;

    TableConfig.model = TableModel;
    $(function () {
        new App.pcTableMain($('#table'), TableConfig);
    })
</script>
