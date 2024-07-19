import { Component, useState } from 'react';

export class ProfileC extends Component {
  state = {
    name: 'Backbencher',
    age: 23,
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onAgeChange = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input
            type='number'
            value={this.state.age}
            onChange={this.onAgeChange}
          />
          <h2>
            {' '}
            Name: {this.state.name}, Age: {this.state.age}{' '}
          </h2>
        </form>
      </div>
    );
  }
}

export const ProfileF = () => {
  const [state, setState] = useState({
    name: 'Backbencher',
    age: 23,
  });

  const onNameChange = (e) => {
    setState({
      ...state,
      name: e.target.value,
    });
  };

  const onAgeChange = (e) => {
    setState({
      ...state,
      age: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          type='text'
          value={state.name}
          onChange={onNameChange}
        />
        <input
          type='number'
          value={state.age}
          onChange={onAgeChange}
        />
        <h2>
          {' '}
          Name: {state.name}, Age: {state.age}{' '}
        </h2>
      </form>
    </div>
  );
};
