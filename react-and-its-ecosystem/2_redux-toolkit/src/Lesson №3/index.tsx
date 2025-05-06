import { selectCounter, useAppSelector } from "./store";
import { useDispatch } from "react-redux";
import { CounterId, DecrementAction, IncrementAction } from "./types";

export const LessonThree = () => {
  return (
    <>
      <Counter counterId="first" />
      <Counter counterId="second" />
    </>
  );
};

export function Counter({counterId}: {counterId: CounterId}) {
  const dispatch = useDispatch()
  // Для того, чтобы получить данные селектора используется useSelector().
  // Стоит уточнить, что внутри он использует ту же логику, которая представлена
  // Для урока 2. Другими словами useSelector() перерисовывает наш компонент только
  // если значение селектора, который мы туда передали меняется при изменении
  // в нашем сторе
  
  // Первый вариант
  // const counterState = useAppSelector((state) => state.counters[counterId])

  // Второй вариант когда селектор находится в сторе
  const counterState = useAppSelector((state) => (
    selectCounter(state, counterId)
  ))


  return (
    <div>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              payload: { counterId }
            } satisfies DecrementAction)
          }
        >
          decrement
        </button>
        counter {counterState?.counter}
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: { counterId }
            } satisfies IncrementAction)
          }
        >
          increment
        </button>
    </div>
  )
}