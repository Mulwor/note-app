Оператор GROUP BY в SQL объединяет строки с одинаковыми значениями в указанных столбцах в одну общую группу/ 

```sql
SELECT 
  action, 
  COUNT(DISTINCT user_id) as users 
FROM user_actions
GROUP BY action
```

action | users
---|---
cancel_order | 2700 | 
create_order | 21401 |

Where - фильтрация до агрегации данных
Having - фильтрация после агрегации данных 

```sql
SELECT
  action, 
  COUNT(DISTINCT order_id) as canceled_orders
FROM user_action
WHERE action = 'cancel_order' 
GROUP BY user_id
HAVING COUNT(DISTINCT order_id) > 2
ORDER BY user_id
```

Порядок выполнения 
- Сначала выполняется оператор FROM — происходит выбор нужной таблицы.
- Далее WHERE — отфильтровываются строки, соответствующие условию.
- Потом GROUP BY — строки объединяются в группы и производится агрегация.
- Затем SELECT — отбираются указанные столбцы.
- Потом ORDER BY — производится сортировка результирующей таблицы.
- И в самом конце LIMIT — ограничивается количество выводимых записей.


Функция `DATE_TRUNC` используется для усечения дат и времени, т.е. она работает аналогично округлению ROUND, только для типов данных TIMESTAMP и INTERVAL. Синтаксис: DATE_TRUNC(part, column), где part до какой точности следует округлять переданное значение времени:  'year', 'month', 'day', 'hour' и т.д.