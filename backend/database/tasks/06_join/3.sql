-- ! Задание № 12
-- ? Для начала к таблице с заказами (orders) примените функцию unnest, как мы делали в 
-- ? прошлом уроке. Колонку с id товаров назовите product_id. Затем к образовавшейся 
-- ? расширенной таблице по ключу product_id добавьте информацию о ценах на товары (из 
-- ? таблицы products). Должна получиться таблица с заказами, товарами внутри каждого заказа
-- ? и ценами на эти товары. Выведите колонки с id заказа, id товара и ценой товара. 
-- + Результат отсортируйте сначала по возрастанию id заказа, затем по возрастанию id товара.
-- + Добавьте в запрос оператор LIMIT и выведите только первые 1000 строк результирующей таблицы.
-- + Поля в результирующей таблице: order_id, product_id, price

WITH lt AS (
  SELECT order_id, product_ids, unnest(product_ids) AS product_id
  FROM orders
)

SELECT order_id, product_id, price
FROM lt JOIN products 
USING (product_id)
ORDER BY order_id, product_id
LIMIT 1000;


-- ! ========================================================================================
-- ! Задание № 13
-- ? Используя запрос из предыдущего задания, рассчитайте суммарную стоимость каждого заказа. 
-- ? Выведите колонки с id заказов и их стоимостью. Колонку со стоимостью заказа назовите 
-- ? order_price. Результат отсортируйте по возрастанию id заказа, выведите 1000 строк и поля:
-- ? order_id, order_price

WITH lt AS (
  SELECT order_id, unnest(product_ids) AS product_id
  FROM orders
)

SELECT order_id, SUM(price) AS order_price
FROM lt JOIN products USING (product_id)
GROUP BY order_id
ORDER BY order_id ASC
LIMIT 1000;


-- ! ========================================================================================
-- ! Задание № 14
-- ? Объедините запрос из предыдущего задания с частью запроса, который вы составили в 
-- ? задаче 11, то есть объедините запрос со стоимостью заказов с запросом, в котором 
-- ? вы считали размер каждого заказа из таблицы user_actions. На основе объединённой таблицы 
-- ? для каждого пользователя рассчитайте следующие показатели:
-- + общее число заказов — колонку назовите orders_count
-- + среднее количество товаров в заказе — avg_order_size
-- + суммарную стоимость всех покупок — sum_order_value
-- + среднюю стоимость заказа — avg_order_value
-- + минимальную стоимость заказа — min_order_value
-- + максимальную стоимость заказа — max_order_value
-- ? Полученный результат отсортируйте по возрастанию id пользователя, LIMIT 1000
-- ? Помните, что в расчётах мы по-прежнему учитываем только неотменённые заказы. 
-- ? При расчёте средних значений, округляйте их до двух знаков после запятой.
-- ? Поля user_id и все что + отмечено

WITH 
  order_stats AS (
    SELECT orders.order_id,
           array_length(orders.product_ids, 1) AS order_size,
           SUM(products.price) AS order_price
    FROM orders
    CROSS JOIN LATERAL UNNEST(orders.product_ids) AS product_id
    JOIN products USING (product_id)
    GROUP BY orders.order_id, orders.product_ids
  ),
  user_orders AS (
    SELECT user_actions.user_id,
           order_stats.order_size,
           order_stats.order_price
    FROM user_actions JOIN order_stats USING (order_id)
    WHERE user_actions.order_id NOT IN ( SELECT order_id FROM user_actions WHERE action = 'cancel_order')
  )

SELECT user_id,
       COUNT(*) AS orders_count,
       ROUND(AVG(order_size), 2) AS avg_order_size,
       SUM(order_price) AS sum_order_value,
       ROUND(AVG(order_price), 2) AS avg_order_value,
       MIN(order_price) AS min_order_value,
       MAX(order_price) AS max_order_value
       
FROM user_orders
GROUP BY user_id
ORDER BY user_id
LIMIT 1000;