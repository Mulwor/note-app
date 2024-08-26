import React from "react"

export default {
  title: "useEffect demo",
}

export const BasicUseEffect = () => {
  const [counter, setCounter] = React.useState(1)
  const [fake, setFake] = React.useState(1)

  console.log("---- Компонент: BasicUseEffect загрузился ----")

  React.useEffect(() => {
    console.log("UseEffect срабатывает каждый раз при рендеринге")
    document.title = counter.toString();
  })

  React.useEffect(() => {
    console.log("Срабатывает только при первом рендер, (СomponentDidMount) ")
    document.title = counter.toString();
  }, [])

  React.useEffect(() => {
    console.log("Сработал после того как отрисовался наш компонент и изменился счетчик")
    document.title = counter.toString();
  }, [counter])


  
  return (
    <div>
      <h4>1. Знакомство с useEffect, а именно его основы</h4>
      <span>Проверка как работает счетчик, {counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setFake(fake + 1)}>+</button>
    </div>
  )
}
