-- * Задача №14
-- ? Отберите из таблицы users пользователей мужского пола, которые старше всех пользователей женского пола.
-- ? Выведите две колонки: id пользователя и дату рождения. Результат отсортируйте по возрастанию id пользователя.
-- ? Поля в результирующей таблице: user_id, birth_date

SELECT user_id, birth_date
FROM users
WHERE sex = 'male'
  AND birth_date < (
    SELECT MIN(birth_date) FROM users
    WHERE sex = 'female'
  )
ORDER BY user_id;


-- ! =============================================================================
-- * Задача 15
-- ? Выведите id и содержимое 100 последних доставленных заказов из таблицы 
-- ? orders.
-- ? Содержимым заказов считаются списки с id входящих в заказ товаров. 
-- ? Результат отсортируйте по возрастанию id заказа.
-- ?Поля в результирующей таблице: order_id, product_ids

SELECT order_id, product_ids
FROM orders
WHERE order_id IN (
    SELECT order_id
    FROM courier_actions
    WHERE action = 'deliver_order'
    ORDER BY time DESC
    LIMIT 100
)
ORDER BY order_id;


=> https://lab.karpov.courses/learning/152/module/1762/lesson/17928/53213/257129/