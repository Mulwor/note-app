Существует два вида assets - asserts condition, которые не изменяет тип
и asserts value is Type, который изменяет тип.

Asserts condition - Здесь если тип не совпадает, пробрасывается именно исключения (выбрасывает ошибка).
Если мы пишем такую конструкцию, то тс понимает, что у нас точно есть значение

Asserts value is Type - Здесь мы утверждаем, что value строго относится к какому-то типу