## React

<h3 align="center">Basic</h3>

1. What's react?
2. What's JSX?
3. What's component?
4. What is difference between functional and class component?
5. What is difference between controlled and uncontrolled component?
6. What are React keys and why are they important?
7. It's good use Id or not, and if we don't have id, how our program start work
8. What's difference between state/props?
9. What happens if you change props directly? - Что произойдет, если изменить props напрямую?
10. Is it possible to change props inside a component? - Можно ли изменять props внутри компонента?
11. What is prop drilling and how to avoid it?
12. What are children props?
13. What's life cycle components? Что такое жизненный цикл компонента?
14. How do you increase performance in React?
15. What's different Client Side Rendering vs. Server Side Rendering
16. What's error boundary?
17. Styling Techniques in React

<h3 align="center">Hooks</h3>

1. What are hooks for? Which hooks do you know?
2. Is it possible to call a hook inside a condition or loop?
3. Why doesn't setState update the data instantly (asynchrony)? - Почему setState не обновляет данные мгновенно (асинхронность)?
4. Where is the component's state stored? - Где хранится состояние компонента?
5. How `useEffect` hook works?
6. What are the three ways to use useEffect?
   No dependency array: runs after every render • Empty array []: runs once on mount, cleanup on unmount • With dependencies [count]: runs when dependencies change • Always include cleanup function for subscriptions/listeners • Runs AFTER render (asynchronous), not during
7. How we handle with life cycle methods in functional components?
8. If you do not have any props in dependency how does we hook work? - componentDidMount
9. If you have some props in dependency how we will work in this case? - componentDidUpdate
10. How can handle componentWillUnmount?
11. How can I cancel the request when unmounting a component? - Как отменить запрос при размонтировании компонента?
12. When is cleanup performed in useEffect? - Когда выполняется очистка (cleanup) в useEffect?
13. What happens when mounting, updating, and unmounting? - Что происходит при монтировании, обновлении и размонтировании?
14. What is high order component (HOC)?
15. Can you provide some building high order component?
16. How do you create a custom hook?
17. What's different between useEffect vs useLayoutEffect?
18. What is the difference between useMemo and useCallback?
    • useMemo returns memoized VALUE, useCallback returns memoized FUNCTION
19. When can memoization (memo, useMemo) be harmful?
20. What is useReducer?
21. What are Refs in React? And what is useRef for (Для чего нужен useRef?)?

<h3 align="center">Another</h3>

1. Tell me about virtual dom, reconciliation algorithm of virtual dom
   
JS representation of real DOM • React compares old and new virtual DOM, only updates changed nodes

2. What's pure function
3. Как создать Context?
4. Как избежать лишних ререндеров при использовании Context?
5. What is react Batching?
6. Что такое observable?
7. Почему в Dev-режиме эффекты срабатывают дважды
8. how to implement Debouncing in react?
9. what is portals?
10. what is react fiber? 
11. what is useTransitions?
