import React, { Component } from 'react';
import socket from '../../services/socket';

class Login extends Component {
  state = {
    name: 'name test',
    game: ''
  }

  componentDidMount(){
    socket.on('newVote', this.handleGetVotes);
  }

  testJoin = () => {
    socket.emit('joinGame', this.state.game);
  }

  testVote = () => {
    socket.emit('vote', {game: this.state.game, email: 'wrlc@br.ibm.com'});
  }

  handleGetVotes = (data) => {
    console.log(data)
  }

  render () {
    return (
      <div>
        <h1>Login Page</h1>
        <input value={this.state.game} onChange={(e) => this.setState({game: e.target.value })}/>
        <button onClick={this.testJoin}>{this.state.name}</button>
        <button onClick={this.testVote}>Vote</button>
      </div>
    )
  }
}

export default Login;