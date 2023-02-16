import React from 'react'
import { Field } from './field'
import { submitted } from './effector'

export const FirstForms = () => (
  <form onSubmit={submitted}>
    <p>Первый пример основан на том, чтобы выводить в консоль лог данные которые пользователь ввел</p>
    <Field name="login" label="Login" />
    <Field name="password" type="password" label="Password" />
    <button type="submit">Submit!</button>
  </form>
)

// Подписывается на событие эффектора
submitted.watch(e => {
    e.preventDefault()
})
  