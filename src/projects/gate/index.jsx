import React from "react"
import { Todo } from "./effector"
import { TodoGate } from "./effector"

export const Gate = () => {
    // value which need to be accessed outside from react
    const [id, setId] = React.useState(0)
  
    return (
      <>
        <button onClick={() => setId(id + 1)}>Get next Todo</button>
        {/*In this situation, we have the ability to simultaneously
        render a component and make a request, rather than wait for the component*/}
        <TodoGate id={id} />
        <Todo />
      </>
    )
  }