-- ! Задание №1
-- ? Объедините таблицы user_actions и users по ключу user_id. В результат
-- ? включите две колонки с user_id из обеих таблиц. Эти две колонки
-- ? назовите соответственно user_id_left и user_id_right. Также в 
-- ? результат включите колонки order_id, time, action, sex, birth_date. 
-- ? Отсортируйте получившуюся таблицу по возрастанию id пользователя (в 
-- ? любой из двух колонок с id).
-- + Поля в результирующей таблице: user_id_left, user_id_right,  order_id, 
-- + time, action, sex, birth_date

SELECT user_actions.user_id as user_id_left,
       users.user_id as user_id_right,
       order_id,
       time,
       action,
       sex,
       birth_date
FROM   user_actions JOIN users
ON user_actions.user_id = users.user_id
ORDER BY user_id_left

SELECT lt.user_id as user_id_left,
       rt.user_id as user_id_right,
       order_id,
       time,
       action,
       sex,
       birth_date
FROM   user_actions lt join users rt 
USING (user_id)
ORDER BY user_id_left



-- ! =====================================================================
-- ! Задание №2
-- ? А теперь попробуйте немного переписать запрос из прошлого задания и 
-- ? посчитать количество уникальных id в объединённой таблице. То есть 
-- ? снова объедините таблицы, но в этот раз просто посчитайте уникальные 
-- ? user_id в одной из колонок с id. Выведите это количество в качестве 
-- ? результата. Колонку с посчитанным значением назовите users_count.
-- + Поле в результирующей таблице: users_count
-- ? После того как решите задачу, сравните полученное значение с кол-вом
-- ? уникальных пользователей в таблицах users и user_actions, которое мы
-- ? посчитали на прошлом шаге. С каким значением оно совпадает?

SELECT COUNT(DISTINCT lt.user_id) as users_count
FROM   user_actions lt JOIN users 
USING (user_id)



-- ! =====================================================================
-- ! Задание №3
-- ? С помощью LEFT JOIN объедините таблицы user_actions и users по ключу 
-- ? user_id. Обратите внимание на порядок таблиц — слева user_actions,
-- ? справа users. В результат включите две колонки с user_id из обеих 
-- ? таблиц. Эти две колонки назовите соответственно user_id_left и 
-- ? user_id_right. Также в результат включите колонки order_id, time, 
-- ? action, sex, birth_date. Отсортируйте получившуюся таблицу по
-- ? возрастанию id пользователя (в колонке из левой таблицы).
-- + Поля в результирующей таблице: user_id_left, user_id_right, order_id, 
-- + time, action, sex, birth_date
-- ? После того как решите задачу, обратите внимание на колонки с user_id. 
-- ? Нет ли в какой-то из них пропущенных значений?
SELECT lt.user_id as user_id_left,
       rt.user_id as user_id_right,
       order_id,
       time,
       action,
       sex,
       birth_date
FROM   user_actions lt LEFT JOIN users rt
USING (user_id)
ORDER BY user_id_left



-- ! =====================================================================
-- ! Задание №4
-- ? Теперь снова попробуйте немного переписать запрос из прошлого задания 
-- ? и посчитайте количество уникальных id в колонке user_id, пришедшей из
-- ? левой таблицы user_actions. Выведите это количество в качестве 
-- ? результата. Колонку с посчитанным значением назовите users_count.
-- ? Поле в результирующей таблице: users_count
-- ? После того как решите задачу, сравните полученное значение с 
-- ? количеством уникальных пользователей в таблицах users и user_actions. 
-- ? С каким значением оно совпало в этот раз?

SELECT COUNT(DISTINCT lt.user_id) as users_count
FROM   user_actions lt LEFT JOIN users 
USING (user_id)


-- ! =====================================================================
-- ! Задание №5
-- ? Возьмите запрос из задания 3, где вы объединяли таблицы user_actions 
-- ? и users с помощью LEFT JOIN, добавьте к запросу оператор WHERE и 
-- ? исключите NULL значения в колонке user_id из правой таблицы. Включите 
-- ? в результат все те же колонки и отсортируйте получившуюся таблицу по
-- ? возрастанию id пользователя в колонке из левой таблицы.
-- + Поля в результирующей таблице: user_id_left, user_id_right, order_id, 
-- + time, action, sex, birth_date
-- ? После того как решите задачу, попробуйте сдать это же решение в первом 
-- ? задании — сработает или нет? Подумайте, какой JOIN мы сейчас получили 
-- ? после всех манипуляций с результатом. Заодно можете посчитать число
-- ? уникальных user_id в запросе из этого задания, чтобы расставить все 
-- ? точки над «i».
SELECT lt.user_id as user_id_left,
       rt.user_id as user_id_right,
       order_id,
       time,
       action,
       sex,
       birth_date
FROM   user_actions lt LEFT JOIN users rt
USING (user_id)
WHERE  rt.user_id IS NOT NULL
ORDER BY user_id_left


-- ! =====================================================================
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
