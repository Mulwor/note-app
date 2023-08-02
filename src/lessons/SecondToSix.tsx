import React from "react"
import { BasicUseEffect } from "../hooks/useEffect/Basic"
import { UseEffectWithSetTimeOut } from "../hooks/useEffect/SetTimeOut"

function SevenToTwelve() {
  return (
    <div>
      {/* Урок №1: UseEffect - основы */}
      <BasicUseEffect />
      <UseEffectWithSetTimeOut />
    </div>
  )
}

export default SevenToTwelve
