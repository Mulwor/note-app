import React from 'react'

import { Loader } from './loader'
import { SubmitButton } from './submit'
import { sendFormFx } from "./effector";

// ! transforming upcoming data, from DOM Event to FormData
const onSubmit = sendFormFx.prepend(e => new FormData(e.target))


onSubmit.watch(e => {
  e.preventDefault()
})

export const SecondForms = () => (
  <form onSubmit={onSubmit}>
    <br /> 
    
    Login: <input name="name" /> <br /> 
    Password: <input name="password" type="password" /> <br />
    <Loader />
    <SubmitButton />
  </form>
)
