import React from 'react';
import { Counter } from './projects/counter';
import { Fetch } from './projects/request';


function App() {
  return (
    <div ckassName="projects">
        <p>Пример с createStore и createEvent: </p>
        <Counter /> <hr/>
        <p>Пример с createEffect: </p>
        <Fetch />
    </div>
  )
}

export default App;
