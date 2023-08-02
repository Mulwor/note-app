import React, { useState, useMemo } from "react"

export const ExampleUseMemo = () => {
  console.log("likeUseCallBack")
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["React", "Js", "CSS", "HTML"])

  const newArray = useMemo(() => {
    const newArray = users.filter((u) => u.toLowerCase().indexOf("a") - 1)
    return newArray
  }, [users])

  const addUser = () => {
    const newUsers = [...users, "Sveta" + new Date().getTime()]
    setUsers(newUsers)
  }
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}> + </button>
      <button onClick={() => addUser}> add user </button>
      {counter}
    </>
  )
}

export const ExampleWithUseMemo = () => {
  const [a, setA] = React.useState(3)
  const [b, setB] = React.useState(3)

  let resultA = 1
  let resultB = 1

  resultA = useMemo(() => {
    let templateA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 10000000) {
        fake++
        const fakeValue = Math.random()
      }
      templateA = templateA * i
    }
    return templateA
  }, [a])

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i
  }

  return (
    <div>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </div>
  )
}
