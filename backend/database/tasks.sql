-- Задача №1 - Сделайте простой запрос к таблице products, и ---
-- посмотрите какие поля у него есть и вытащите все необходимые ---

SELECT * FROM products;
SELECT product_id, name, price FROM products;

-- Задача №2 - Вытащите все поля и отсортируйте имя в алфавитном
-- порядке по возрастанию 

SELECT * FROM products ORDER BY name;
SELECT product_id, name, price FROM products ORDER BY name
SELECT product_id, name, price FROM products ORDER BY name ASC

-- Задача №3 - Отсортируйте таблицу courier_actions сначала по 
-- колонке courier_id по возрастанию id курьера, потом по колонке 
-- action (снова по возрастанию), а затем по колонке time, но 
-- уже по убыванию — от самого последнего действия к самому первому. 
-- Не забудьте включить в результат колонку order_id.

SELECT courier_id,
       order_id,
       action,
       time
FROM   courier_actions
ORDER BY courier_id ASC, action ASC, time DESC limit 1000



-- Задача №4  Используя операторы SELECT, FROM, ORDER BY и LIMIT, 
-- определите 5 самых дорогих товаров в таблице products, которые 
-- доставляет наш сервис. Выведите их наименования и цену.
-- Поля в результирующей таблице: name, price
SELECT name, price from products ORDER BY price desc LIMIT 5


-- Задача №5 - Продолжения задачи №4 - необходимо переименовать колонку 
-- с помощью AS либо не указывать запятую и вернуть 5 самых дорогих товаров
SELECT name as product_name,
       price as product_price
FROM   products
ORDER BY price desc limit 5

-- Будет работать но лучше AS указать
SELECT name product_name,
       price product_price
FROM   products
ORDER BY price desc limit 5