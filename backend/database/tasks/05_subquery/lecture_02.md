Подзапросы могут применяться в следующих частях основного запроса:
1. в операторе FROM;
2. в операторе SELECT (если запрос возвращает один столбец с одним значением);
3. в операторах WHERE и HAVING (если запрос возвращает один столбец с одним или несколькими значениями);
4. в операторе CASE при формировании продвинутых условных конструкций

Теперь разберем каждый из пунктов, но прежде всего отметим, что подзапрос — это такая же таблица, только временная. Она формируется в процессе выполнения основного запроса и нигде не сохраняется.

FROM - необходимо добавлять алиас, иначе запрос не сработает
```sql
SELECT column_1
FROM (SELECT column_1, column_2 FROM table) AS subquery_1
```

В данном примере сначала будет выполнен подзапрос, который отберёт колонки column_1 и column_2 из таблицы table, а затем уже из образовавшейся таблицы основной запрос выберет колонку column_1. Другой пример - например посчитать кол-во мужского пола:

Без подзапроса

```sql
SELECT sex, COUNT(user_id) AS users_count
FROM users
WHERE sex = 'male'
GROUP BY sex

SELECT sex, COUNT(user_id) AS users_count
FROM users
GROUP BY sex
HAVING sex = 'male'
```

С подзапросом
```sql 
SELECT sex, users_count
FROM (
  SELECT sex, COUNT(user_id) AS users_count
  FROM users
  GROUP BY sex
) AS subquery
WHERE sex = 'male'
```

В подзапросе мы сначала сгруппировали наши данные по полу и посчитали число пользователей в каждой группе, а потом обратились к результату этого подзапроса, как к таблице, и отобрали с помощью WHERE нужную нам группу.

А теперь давайте представим себе, что у нас очень много подзапросов, условно у одного запрос подзапрос, а у него еще один. Как быть? - Исп табличное выражения - это временные таблицы, существующие только для одного запроса. Их основное предназначение заключается в разбиении сложных запросов на несколько частей и с этим нам помогает оператор WITH которая создает переменную к которую можно обратится


Одинарная вложенность подзапроса: 
```sql
WITH 
subquery_1 AS ( SELECT column_1, column_2 FROM table )
SELECT column_1
FROM subquery_1
```

Это тоже самое что и 

```sql
SELECT column_1
FROM (SELECT column_1, column_2 FROM table) AS subquery_1
```

Двойная вложенность подзапросов:
```sql
WITH 
subquery_1 AS (SELECT column_1, column_2, column_3 FROM table),
subquery_2 AS (SELECT column_1, column_2 FROM subquery_1 )

SELECT column_1
FROM subquery_2
```

Это тоже самое что и 
```sql
SELECT column_1
FROM (
  SELECT column_1, column_2
  FROM ( SELECT column_1, column_2, column_3 FROM table) AS subquery_1
) AS subquery_2
```

