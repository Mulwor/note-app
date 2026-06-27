import { useState, useTransition } from "react";
import { HeavyListFunction } from "./HeavyListFunction";

export const UseTransitionHook_01 = () => {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState('');
  const [deferredQuery, setDeferredQuery] = useState('');

  const handleChange = (e: any) => {
    // Срочное обновление — input реагирует мгновенно
    setQuery(e.target.value);

    // Не срочное — тяжёлый рендер откладывается
    startTransition(() =>  setDeferredQuery(e.target.value));
  };

  return (
    <div>
      asd
      <input
        value={query}
        onChange={handleChange}
        placeholder="Поиск..."
      />

      {/* Показываем индикатор пока transition выполняется */}
      {isPending && <p>Загрузка...</p>} 

      {/* Рендерим тяжёлый список с отложенным значением */}
      <HeavyListFunction query={deferredQuery} />
    </div>
  );
};
