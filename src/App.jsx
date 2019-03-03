import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import './App.css';

import TestComponent from './components/test/TestComponent';

class App extends Component {
  state = {
    userId: null,
    recipientId: null
  };

  handleOne = () => {
    this.setState({
      userId: 'CkG4QMqhXThKvruicqfOp7TT5Ai2',
      recipientId: 'WBNyfaLoiWPvPh7ZthrnyvIoIt83'
    });
  };

  handleTwo = () => {
    this.setState({
      userId: 'NvDTOO6LKWP8rLNTcRHsiNqnaKg1',
      recipientId: 'WBNyfaLoiWPvPh7ZthrnyvIoIt83'
    });
  };

  render() {
    const { userId, recipientId } = this.state;
    console.log('recipientId:', recipientId);
    console.log('userId:', userId);
    return (
      <div className='App'>
        <h1>Hello from App</h1>
        <Button onClick={this.handleOne} color='green' content='Increment' />
        <Button onClick={this.handleTwo} color='red' content='Decrement' />
        {userId && <TestComponent userId={userId} recipientId={recipientId} />}
      </div>
    );
  }
}

export default App;
