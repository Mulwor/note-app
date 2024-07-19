useRef - хук, который возвращает объект. Причем этот хук одинаковый между всеми ререндарами. У данного хука есть параметр current, который берет значение из фигурных скобок

```
const ref = useRef('1')
ref.current              // 1
```

Данный хук мы можем мутировать и когда мы его мутируем, у нас не вызывается ререндер компонента

```
const ref = useRef('1')
ref.current + 1           // 2
```

Если ты передаешь в useRef - null, то это означает, что ты будешь хранить там dom-элемент