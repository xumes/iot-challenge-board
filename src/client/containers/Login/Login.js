import React, { Component } from 'react';
import socket from '../../services/socket';

class Login extends Component {
  state = {

  }

  render () {
    return (
      <div>
        <h1>Login Page</h1>
        <input type="text" placeholder="Name" /> 
        <input type="text" placeholder="Team" /> 
        <input type="checkbox" />

        <input type="text" placeholder="Room Name" />         
        <button>Create new Game</button>

        <input type="text" placeholder="Room ID" />         
        <button>Enter Game</button>
        
      </div>
    )
  }
}

export default Login;