-- * Задача №7
-- ? Выберите из таблицы products id и наименования только тех товаров, названия 
-- ? которых начинаются на букву «с» и содержат только одно слово.
-- ? Результат должен быть отсортирован по возрастанию id товара.
-- ? Поля в результирующей таблице: product_id, name

-- ! Лучшее решение
SELECT product_id, name
FROM   products
WHERE  name like 'с%' and name not like '% %' 
ORDER BY product_id

-- ! Второе решение
SELECT product_id, name
FROM products
WHERE name LIKE 'с%' and name NOT LIKE 'сок %'
ORDER BY product_id



-- ! ==============================================================
-- * Задача №8
-- ? Составьте SQL-запрос, который выбирает из таблицы products все чаи стоимостью больше 
-- ? 60 рублей и вычисляет для них цену со скидкой 25%.
-- ? Скидку в % менеджер попросил указать в отдельном столбце в формате текста, то есть 
-- ? вот так: «25%» (без кавычек). Столбцы со скидкой и новой ценой назовите соответственно 
-- ? discount и new_price.

-- ? Также необходимо любым известным способом избавиться от «чайного гриба»: вряд ли менеджер 
-- ? имел в виду и его, когда ставил нам задачу.
-- ? Результат должен быть отсортирован по возрастанию id товара.
-- ? Поля в результирующей таблице: product_id, name, price, discount, new_price

-- ! Лучшее решение
SELECT product_id,
       name,
       price,
       '25%' as discount,
       price * 0.75 as new_price
FROM   products
WHERE  name like '%чай %'
   and price > 60
ORDER BY product_id

-- ! Второе решение
SELECT 
    product_id, 
    name, 
    price,
    '25%' as discount,
    CASE 
      WHEN split_part(name, ' ', 1) = 'чай' AND price >= 60 THEN price - (price * 0.25)
      END AS new_price
FROM products
WHERE split_part(name, ' ', 1) = 'чай' AND price >= 60



-- ! ==============================================================
-- * Задача №9
-- ? Из таблицы user_actions выведите всю информацию о действиях пользователей с id 170, 200 и 230 
-- ? за период с 25 августа по 4 сентября 2022 года включительно. Результат отсортируйте по убыванию
-- ? id заказа — то есть от самых поздних действий к самым первым.
-- ? Поля в результирующей таблице: user_id, order_id, action, time

-- ! Лучшее решение
SELECT user_id, order_id, action, time
FROM   user_actions
WHERE  user_id in (170, 200, 230)
   and time >= '2022-08-25'
   and time < '2022-09-05'
ORDER BY order_id desc

SELECT user_id, order_id, action, time FROM user_actions
WHERE 
  user_id IN(170, 200, 230) AND 
  time BETWEEN '2022-08-25 00:00:00' AND '2022-09-04 23:59:59'
ORDER BY order_id DESC



-- ! ==============================================================
-- * Задача №10
-- ? Напишите SQL-запрос к таблице couriers и выведите всю информацию 
-- ? о курьерах, у которых не указан их день рождения. Результат должен
-- ? быть отсортирован по возрастанию id курьера.
-- ?  Поля в результирующей таблице: birth_date, courier_id, sex

SELECT birth_date, courier_id, sex
FROM   couriers
WHERE  birth_date is null
ORDER BY courier_id


-- ! ==============================================================
-- * Задача №11
-- ? Определите id и даты рождения 50 самых молодых пользователей мужского пола из таблицы 
-- ? users. Не учитывайте тех пользователей, у которых не указана дата рождения.
-- ? Поле в результирующей таблице: user_id, birth_date

SELECT user_id, birth_date FROM users
WHERE 
  sex = 'male' AND
  birth_date IS NOT NULL
ORDER BY birth_date DESC
LIMIT 50