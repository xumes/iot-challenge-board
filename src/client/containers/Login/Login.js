import React, { Component } from 'react';
import socket from '../../services/socket';
import logo from '../../../images/shark.svg';
import api from '../../services/api';

class Login extends Component {
  state = {
    name: '',
    team: '',
    expectator: false,
    newGame: '',
    existingGame: '',
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  createNewGame = () => {
    this.props.history.push({
      pathname: '/poker',
      state: {
        game: this.state.newGame,
        name: this.state.name,
        team: this.state.team,
        expectator: this.state.expectator,
        host: true,
      }
    })
  }

  joinGame = async () => {
    this.props.history.push({
      pathname: '/poker',
      state: {
        game: this.state.existingGame,
        name: this.state.name,
        team: this.state.team,
        expectator: this.state.expectator,
        host: false,
      }
    })
  }

  render() {
    return (
      <div>
        <div id='container'>
        <div className='bgLogoTitle'>
          <img id='logo' src={logo} /> <span id='spanLogoTitle'>Welcome to Shark's Poker!</span>
        </div>

        <h5><span className='spanOrange'>Input your info to join the game!</span></h5>

        <div className='boxEnterRoom'>
          <input value={this.state.name} name="name" onChange={this.handleInputChange} className='form-control' type='text' placeholder='Name' /><br />
          <input value={this.state.team} name="team" onChange={this.handleInputChange} className='form-control' type='text' placeholder='Team' /><br />
          <input checked={this.state.expectator} name="expectator" onChange={this.handleInputChange} className='form-control form-check-input checkStyle' type='checkbox' /><span className='spanCheckTitle'>Check to enter as Spec</span><br /><br/>
          <input value={this.state.existingGame} name="existingGame" onChange={this.handleInputChange} className='form-control' type='text' placeholder='Room ID' /><br />
          <button onClick={this.joinGame} className='btn btn-primary'>Enter Game</button>
        </div>

        <h5><span className='spanOrange'>Or, create a new game:</span></h5>

        <div className='boxEnterRoom'>
          <input value={this.state.newGame} name="newGame" onChange={this.handleInputChange} className='form-control' type='text' placeholder='Room Name' /><br />
          <button onClick={this.createNewGame} className='btn btn-primary'>Create New Game</button>
        </div>
        </div>
      </div> 
    )
  }
}

export default Login;