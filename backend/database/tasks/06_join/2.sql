-- ! Задание №6 
-- ? У нас есть 2 таблицы
SELECT birth_date, COUNT(user_id) AS users_count
FROM users
WHERE birth_date IS NOT NULL
GROUP BY birth_date

SELECT birth_date, COUNT(courier_id) AS couriers_count
FROM couriers
WHERE birth_date IS NOT NULL
GROUP BY birth_date
-- ? С помощью FULL JOIN объедините по ключу birth_date таблицы, полученные 
-- ? в результате вышеуказанных запросов (то есть объедините друг с другом 
-- ? два подзапроса). Не нужно изменять их, просто добавьте нужный JOIN.
-- ? В результат включите две колонки с birth_date из обеих таблиц. Эти две 
-- ? колонки назовите соответственно users_birth_date и couriers_birth_date. 
-- ? Также включите в результат колонки с числом пользователей и курьеров —
-- ? users_count и couriers_count.
-- ? Отсортируйте получившуюся таблицу сначала по колонке users_birth_date 
-- ? по возрастанию, затем по колонке couriers_birth_date — тоже по 
-- ? возрастанию.
-- + Поля в результирующей таблице: users_birth_date, users_count, 
-- + couriers_birth_date, couriers_count
-- ? После того как решите задачу, изучите полученную таблицу в Redash. 
-- ? Обратите внимание на пропущенные значения в колонках с датами рождения 
-- ? курьеров и пользователей. Подтвердилось ли наше предположение?

WITH 
  table_01 AS (
    SELECT birth_date, COUNT(user_id) AS users_count
    FROM users
    WHERE birth_date IS NOT NULL
    GROUP BY birth_date
  ),
  table_02 AS ( 
    SELECT birth_date, COUNT(courier_id) AS couriers_count
    FROM couriers
    WHERE birth_date IS NOT NULL
    GROUP BY birth_date
  )
  
SELECT
  lt.birth_date as users_birth_date, 
  users_count, 
  rt.birth_date as couriers_birth_date,
  couriers_count
FROM table_01 lt FULL JOIN table_02 rt
USING (birth_date)
ORDER BY users_birth_date, couriers_birth_date


-- ! =======================================================================
-- ! Задание №7
-- ? У нас есть 2 таблицы

SELECT birth_date
FROM users
WHERE birth_date IS NOT NULL

SELECT birth_date
FROM couriers
WHERE birth_date IS NOT NULL

-- ? Объедините два запроса друг с другом так, чтобы на выходе получился 
-- ? набор уникальных дат из таблиц users и couriers. Поместите в подзапрос 
-- ? полученный после объединения набор дат и посчитайте их количество. 
-- ? Колонку и поля с числом дат назовите dates_count.

SELECT count(birth_date) as dates_count
FROM ( 
  SELECT birth_date FROM users WHERE birth_date IS NOT NULL
  UNION
  SELECT birth_date FROM couriers WHERE birth_date IS NOT NULL
) t


-- ! =======================================================================
-- ! Задание №8
-- ? Из таблицы users отберите id первых 100 пользователей (просто выберите 
-- ? первые 100 записей, используя простой LIMIT) и с помощью CROSS JOIN 
-- ? объедините их со всеми наименованиями товаров из таблицы products. 
-- ? Выведите две колонки — id пользователя и наименование товара. Результат 
-- ? отсортируйте сначала по возрастанию id пользователя, затем по имени товара
-- ?  — тоже по возрастанию.
-- + Поля в результирующей таблице: user_id, name

SELECT
  lt.user_id, 
  rt.name
FROM (
  SELECT user_id
  FROM users
  LIMIT 100
) lt 
CROSS JOIN products rt
ORDER BY lt.user_id, rt.name



-- ! =======================================================================
-- ! Задание №9
-- ? Для начала объедините таблицы user_actions и orders — это вы уже умеете делать. 
-- ? В качестве ключа используйте поле order_id. Выведите id пользователей и заказов, 
-- ? а также список товаров в заказе. Отсортируйте таблицу по id пользователя по 
-- ? возрастанию, затем по id заказа — тоже по возрастанию.
-- ? Добавьте в запрос оператор LIMIT и выведите только первые 1000 строк результирующей
-- ? таблицы. Поля в результирующей таблице: user_id, order_id, product_ids

SELECT user_id, order_id, product_ids
FROM user_actions JOIN orders
-- FROM user_actions LEFT JOIN orders
USING (order_id)
ORDER BY user_id, order_id
LIMIT 1000



-- ! =======================================================================
-- ! Задание №10
-- ? Снова объедините таблицы user_actions и orders, но теперь оставьте только 
-- ? уникальные неотменённые заказы (мы делали похожий запрос на прошлом уроке). 
-- ? Остальные условия задачи те же: вывести id пользователей и заказов, а также 
-- ? список товаров в заказе. Отсортируйте таблицу по id пользователя по 
-- ? возрастанию, затем по id заказа — тоже по возрастанию.
-- ? Добавьте в запрос оператор LIMIT и выведите только первые 1000 строк 
-- ? результирующей таблицы.
-- ? Поля в результирующей таблице: user_id, order_id, product_ids
SELECT user_id, order_id, product_ids
FROM user_actions LEFT JOIN orders
USING (order_id)
WHERE order_id  NOT IN (SELECT order_id FROM user_actions WHERE action = 'cancel_order')
ORDER BY user_id, order_id
LIMIT 1000



-- ! =======================================================================
-- ! Задание №11
-- ? Используя запрос из предыдущего задания, посчитайте, сколько в среднем товаров 
-- ? заказывает каждый пользователь. Выведите id пользователя и среднее количество 
-- ? товаров в заказе. Среднее значение округлите до двух знаков после запятой. Колонку 
-- ? с посчитанными значениями назовите avg_order_size. Результат выполнения запроса 
-- ? отсортируйте по возрастанию id пользователя. 
-- ? Добавьте в запрос оператор LIMIT и выведите только первые 1000 строк результирующей
-- ? таблицы. Поля в результирующей таблице: user_id, avg_order_size
SELECT user_id, ROUND(AVG(array_length(product_ids, 1)), 2) as avg_order_size
FROM user_actions LEFT JOIN orders
USING (order_id)
WHERE order_id  NOT IN (SELECT order_id FROM user_actions WHERE action = 'cancel_order')
GROUP BY user_id
ORDER BY user_id
LIMIT 1000