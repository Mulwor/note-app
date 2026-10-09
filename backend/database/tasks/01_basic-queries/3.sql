-- Задание №13 - Повысьте цену всех товаров на 5%, только теперь к колонке с новой ценой примените функцию ROUND. 
-- Выведите id и наименования товаров, их старую цену, а также новую цену с округлением. Новую цену округлите до 
-- одного знака после запятой, но тип данных не меняйте. Результат отсортируйте сначала по убыванию новой цены, 
-- затем по возрастанию id товара.
-- Поля в результирующей таблице: product_id, name, old_price, new_price
SELECT 
  product_id,
  name,
  price as old_price,
  ROUND(price * 1.05, 1) as new_price
FROM products
ORDER BY 
  new_price desc,
  product_id 


-- ! =============================================================
-- ? Задание №14 - 1. Повысьте цену на 5% только на те товары, цена 
-- ? которых превышает 100 рублей. 
-- ? 2. Цену остальных товаров оставьте без изменений. 
-- ? 3. Также не повышайте цену на икру, которая и так стоит 800 рублей. 
-- Выведите id и наименования всех товаров, их старую и новую цену. 
-- Цену округлять не нужно. Результат отсортируйте сначала по
-- убыванию новой цены, затем по возрастанию id товара.
-- Поля в результирующей таблице: product_id, name, old_price, new_price

SELECT 
  product_id,
  name,
  price as old_price,
  CASE
  WHEN (name = 'икра' AND price = 800) THEN price
  WHEN (price > 100) THEN price * 1.05
  WHEN (price <= 100) THEN price
  END AS new_price
FROM products
ORDER BY 
 new_price desc,
 product_id 



SELECT 
  product_id,
  name,
  price as old_price,
  CASE 
  WHEN price <= 100 OR name = 'икра' then price
  ELSE price * 1.05 
  END new_price
FROM   products
ORDER BY new_price desc, product_id


-- ! =============================================================
-- ? Задание №15 - Вычислите НДС каждого товара в таблице products
-- ? и рассчитайте цену без учёта НДС. 1. Выведите всю информацию
-- ? о товарах, включая сумму налога и цену без его учёта. Колонки
-- ? с суммой налога и ценой без НДС назовите соответственно tax и 
-- ? price_before_tax. Округлите значения в этих колонках до 2 
-- ? знаков после запятой. Результат отсортируйте сначала по 
-- ? убыванию цены товара без учёта НДС, затем по возрастанию id 
-- ? товара. Поля в результирующей таблице: tax, price_before_tax

SELECT
  product_id,
  name,
  price,
  ROUND(price * 120 / 20, 2) as tax,
  ROUND(price / 1.20, 2) as price_before_tax
FROM
  products
ORDER BY
  tax desc,
  product_id


SELECT product_id,
       name,
       price,
       round(price / 120 * 20, 2) as tax,
       round(price - price / 120 * 20, 2) as price_before_tax
FROM   products
ORDER BY price_before_tax desc, product_id