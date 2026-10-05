`PostgreSQL` - хранилища данных
`SQL` - это язык запросов с помощью которых мы можем обращаться к нашей базе данных

Какие вообще есть запросы в SQL

Разбор командный запросов SQL

| Запрос | Что делает |
|---|---|
| SELECT | Взять, выбрать, достать
| * | Все
| FROM | Откуда, из (какой таблицы)
| LIMIT | Определенное кол-во (только первые 10 условно)
| ORDER BY `field` DESC | Сортировка по убыванию, если не писать DESC, то будет по возрастанию
| 1. WHERE `field` AND / OR / NOT / IS (NOT) NULL | где; при условии, что. Используется для фильтрации строк - `AND` - если оба утверждение верны, `OR` - если 1 верно, `NOT` - меняет на противоположное значение, `IS (NOT) NULL` - проверка на null | 
| 2. WHERE `field` LIKE / IN / BETWEEN | ... |

Сгруппированный запрос

| Запрос | Что делает |
| ---|---|
| SELECT * FROM `table` | Верни все строки из таблицы
| SELECT * FROM `table` LIMIT 10 | достань все столбцы, но только первые 10 строк таблицы.
| SELECT `courier_id, time` FROM `table` LIMIT 10 | Верни только те колонки, которые нам нужны
| SELECT `courier_id, time` FROM `table` ORDER BY `time` LIMIT 10 | Верни первые 10 колонок отсортированных по возрастанию
| SELECT * FROM `users` WHERE `age > 18` | Выбери всех пользователей, где возраст больше 18
 
Типичные ошибки - Неправильный порядок или ошибки в ключевых словах. Правильный порядок операторов в запросе выглядит так: SELECT ... => FROM => WHERE => GROUP BY => HAVING => ORDER BY => LIMIT

Функции в postgreSQL
| Функция | Что делает |
| ---|---|
| LENGTH(field) | Возвращает количество символов в указанной строке |
| UPPER(field) | Переводит в верхний регистр | 
| LEFT(field, characterCountToReturn) | возвращает первые n символов в строке: SELECT LEFT('karpov.courses', 6) => karpov | 
| UPPER(LEFT('karpov.courses', 6)) AS new_name | Функции можно комбинировать: в начале выполнится LEFT, затем UPPER. Если выполним данные функции раздельно то вызовется ошибка | 
| SPLIT_PART(field, separator, ordinalNumberPart) | Разбивает строку на указанный разделитель и возвращает одну из частей => SPLIT_PART('karpov.courses', '.', 2) => courses
| CAST(100 AS VARCHAR) or column::VARCHAR | Преобразовывает колонку с числом в текст 
| CAST('100' AS INTEGER) or column::INTEGER | Преобразовывает колонку с текст в число 
| '2022-12-31'::DATE | Преобразовать текст в дату: 31/12/22 | 
| [CONCAT](https://neon.com/postgresql/string-functions/concat-function) | Соединяет в одну строку значения из нескольких столбцов. | 
| [DATE_PART(part, column)](https://neon.com/postgresql/date-functions/date_part) | Извлечение определенной части, где в качества part может выступать year, month, day, hour, а в качестве column - указать нужную колонку либо конкретную дату или время. Например: DATE_PART('year', DATE '2022-01-12') => 2022 |
| [COALESCE(column, 'some value')](https://neon.com/postgresql/tutorial/coalesce) | Если значение = NULL, то заменит на 2 аргумент. А если != null, то вернет это значение. Внутри него можно исп и другие функции - `COALESCE(LEFT(column, 5), 'filler value')` | 

Какие есть матем.функции в SQL:
- [Арифметические](https://www.postgresql.org/docs/9.3/functions-math.html) - +, -, /, *, %, ^.
- [Округления](https://neon.com/postgresql/math-functions/round) - round(value, number) округление в большую сторону, где первым принимаем число а вторым округлить до скольки знаков после запятой


https://lab.karpov.courses/learning/152/module/1762/lesson/18484/53200/251086/