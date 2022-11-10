//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?t(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],t):t(e.moment)}(this,(function(e){"use strict";
//! moment.js locale configuration
function t(e,t,i){var o,s;return"m"===i?t?"минута":"минуту":e+" "+(o=+e,s={ss:t?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",ww:"неделя_недели_недель",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[i].split("_"),o%10==1&&o%100!=11?s[0]:o%10>=2&&o%10<=4&&(o%100<10||o%100>=20)?s[1]:s[2])}var i=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];return e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:i,longMonthsParse:i,shortMonthsParse:i,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},calendar:{sameDay:"[Сегодня, в] LT",nextDay:"[Завтра, в] LT",lastDay:"[Вчера, в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В следующее] dddd, [в] LT";case 1:case 2:case 4:return"[В следующий] dddd, [в] LT";case 3:case 5:case 6:return"[В следующую] dddd, [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd, [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd, [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd, [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",ss:t,m:t,mm:t,h:"час",hh:t,d:"день",dd:t,w:"неделя",ww:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,t,i){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:4}})})),
/*!
 * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
function(e,t){"function"==typeof define&&define.amd?define(["jquery"],(function(e){return t(e)})):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,(function(e){e.fn.selectpicker.defaults={noneSelectedText:"Ничего не выбрано",noneResultsText:"Совпадений не найдено {0}",countSelectedText:"Выбрано {0} из {1}",maxOptionsText:["Достигнут предел ({n} {var} максимум)","Достигнут предел в группе ({n} {var} максимум)",["шт.","шт."]],doneButtonText:"Закрыть",selectAllText:"Выбрать все",deselectAllText:"Отменить все",multipleSeparator:", "}})),
/*!
* TOTUM LOCALIZATION
* */
App.langs=App.langs||{},App.langs.ru={locale:"ru-RU",dateFormat:"DD.MM.YY",dateTimeFormat:"DD.MM.YY HH:mm",timeDateFormatNoYear:"HH:mm DD.MM",localeDatetimepicker:"ru",letter_replaces:{"ё":"e"},search_prepare_function:function(e,t){return Object.keys(this.letter_replaces).forEach(i=>{e=e.toLowerCase().replace(i,this.letter_replaces[i]),t&&(t=t.toLowerCase().replace(i,this.letter_replaces[i]))}),[e,t]},filtersExtenders:App.commonFiltersExtenders,css:{table:'.pcTable-container .loading-row td {background: url("/imgs/loading_ru.png") repeat #fff;}'},modelMethods:{edit:"Изменение",checkInsertRow:"Предварительное добавление",duplicate:"Дублирование",refresh_rows:"Пересчет строк",loadPage:"Загрузка страницы",getTableData:"Загрузка информации о таблице",refresh:"Обновление данных таблицы",checkEditRow:"Предварительный расчет панели",saveEditRow:"Сохранение панели",save:"Изменение поля",click:"Нажатие кнопки",selectSourceTableAction:"Вызов панели",add:"Добавление строки",getEditSelect:"Загрузка селекта",delete:"Удаление"},translates:{"Creator-tableEditButtons-default_action":"Действ.","Creator-tableEditButtons-on_duplicate":"Дублир.","Creator-tableEditButtons-row_format":"Строка","Creator-tableEditButtons-table_format":"Таблица","Load context data":"Загрузить дополнительную информацию","Close context data":"<b>Закрыть</b> дополнительную информацию","Open context data":"<b>Открыть</b> дополнительную информацию","Element preview is empty":"Превью элемента пусто","PATH-TO-DOCUMENTATION":"https://ru.docs.totum.online/","Email for cron notifications":"Email для нотификаций крона",Password:"Пароль",Login:"Логин","Create a user with full access":"Создать пользователя с полным доступом","PostgreSql console utilities":"Консольные утилиты PostgreSql","With console utilities":"С консольными утилитами","Without console utilities":"Без консольных утилит","Database name":"Имя базы","Database host":"Host базы","Setup string":"Строка установки","Row <b>id %s %s</b> is blocked":"Строка <b>id %s %s</b> заблокирована","Database PostgreSQL":"База данных PostgreSQL","Deploy only in the new":"Разворачивать только в новой","Use the existing":"Использовать существующую",Schema:"Схема","Schema (not public)":"Схема (не public)","Single installation":"Одинарная установка","Multiple installation":"Множественная установка","The value is not found":"Значение не найдено","Edit totumCode in %s":"Редактировать Тотум-код в %s","Edit totumCode in value of %s":"Редактировать Тотум-код в ячейке %s","Recalculate all table rows after changing the field type":"Пересчитайте все строки таблицы после изменения типа поля","Default printing":"Печать по-умолчанию",Forms:"Формы","Add form":"Добавить форму","On type change all field setting will be reset to default. If you want to save this changes — save field and change it's type after that":"При изменении типа все настройки поля будут сброшены на значения по умолчанию. Если вы хотите сохранить эти изменения, сохраните поле и измените его тип после этого.","On type change all field setting will be reset to saved. If you want to save this changes — save field and change it's type after that":"При изменении типа все настройки поля будут сброшены к сохраненным. Если вы хотите сохранить эти изменения, сохраните поле и измените его тип после этого.","RowList of page/table rows":"RowList строк страницы/таблицы",Attention:"Внимание","Show columns extra info":"Показать дополнительную информацию колонок","Hide columns extra info":"Скрыть дополнительную информацию колонок",Edited:"Редактировано","There is no any active trigger.":"Нет включенных триггеров.","Your last comment editing":"Редактирование последнего комментария",Cancel:"Отмена",Add:"Добавить","Add a branch":"Добавить ветку","Add a row":"Добавить строку",Save:"Cохранить",Load:"Загрузить",Open:"Открыть","Open all":"Открыть все",Close:"Закрыть","Close all":"Закрыть все","Close the panel":"Закрыть панель",Apply:"Применить","By default":"По умолчанию","Show all":"Показать все","Disable code":"Отключить код","Code disabling":"Отключение кода",Disable:"Отключить",Refresh:"Обновить",Tab:"Вкладка","Create a set":"Создать набор","Hide admin. fields":"Скрыть адм.поля","Save the fields set":"Сохранить набор полей","Set title":"Название набора","Upload limit exceeded":"Превышен лимит файлов для закачки","In a new tab":"В новой вкладке","Expand All":"Развернуть все","Scheme of calculation":"Схема расчета","Select user":"Выберите пользователя","Select values":"Выберите значения",Select:"Выберите",Loading:"Загрузка","%s elements":"%s элементов","%s el.":"%s эл.","Change warning":"Предупреждение при изменении","Default sets":"Наборы по умолчанию",Sets:"Наборы","Save as default set":"Сохранить как набор по умолчанию","Click hear to unlock":"Кликните для разблокировки","Apply to selected":"Применить к выделенным","Fix the selected":"Фиксировать выделенные","Reset manuals":"Сбросить ручные","Reset manual":"Сбросить ручное","Change in source table":"Изменить в таблице-источнике","Add to source table":"Добавить в таблицу-источник","Viewing table settings":"Просмотр настроек таблицы","Editing table settings":"Редактирование настроек таблицы","Viewing table field":"Просмотр поля таблицы","Editing table field":"Редактирование поля таблицы","Viewing <b>%s</b> from table <b>%s</b>":"Просмотр <b>%s</b> таблицы <b>%s</b>","Editing <b>%s</b> from table <b>%s</b>":"Редактирование <b>%s</b> таблицы <b>%s</b>","Adding table":"Добавление таблицы","Adding field":"Добавление поля","Adding row to table":"Добавление строки в таблицу","Error in %s field":"Ошибка в поле %s","You can't put the Settings field type in linkToEdit":"Нельзя тип поля Настройки выносить в linkToEdit",Done:"Выполнено","Comments of field":"Комментарии поля","Editing in the form":"Редактирование в форме","Add comment":"Добавить комментарий",Manually:"Вручную","Action not executed":"Действие не выполнено","Manually changing the json field":"Ручное изменение json-поля","JSON format error":"Ошибка формата JSON","Fill in by the default settings":"Заполнить настройками по умолчанию","Edit list/json":"Редактировать список/json",Order:"Порядок",Format:"Форматировать",FormatShort:"Формат",Copy:"Копировать","Field <b>%s</b> text":"Текст поля <b>%s</b>","Field settings":"Настройки поля","Edit text":"Редактировать текст",Edit:"Редактировать",View:"Просмотреть","Adding to the table is forbidden":"Добавление в таблицу запрещено","The field must be entered":"Поле должно быть заполнено","The field %s must be entered":"Поле %s должно быть заполнено",'Value fails regexp validation: "%s"':'Значение не проходит валидацию regex: "%s"',"Change the password":"Поменять пароль","New password":"Новый пароль",Selected:"Выбранное","The data is incomplete. Use the search!":"Данные не полны. Воспользуйтесь поиском!",'Filled "%s" field  error: %s':'Ошибка заполнения поля "%s": %s',"Failed to load data":"Не удалось загрузить данные","Required to save the item for file binding":"Требуется сохранение элемента для привязки файла","Adding file":"Добавить файл","Adding files":"Добавить файлы","Drag and drop the file here":"Перетащите сюда файл","There must be a number":"Здесь должно быть число",ApplyShort:"Прим.",InvertShort:"Инверт.",CancelShort:"Отмен.","Field structure error":"Ошибка структуры поля","Field %s structure error":"Ошибка структуры поля %s","Field <b>%s</b> parameters":"Параметры поля <b>%s</b>",Editor:"Редактор","ERR!":"ОШБК!",Error:"Ошибка","The field accepts only one file":"Поле принимает только один файл","Checking the file with the server":"Проверка файла сервером",Empty:"Пустое","Files form <b>%s</b>":"Форма файлов <b>%s</b>","Edit field":"Редактировать поле","The JSON field content":"Содержимое JSON-поля","Choose the field":"Выбрать поле","Remove from the filter":"Удалить из фильтра","Add to the filter":"Добавить в фильтр",Simple:"Простая","Calculated in the cycle":"Расчетная в цикле",Calculated:"Расчетная",Temporary:"Временная",Cycles:"Циклы",Code:"Код","Action code":"Код действия",ActionShort:"Действ",SelectShort:"Селект",Formating:"Форматирование",Selects:"Селекты",Select:"Селект","Fields calculation time":"Время расчета полей","Send password to email":"Отправить пароль на email","New password":"Новый пароль","Register and send password to email":"Зарегистрировать и отправить пароль на email",Registration:"Регистрация","Service is optimized for browsers Chrome, Safari, Yandex, FireFox latest versions":"Сервис оптимизирован под броузеры Chrome, Safari, Yandex, FireFox последних версий","I still want to see it":"Все равно хочу посмотреть","Apply and close":"Применить и закрыть","Shelve all":"Отложить все",Shelve:"Отложить",__clock_shelve_panel:'<span class="clocks-na">На</span> <input type="number" step="1" value="10" class="form-control"/> <select class="form-control"><option  selected value="1">минут</option><option value="2">часов</option><option value="3">дней</option></select>',"Calculated value":"Расчетное значение","Same as calculated":"Cовпадает с расчетным","Show logs":"Показать логи",Log:"Лог","Calculate log":"Лог расчета","Log of field manual changes":"Лог ручных изменений по полю","Log is empty":"Лог пуст. Включите логирование и перегрузите страницу","Operation execution error":"Ошибка выполнения операции","No server connection":"Нет соединения с сервером",export:"экспорт",import:"импорт",Full:"Полный","Only rows":"Только строки",Copied:"Скопировано","Edit table settings":"Редактировать настройки таблицы","Open Tables":"Открыть Cписок Таблиц","Open Tables Fields":"Открыть Состав Таблиц","Creating tables versions":"Создание версий таблиц","Changing versions of cycle tables":"Изменение версий таблиц цикла",Restore:"Восстановить",Restoring:"Восстановление",Editing:"Изменение","Normal mode":"Норм режим"," / Version %s / Cycle %s":" / Версия %s / Цикл %s","Add field":"Добавить поле","%s from %s":"%s из %s",Reset:"Сбросить","Comment of the table rows part":"Комментарий строчной части таблицы","Read only":"Только чтение",Filters:"Фильтры",Parameters:"Параметры","Rows part":"Строчная часть","with id":"с id","Column footers":"Футеры колонок","Out of column footers":"Футеры вне колонок",Logout:"Выход",Print:"Печать"," from ":" из ",Header:"Хэдер",Columns:"Колонки",Footer:"Футер",Prefilter:"Префильтер","Hidden by default":"Скрыто по умолчанию","Fields visibility":"Видимость полей","On adding":"При добавлении","On changing":"При изменении","On deleting":"При удалении","On click":"При клике",Editing:"Редактирование","Adding and editing is disallowed":"Добавление и редактирование запрещено","Adding is disallowed":"Добавление запрещено","Editing is disallowed":"Редактирование запрещено","Field %s":"Поле %s",Change:"Изменить",Duplicate:"Дублировать","Insert after":"Вставить после",Section:"Секция","Change NAME":"Изменить NAME",Delete:"Удалить",Deleting:"Удаление",Hide:"Скрыть",Hiding:"Скрытие","Open the panel":"Открыть панель",Recalculate:"Пересчитать","Recalculate cycle":"Пересчитать цикл",Show:"Показать","Field width":"Ширина поля",Pin:"Закрепить",Unpin:"Открепить","Sort A-Z":"Сортировать А-Я","Sort Z-A":"Сортировать Я-А",Select:"Выделить","Table is empty":"Таблица пуста","Page is empty":"Страница пуста","Text field editing":"Правка текстового поля",Documentaion:"Документация","Delete field %s from table %s?":"Удалить поле %s из таблицы %s?","Deleting field %s from table %s?":"Удаление поле %s из таблицы %s?","Fill in the values for unique fields":"Заполните значения для уникальных полей",Operation:"Операция",Value:"Значение","Math operations":"Математические операции",Summ:"Сумма","Number of numbers":"Кол-во чисел",Average:"Среднее",Max:"Максимальное",Min:"Минимальное","Non-numeric elements":"Нечисл. элементов","Calculated only by visible rows":"Посчитано только по видимым строкам","By current page":"По текущей странице","Wait, the table is loading":"Подождите, таблица загружается","Add row":"Добавить строку","Field % not found":"Поле %s не найдено","Section deleting":"Удаление секции","Section editing":"Редактирование секции","empty list":"Пустой лист",date:"дата","date-time":"дата-время","date-time with secongs":"дата-время с секундами","user id":"id пользователя","user roles ids":"ids ролей пользователя","table id":"id таблицы","table NAME":"NAME таблицы","temporary table HASH":"HASH врем. таблицы","adding row HASH":"HASH строки добавления","calcuated table cycle id":"cycle id расчетной таблицы","field NAME":"NAME поля","new line":"новая строка",tab:"Ттабуляция","action code action type":"тип экшена кода действия","the ids of the checked fields":"id отмеченных галочками полей","current field value (for selections/actions/formats)":"значение текущего поля (для селектов/действий/форматов)","past value of the current field":"прошлое значение текущего поля","current host-name":"текущий хост-name","duplicated row id":"ид дублированной строки","Csv-loading question":"Вопрос про csv-загрузку","Check matching the structure of the loaded file to the sequence of fields":"Проверьте соответствие структуры загружаемого файла последовательности полей",Running:"Выполняется",Deleted:"Удалено",Blocked:"Заблокировано","Surely to change?":"Точно изменить?","Surely to recalculate %s rows?":"Точно пересчитать %s строк?","Surely to duplicate %s rows?":"Точно дублировать %s строк?","Surely to recalculate %s cycles?":"Точно пересчитать %s циклов?","Surely to hide %s rows?":"Точно скрыть %s строк?","Surely to delete %s rows?":"Точно удалить %s строк?","Surely to hide the row?":"Точно скрыть строку?","Surely to delete the row?":"Точно удалить строку?","Surely to restore the row %s?":"Точно восстановить строку %s?","Surely to restore %s rows?":"Точно восстановить %s строк?","Hiding %s rows":"Скрытие %s строк","Deleting %s rows":"Удаление %s строк","Hiding the row %s":"Скрытие строки %s","Deleting the row %s":"Удаление строки %s",Recalculating:"Пересчет",Duplicating:"Дублирование",Confirmation:"Подтверждение",Reload:"Обновить",All:"Все","Without hand":"Без руки","With hand all":"С рукой все","With hand equals calc":"С рукой как в расчете","With hand different":"С рукой отличающиеся","Filtering by current page":"Фильтрация по текущей странице","No rows are selected by the filtering conditions":"По условиям фильтрации не выбрана ни одна строка","To operate the order field, reload the table":"Для работы поля порядок перезагрузите таблицу","Rows restore mode. Sorting disabled":"Режим восстановления строк. Сортировка отключена","It is possible to sort only within a category":"Возможно сортировать только в пределах категории","You cannot move the row %s":"Нельзя перемещать строку %s","The unchecked row should be selected as the anchor for the move":"В качестве якоря для перемещения нужно выбрать не отмеченную строку","No data":"Нет данных","Only nested rows can be moved":"Перемещать можно только вложенные строки","You can only move within one branch":"Перемещать можно только в пределах одной ветки","Attention, please - this is a temporary table":"Будьте внимательны - это временная таблица","The table was changed by the user <b>%s</b> at <b>%s</b>":"Таблица была изменена пользователем <b>%s</b> в <b>%s</b>",treeAddTable:"Таблицу",treeAddFolder:"Папку/Ссылку","Tree search":"Поиск по дереву","isCreatorSelector-NotCreatorView":"Отключить админ-слой","isCreatorSelector-CommonView":"Отключить спецвид","isCreatorSelector-MobileView":"Переключить в десктоп","Dbstring is incorrect":"Ошибочная строка","Create config and upload scheme":"Создать конфиг и залить схему","Recalculate +":"Пересчитать +","Recalculate cycle +":"Пересчитать цикл +","Available in PRO":"Доступно в PRO","In the fields marked with a checkmark, their Code on Addition will be executed when recalculating":"В полях, отмеченных галочкой, при пересчете будет выполнен их код при добавлении","The field accept only following types: %s":"Это поле принимает только следующие типы: %s","Dark mode":"Темный режим","This option works only in PRO.":"Эта опция работает только в PRO.","If you enable it and you have files in this field, they stay on the server, but you cannot access them from totum.":"Если вы включите ее и у вас есть файлы в этом поле, они останутся на сервере, но вы не сможете получить их из totum.","This option can be enabled only. You will not be able to turn it off.":"Эта опция может быть только включена. У вас не будет возможности отключить ее."}};