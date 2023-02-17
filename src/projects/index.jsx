import React from 'react';
import { Counter } from './counter'
import { Fetch } from './request'
import { FirstForms } from './forms/first_example';
import { SecondForms } from './forms/second_example';
import { Gate } from './gate';
import { SampleComp } from './loading';

export function Project() {
  return (
    <div className="projects">
        <p>Пример с createStore и createEvent: </p>
        <Counter /> <hr/>
        <p>Пример с createEffect: </p>
        <Fetch /> <hr/>
        <p>Примеры с формами, примеров будет: 2</p>
        <FirstForms />
        <SecondForms /> <hr />
        <Gate /> <hr />
        <SampleComp /> <hr />
    </div>
  )
}

