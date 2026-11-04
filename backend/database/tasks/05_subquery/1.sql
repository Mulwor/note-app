-- * Задача №1
-- ? Используя данные из таблицы user_actions, рассчитайте среднее число
-- ? заказов всех пользователей нашего сервиса.

-- ? Для этого сначала в подзапросе посчитайте, сколько заказов сделал 
-- ? каждый пользователь, а затем обратитесь к результату подзапроса в 
-- ? блоке FROM и уже в основном запросе усредните количество заказов по
-- ? всем пользователям.

-- ? Полученное среднее число заказов всех пользователей округлите до двух
-- ? знаков после запятой. Колонку с этим значением назовите orders_avg.
-- ? Поле в результирующей таблице: orders_avg

SELECT ROUND(AVG(orders_count), 2) as orders_avg
FROM (
  SELECT user_id, COUNT(order_id) as orders_count
  FROM user_actions
  WHERE action = 'create_order'
  GROUP BY user_id
) as t1



-- ! ==============================================================
-- * Задача №2
-- ? Условия остаются теми же но замените на WITH
WITH
  orders AS (
    SELECT user_id, COUNT(order_id) as orders_count
    FROM user_actions
    WHERE action = 'create_order'
    GROUP BY user_id
  )

SELECT ROUND(AVG(orders_count), 2) as orders_avg
FROM orders



-- ! ==============================================================
-- * Задача №3 
-- ? Выведите из таблицы products информацию о всех товарах кроме самого 
-- ? дешёвого. Результат отсортируйте по убыванию id товара.
-- ? Поля в результирующей таблице: product_id, name, price
SELECT product_id, name, price
FROM products
WHERE price > (SELECT MIN(price) FROM products)
-- WHERE  price != (SELECT min(price) FROM products)
ORDER BY product_id DESC;



-- ! ==============================================================
-- * Задача №4
-- ? Выведите информацию о товарах в таблице products, цена на которые 
-- ? превышает среднюю цену всех товаров на 20 рублей и более. Результат 
-- ? отсортируйте по убыванию id товара.
-- ? Поля в результирующей таблице: product_id, name, price
SELECT product_id, name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products) + 20
ORDER BY product_id desc



-- ! ==============================================================
-- * Задача №5

-- ? 1. Посчитайте количество уникальных клиентов в таблице user_actions, 
-- ? сделавших за последнюю неделю хотя бы один заказ. 

-- ? Полученную колонку с числом клиентов назовите users_count. В качестве
-- ? текущей даты, от которой откладывать неделю, используйте последнюю дату
-- ? в той же таблице user_actions. Поле в результирующей таблице: users_count

SELECT COUNT(DISTINCT user_id) AS users_count
FROM user_actions
WHERE action = 'create_order'
  AND time >= (SELECT MAX(time) FROM user_actions) - INTERVAL '1 week';

-- * Задача №5_02

WITH 
  unique_id AS (
    SELECT COUNT(DISTINCT user_id) AS users_count
    FROM user_actions
    WHERE action = 'create_order'
      AND time >= (SELECT MAX(time) FROM user_actions) - INTERVAL '7 days'
  )

SELECT *
FROM unique_id;


-- ! ==============================================================
-- * Задача №6 

-- ? С помощью функции AGE и агрегирующей функции снова определите возраст 
-- ? самого молодого курьера мужского пола в таблице couriers, но в этот раз
-- ? при расчётах в качестве первой даты используйте последнюю дату из 
-- ? таблицы courier_actions.

-- ? Чтобы получить именно дату, перед применением функции AGE переведите
-- ? последнюю дату из таблицы courier_actions в формат DATE, как мы делали
-- ? в этом задании.

-- ? Возраст курьера измерьте количеством лет, месяцев и дней и переведите 
-- ? его в тип VARCHAR. Полученную колонку со значением возраста назовите 
-- ? min_age. Поле в результирующей таблице: min_age

SELECT AGE((SELECT MAX(time::DATE) FROM courier_actions), MAX(birth_date))::VARCHAR AS min_age
FROM couriers
WHERE sex = 'male' AND birth_date IS NOT NULL;

SELECT min(age((SELECT max(time)::date
                FROM   courier_actions), birth_date))::varchar as min_age
FROM   couriers
WHERE  sex = 'male'
