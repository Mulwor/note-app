import React from 'react'

import { Loader } from './loader'
import { SubmitButton } from './submit'
import { sendFormFx } from "./effector";


const onSubmit = sendFormFx.prepend(e => new FormData(e.target))

//transforming upcoming data, from DOM Event to FormData


onSubmit.watch(e => {
  e.preventDefault()
})

export const SecondForms = () => (
  <form onSubmit={onSubmit}>
    Login: <input name="name" />
    <br />
    Password: <input name="password" type="password" />
    <br />
    <Loader />
    <SubmitButton />
  </form>
)
