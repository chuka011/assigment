import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput'
import UserInput from './User/UserInput'

class App extends Component {
  state = {
    username: 'Bane'
  }

  changeUsernameHandler = (event) => {
      this.setState(
        {
          username: event.target.value
        }
      )
  }

  render() {
    const style = {
      backgroundColor: 'red',
      border: '1px',
      width: '60%'
    }
    return (
      <div className="App">
        <UserOutput  username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserInput style = {style} change={this.changeUsernameHandler} username={this.state.username}/>
      </div>
    );
  }
}

export default App;
