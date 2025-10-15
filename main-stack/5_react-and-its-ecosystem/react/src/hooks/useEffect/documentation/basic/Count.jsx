import { useState, useEffect, Component } from 'react';

// Functional component
export function CountF() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('componentDidMount');
    document.title = `You clicked ${count} times`;
  }, []);

  // useEffect(() => {
  //   console.log('componentDidUpdate');
  //   document.title = `You clicked ${count} times`;
  // }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// Class component
export class CountC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Компонент вмонтирован');
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    console.log('Компонент изменился');
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
      </div>
    );
  }
}
