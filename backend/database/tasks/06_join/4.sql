-- ! Задача 15.
-- ? По данным таблиц orders, products и user_actions посчитайте ежедневную 
-- ? выручку сервиса. Под выручкой будем понимать стоимость всех реализованных 
-- ? товаров, содержащихся в заказах.

-- ? Колонку с датой назовите date, а колонку со значением выручки — revenue.
-- ? В расчётах учитывайте только неотменённые заказы.
-- ? Результат отсортируйте по возрастанию даты. Поля: date, revenue
SELECT date(creation_time) as date,
       sum(price) as revenue
FROM   (
  SELECT order_id, creation_time, product_ids, UNNEST(product_ids) as product_id
  FROM   orders
  WHERE  order_id not in (SELECT order_id FROM   user_actions WHERE  action = 'cancel_order')) t1
  LEFT JOIN products using(product_id)
GROUP BY date