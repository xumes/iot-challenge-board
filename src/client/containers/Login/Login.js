import React, { Component } from 'react';
import socket from '../../services/socket';
import logo from '../../../images/shark.svg';

class Login extends Component {
  state = {

  }

  render() {
    return (
      <div id='container'>
        <div className='bgLogoTitle'>
          <img id='logo' src={logo} /> <span id='spanLogoTitle'>Welcome to Shark's Poker!</span>
        </div>

        <h3><span className='spanOrange'>Input your info to join the game!</span></h3>

        <div className='boxEnterRoom'>
          <input className='form-control inputStyle' type='text' placeholder='Name' /><br />
          <input className='form-control inputStyle' type='text' placeholder='Team' /><br />
          <input className='form-control inputStyle form-check-input checkStyle' type='checkbox' /><span className='spanCheckTitle'>Check to enter as Spec</span><br />
          <input className='form-control inputStyle' type='text' placeholder='Room ID' /><br />
          <button className='btn btn-primary'>Enter Game</button>
        </div>

        <h3><span className='spanOrange'>Or, create a new game:</span></h3>

        <div className='boxEnterRoom'>
          <input className='form-control inputStyle' type='text' placeholder='Room Name' /><br />
          <button className='btn btn-primary'>Create new Game</button>
        </div>
      </div>
    )
  }
}

export default Login;