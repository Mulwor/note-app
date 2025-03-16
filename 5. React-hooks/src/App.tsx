import React from "react";
import "./App.css";
import { Counter } from "./v2/useReducer/Counter";
import { Form } from "./v2/useReducer/Form";
import { PostWithUseReducer } from "./v2/useReducer/Post";
import { PostWithUseState } from "./v2/useReducer/Post2";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Form />
      <hr />
      <PostWithUseReducer />
      <PostWithUseState />
    </div>
  );
}

export default App;
