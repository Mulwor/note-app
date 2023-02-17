import React from 'react';
import { Counter } from './projects/counter';
import { FirstForms } from './projects/forms/first_example';
import { SecondForms } from './projects/forms/second_example';
import { Gate } from './projects/gate';
import { SampleComp } from './projects/loading';
import { Fetch } from './projects/request';
import { Todo } from './projects/todo';


function App() {
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

        {/* ! РАЗОБРАТЬ */}
        <Todo /> <hr />
    </div>
  )
}

export default App;
