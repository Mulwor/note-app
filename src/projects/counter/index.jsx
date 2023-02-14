import React from 'react'
import {useStore} from 'effector-react'

import { plus, minus } from './effector'
import { $counter, $counterText, $counterCombined, $subtraction } from './effector'

export const Counter = () => {
  const counter = useStore($counter)
  const counterText = useStore($counterText)
  const counterCombined = useStore($counterCombined)
  const subtraction = useStore($subtraction)
  
  return (
    <div>
      <button onClick={plus}>Plus</button>
      <div>counter: {counter}</div>
      <div>counterText: ${counterText}</div>
      <div>counterCombined: {counterCombined.counter}, {counterCombined.text}</div>

      <button onClick={minus}>Minus</button>
      <div>вычитание: {subtraction}</div>
    </div>
  )
}
