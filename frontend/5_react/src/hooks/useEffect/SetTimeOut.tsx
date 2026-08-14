import React from "react"

export default {
  title: "useEffect demo",
}

export const UseEffectWithSetTimeOut = () => {
  const [counter, setCounter] = React.useState(1)
  const [fake, setFake] = React.useState(1)

  console.log("---- Компонет: setTimeOut загрузился ---- ")

  React.useEffect(() => {
    setTimeout(() => {
      console.log("Сработал сеттаймаут")
      document.title = counter.toString()
    }, 1000)
  }, [counter])

  React.useEffect(() => {
    setInterval(() => {
      console.log("Сработал сеттаймаут")
      setFake((state) => state + 1)
    }, 3000)
  }, [])

  return (
    <div>
      <h4>2. Работа с сеттаймаутом</h4>
      <div>Проверка сounter, {counter}; </div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      
      <div>Проверка fake, {fake}; </div>
    </div>
  )
}
