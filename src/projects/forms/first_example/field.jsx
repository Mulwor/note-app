import { useStoreMap } from 'effector-react'
import { setField, $form } from './effector'

const handleChange = setField.prepend((e) => ({
  key: e.target.name,
  value: e.target.value,
}));


export const Field = ({ name, type, label }) => {
  // useStoreMap - Хук React, который подписывается на хранилище и преобразует его значение с помощью 
  // заданной функции. Компонент будет обновляться только тогда, когда изменится результат функции
  // селектора.
  const value = useStoreMap({
    store: $form,             // исходный store
    keys: [name],             // этот аргумент будет передан в React.useMemo, чтобы избежать ненужных обновлений.
    fn: (values) => values[name] || '',
  });
  
  return (
    <div>
      {label} <input name={name} type={type} value={value} onChange={handleChange} />
    </div>
  );
};
