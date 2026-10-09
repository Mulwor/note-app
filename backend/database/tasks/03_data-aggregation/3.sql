-- * Задача №14
-- ? Рассчитайте среднее количество товаров в заказах из таблицы orders, которые пользователи 
-- ? оформляли по выходным дням (суббота и воскресенье) в течение всего времени работы сервиса.
-- ? Полученное значение округлите до двух знаков после запятой. Колонку с ним назовите avg_order_size.
-- ? Поле в результирующей таблице: avg_order_size

SELECT 
  ROUND(AVG(array_length(product_ids, 1)), 2) as avg_order_size
FROM   orders
WHERE  DATE_PART('dow', creation_time) = 6.00 OR DATE_PART('dow', creation_time) = 0.00


SELECT round(avg(array_length(product_ids, 1)), 2) as avg_order_size
FROM   orders
WHERE  date_part('dow', creation_time) in (6, 0)



-- ! ==============================================================
-- * Задача №15
-- ? На основе данных в таблице user_actions посчитайте количество уникальных пользователей сервиса, 
-- ? количество уникальных заказов, поделите одно на другое и выясните, сколько заказов приходится на
-- ? одного пользователя.
-- ? В результирующей таблице отразите все три значения — поля назовите соответственно unique_users, 
-- ? unique_orders, orders_per_user.
-- ? Показатель числа заказов на пользователя округлите до двух знаков после запятой.
-- ? Поля в результирующей таблице: unique_users, unique_orders, orders_per_user

SELECT 
   COUNT(distinct user_id) as unique_users,
   COUNT(distinct order_id) as unique_orders,
   ROUND(COUNT(distinct order_id)::decimal / COUNT(distinct user_id), 2) as orders_per_user
FROM   user_actions



-- ! ==============================================================
-- * Задача №16
-- ? Посчитайте, сколько пользователей никогда не отменяли свой заказ. 
-- ? Для этого из общего числа всех уникальных пользователей отнимите 
-- ? число уникальных пользователей, которые хотя бы раз отменяли заказ. 
-- ? Подумайте, какое условие необходимо указать в FILTER, чтобы получить
-- ? корректный результат. Полученный столбец назовите users_count.
-- ? Поле в результирующей таблице: users_count

SELECT 
  -- 21,401 - 2,760	(COUNT(DISTINCT user_id) FILTER (WHERE action = 'cancel_order'))
  COUNT(DISTINCT user_id) - COUNT(DISTINCT user_id) FILTER (WHERE action = 'cancel_order') AS users_count
FROM user_actions




-- ! ==============================================================
-- * Задача №17
-- ? Посчитайте общее количество заказов в таблице orders, количество заказов 
-- ? с пятью и более товарами и найдите долю заказов с пятью и более товарами в 
-- ? общем количестве заказов.
-- ? В результирующей таблице отразите все три значения — поля назовите соответственно
-- ? orders, large_orders, large_orders_share.
-- ? Долю заказов с пятью и более товарами в общем количестве товаров округлите до двух знаков после запятой.
-- ? Поля в результирующей таблице: orders, large_orders, large_orders_share

SELECT count(order_id) as orders,
       count(order_id) filter (WHERE array_length(product_ids, 1) >= 5) as large_orders,
       round(count(order_id) filter (WHERE array_length(product_ids, 1) >= 5)::decimal / count(order_id),
             2) as large_orders_share
FROM   orders