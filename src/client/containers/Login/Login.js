import React, { Component } from 'react';
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

  render () {
    return (
      <div>
        <h1>Login Page</h1>
        <input value={this.state.name} name="name" onChange={this.handleInputChange} type="text" placeholder="Name" /> 
        <input value={this.state.team} name="team" onChange={this.handleInputChange} type="text" placeholder="Team" /> 
        <input checked={this.state.expectator} name="expectator" onChange={this.handleInputChange} type="checkbox" />

        <input value={this.state.newGame} name="newGame" onChange={this.handleInputChange} type="text" placeholder="Room Name" />         
        <button onClick={this.createNewGame} >Create new Game</button>

        <input value={this.state.existingGame} name="existingGame" onChange={this.handleInputChange} type="text" placeholder="Room ID" />         
        <button onClick={this.joinGame} >Enter Game</button>
        
      </div>
    )
  }
}

export default Login;