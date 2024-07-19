import React, { useState } from 'react';

export class CounterC extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  decrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <strong>Count: {this.state.count}</strong>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export const CounterF = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <strong>Count: {count}</strong>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};
