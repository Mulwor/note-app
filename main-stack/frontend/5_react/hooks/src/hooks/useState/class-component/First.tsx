import React, { useState } from 'react';

// ? Перепишите данный компонент используя хуки
export class CounterC extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count: {this.state.count}</button>
      </div>
    );
  }
}

export const CounterF = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Count: {count}</button>
    </div>
  );
};
