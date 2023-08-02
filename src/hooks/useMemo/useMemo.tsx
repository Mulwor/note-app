import React, { useState, useMemo } from "react"

export const ExampleUseCallback1 = () => {
  console.log("likeUseCallBack")
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["React", "Js", "CSS", "HTML"])

  const newArray = useMemo(() => {
    const newArray = users.filter((u) => u.toLowerCase().indexOf("a") - 1)
    return newArray;
  }, [users])

  const addUser = () => {
    const newUsers = [...users, "Sveta" + new Date().getTime()]
    setUsers(newUsers)
  }

  return (
    <>
      <button onClick={() => setCounter(counter+1)}> + </button>
      <button onClick={() => addUser}> add user </button>
      {counter}
    </>
  )
}
