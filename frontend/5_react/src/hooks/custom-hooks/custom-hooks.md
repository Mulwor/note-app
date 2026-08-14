1. `useDebounce` - позволяет "отложить" значение — полезно для ввода/поиска.

```ts
import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
```

2. `usePrevious` - возвращает предыдущее значение пропа или стейта.

```ts
import { useRef, useEffect } from "react";

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
```

3. `useOnClickOutside` - закрытие модального окна, дропдауна при клике вне.

```ts
import { useEffect } from "react";

export function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      handler();
    };

    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}
```

4. `useIsMounted` - Помогает избежать обновления состояния после размонтирования.

```ts
import { useEffect, useRef } from "react";

export function useIsMounted() {
  const ref = useRef(false);

  useEffect(() => {
    ref.current = true;

    return () => {
      ref.current = false;
    };
  }, []);

  return ref;
}
```

5. `useEventCallback` - Запоминает последнюю версию колбэка без повторного рендера.

```ts
import { useRef, useCallback } from "react";

export function useEventCallback<T extends (...args: any[]) => any>(fn: T): T {
  const ref = useRef(fn);
  ref.current = fn;
  return useCallback((...args: any[]) => ref.current(...args), []) as T;
}
```

6. `useAsync` - Асинхронный вызов с контролем загрузки, ошибок и результата.

```ts
import { useState, useCallback } from "react";

export function useAsync<T>(asyncFn: () => Promise<T>) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown>(null);

  const run = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await asyncFn();
      setData(result);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [asyncFn]);

  return { loading, data, error, run };
}
```

7. `useLocalStorage` - хук для хранения данных в localStorage.

```ts
import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const json = localStorage.getItem(key);
    return json ? JSON.parse(json) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
```

8. `useMediaQuery` - работа с медиа-запросами в React без CSS.

```ts
import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
```

9. `useToggle` - Бинарный переключатель состояния (on/off).

```ts
import { useCallback, useState } from "react";

export function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState((prev) => !prev), []);
  return [state, toggle] as const;
}
```
