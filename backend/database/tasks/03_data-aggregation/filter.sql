-- FILTER чаще всего используется вместе с агрегатными функциями: COUNT, SUM, AVG, 
-- MAX, MIN. Например есть числа numbers 10 20 30 40

-- Допустим, мы хотим посчитать только числа больше 20.
SELECT 
  COUNT(order_id) FILTER (WHERE number > 20)
  COUNT(pay) FILTER (WHERE status = 'paid')
FROM orders;


-- FILTER очень удобно использовать, когда нужно получить несколько разных подсчётов одним запросом:
SELECT
  COUNT(*) FILTER (WHERE age < 18) AS children,
  COUNT(*) FILTER (WHERE age >= 18) AS adults
FROM users;
