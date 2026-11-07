-- * Задача №7

-- ? Из таблицы user_actions с помощью подзапроса или табличного выражения 
-- ? отберите все заказы, которые не были отменены пользователями.

-- ? Выведите колонку с id этих заказов. Результат запроса отсортируйте по 
-- ? возрастанию id заказа.
-- ? Добавьте в запрос оператор LIMIT и выведите только первые 1000 строк 
-- ? результирующей таблицы. Поле в результирующей таблице: order_id


WITH 
  subquery AS (
    SELECT order_id
    FROM user_actions
    WHERE action = 'cancel_order'
  )

SELECT order_id
FROM user_actions
WHERE order_id NOT IN (SELECT subquery.order_id FROM subquery)
LIMIT 1000


-- ! =============================================================================
-- * Задача №8
-- ? Используя данные из таблицы user_actions, рассчитайте, сколько заказов 
-- ? сделал каждый пользователь и отразите это в столбце orders_count.

-- ? В отдельном столбце orders_avg напротив каждого пользователя укажите 
-- ? среднее число заказов всех пользователей, округлив его до двух знаков 
-- ? после запятой.

-- ? Также для каждого пользователя посчитайте отклонение числа заказов от 
-- ? среднего значения. Отклонение считайте так: число заказов «минус» 
-- ? округлённое среднее значение. Колонку с отклонением назовите orders_diff.

-- ? Результат отсортируйте по возрастанию id пользователя. Добавьте в запрос 
-- ? оператор LIMIT и выведите только первые 1000 строк результирующей таблицы.
-- ? Поля в результирующей таблице: user_id, orders_count, orders_avg, orders_diff

WITH 
  t1 AS (
    SELECT user_id, COUNT(action) AS orders_count
    FROM user_actions
    WHERE action = 'create_order'
    GROUP BY user_id
  )

SELECT 
  user_id,
  orders_count,
  -- ROUND(AVG(orders_count) OVER (), 2)
  ROUND((SELECT AVG(orders_count) FROM t1), 2) as orders_avg, 
  orders_count - round((SELECT avg(orders_count) FROM t1), 2) as orders_diff
FROM   t1
ORDER BY user_id 
LIMIT 1000


-- ! =============================================================================
-- * Задача №9 - 
-- ? Назначьте скидку 15% на товары, цена которых превышает среднюю  цену на все 
-- ? товары на 50 и более рублей, а также скидку 10% на товары, цена которых ниже
-- ? средней на 50 и более рублей. Цену остальных товаров внутри диапазона (
-- ? среднее - 50; среднее + 50) оставьте без изменений. При расчёте средней
-- ? цены, округлите её до двух знаков после запятой.

-- ? Выведите информацию о всех товарах с указанием старой и новой цены. Колонку 
-- ? с новой ценой назовите new_price. Результат отсортируйте сначала по убыванию
-- ? прежней цены в колонке price, затем по возрастанию id товара.
-- ? Поля в результирующей таблице: product_id, name, price, new_price

SELECT 
  product_id, name, price,
  CASE
    -- 15% скидка
    WHEN price >= (SELECT ROUND(AVG(price), 2) FROM products) + 50
    THEN ROUND(price * 0.85, 2)
    -- 10% скидка
    WHEN price <= (SELECT ROUND(AVG(price), 2) FROM products) - 50
    THEN ROUND(price * 0.90, 2)
    ELSE price
  END AS new_price
FROM products
ORDER BY price desc, product_id

-- * 

WITH 
  avg_price AS (
    SELECT ROUND(AVG(price), 2) as price
    FROM   products
  )

SELECT product_id, name, price,
  CASE 
    WHEN price >= (SELECT * FROM avg_price) + 50 THEN price * 0.85 
    WHEN price <= (SELECT * FROM avg_price) - 50 THEN price * 0.9 
    ELSE price 
    END AS new_price
FROM   products
ORDER BY price desc, product_id


-- ! =============================================================================
-- * Задача №10 
-- ? Выясните, есть ли в таблице courier_actions такие заказы, которые были 
-- ? приняты курьерами, но не были созданы пользователями. Посчитайте количество
-- ? таких заказов.

-- ? Колонку и поле с числом заказов назовите orders_count.

SELECT  
  COUNT(action = 'accept_order') - COUNT(action = 'deliver_order') as orders_count
FROM courier_actions


SELECT COUNT(distinct order_id) as orders_count
FROM   courier_actions
WHERE  action = 'accept_order' AND order_id NOT IN (SELECT order_id FROM user_actions)



-- ! =============================================================================
-- * Задача №11
-- ? Выясните, есть ли в таблице user_actions такие заказы, которые были приняты
-- ? курьерами, но не были доставлены пользователям: у заказа нет записи с 
-- ? действием 'deliver_order' в таблице courier_actions. Посчитайте уникальное
-- ? количество таких заказов: используйте count(distinct order_id).
-- ? Колонку и поле с числом заказов назовите orders_count.

SELECT COUNT(DISTINCT order_id) AS orders_count
FROM user_actions
WHERE action = 'accept_order'
  AND order_id NOT IN (
    SELECT order_id
    FROM courier_actions
    WHERE action = 'deliver_order'
  );


-- ! =============================================================================
-- * Задача №12
-- ? Определите количество отменённых заказов в таблице courier_actions и 
-- ? выясните, есть ли в этой таблице такие заказы, которые были отменены 
-- ? пользователями, но при этом всё равно были доставлены. Посчитайте кол-во 
-- ? таких заказов.

-- ? Колонку с отменёнными заказами назовите orders_canceled. Колонку с 
-- ? отменёнными, но доставленными заказами назовите orders_canceled_and_delivered. 

SELECT 
  COUNT(DISTINCT order_id) AS orders_count,
  COUNT(distinct order_id) FILTER (WHERE action = 'deliver_order') as orders_canceled_and_de
FROM courier_actions
WHERE order_id IN (SELECT order_id
                    FROM   user_actions
                    WHERE  action = 'cancel_order')


-- ! =============================================================================
-- * Задача №13
-- ? По таблицам courier_actions и user_actions снова определите число 
-- ? недоставленных заказов и среди них посчитайте кол-во отменённых заказов и 
-- ? кол-во заказов, которые не были отменены (и соответственно, пока ещё не 
-- ? были доставлены).

-- ? Колонку с недоставленными заказами назовите orders_undelivered, 
-- ? Колонку с отменёнными заказами назовите orders_canceled, 
-- ? Колонку с заказами «в пути» назовите orders_in_process.

SELECT 
  COUNT(distinct order_id) as orders_undelivered,
  COUNT(order_id) filter (WHERE action = 'cancel_order') as orders_canceled,
  COUNT(distinct order_id) - COUNT(order_id) FILTER (WHERE action = 'cancel_order') as orders_in_process
FROM   user_actions
WHERE  order_id in (
  SELECT order_id FROM courier_actions
  WHERE  order_id not in (
    SELECT order_id FROM   courier_actions
    WHERE  action = 'deliver_order'
  )
)

