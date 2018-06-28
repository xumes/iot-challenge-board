import React, { Component } from 'react';
import socket from '../../services/socket';

class Poker extends Component {
  state = {
    issues: [],
    newIssue: '',
    usersList: [],
    currentIssue: null,
  }

  componentDidMount() {
    const { name, team, game, expectator, host} = this.props.location.state;
    socket.emit('joinGame', {name, team, game, expectator, host, points: 0})

    if (this.props.location.state.host){
      socket.on('newUser', this.handleNewUser);
      socket.on('sendIssuesHost', this.handleSendIssues);
    } else {
      socket.on('updatedUsers', this.handleUpdatedUsers);
      socket.on('getIssueslist', this.handleGetIssues);
      socket.emit('sendIssues', game)
    }

    socket.on('newIssue', this.handleUpdateIssues);
    socket.on('getCurrentIssue', this.handleGetCurrentIssue);
    socket.on('newVote', this.handleNewVote);
  }

  handleNewUser = (data) => {
    this.setState(prevState => ({
      usersList: [...prevState.usersList, data]
    }), this.emitUserUpdate)
  }

  handleUpdatedUsers = (data) => {
    this.setState({
      usersList: data.userList
    });
  }

  emitUserUpdate = () => {
    socket.emit('userUpdate', {game: this.props.location.state.game, userList: this.state.usersList })
  }


  handleNewIssue = (game) => {
    socket.emit('addIssue', {game, issue: this.state.newIssue })
    this.setState({ newIssue: '' })
  }

  handleUpdateIssues = (issue) => {
    this.setState( prevState => ({ 
      issues: [...prevState.issues, issue] 
    }))
  }

  handleSendIssues = () => {
    console.log('here')
    socket.emit('issueslist', {game: this.props.location.state.game, issues: this.state.issues});
  }

  handleGetIssues = (data) => {
    console.log(data)
    this.setState({issues: data})
  }

  handleVote = (points) => {
    console.log(points)
    socket.emit('vote', {
      user: this.props.location.state.name,
      game: this.props.location.state.game,
      issue: this.state.currentIssue,
      points
    })
  }

  handleNewVote = (data) => {
    const userIndex = this.state.usersList.findIndex(user => user.name === data.user)

    this.setState( prevState => ({
      usersList: [
        ...prevState.usersList.slice(0, userIndex),
        {...prevState.usersList[userIndex], points: data.points},
        ...prevState.usersList.slice(userIndex + 1),
      ]
    }))

  }

  startGame = () => {
    socket.emit('sendCurrentIssue', {game: this.props.location.state.game, currentIssue: this.state.issues[0]})
  }

  handleGetCurrentIssue = (issue) => {
    this.setState({ currentIssue: issue})
  }

  nextIssue = () => {
    this.setState(prevState => ({
      usersList: prevState.usersList.map(user => {
        return {...user, points: 0}
      })
    }), this.emitUserUpdate);
    const issueIndex = this.state.issues.indexOf(this.state.currentIssue)
    socket.emit('sendCurrentIssue', {game: this.props.location.state.game, currentIssue: this.state.issues[issueIndex + 1]})
  }

  render () {
    const currentUser = this.props.location.state;
    return (
      <div>
        <h1>Poker</h1>
        <h1>Current Issue: {this.state.currentIssue}</h1>
        {this.state.issues.map(issue => (
          <div key={issue}>{issue}</div>
        ))}

        <hr />

        {this.state.usersList.map(user => (
          <div key={user.name}>{user.name} - {user.points} </div>
        ))}

        
        {currentUser.host && (
          <div>
            <input value={this.state.newIssue} onChange={(e) => this.setState({newIssue: e.target.value})}/> 
            <button onClick={() => this.handleNewIssue(currentUser.game)}>New Issue</button>
            <button>Show Result</button>
            <button onClick={this.startGame}>Start Game</button>
            <button onClick={this.nextIssue}>NextIssue</button>
          </div>
        )}

        <div>
          <div onClick={() => this.handleVote(1)}>1</div>
          <div onClick={() => this.handleVote(2)}>2</div>
          <div onClick={() => this.handleVote(3)}>3</div>
          <div onClick={() => this.handleVote(5)}>5</div>
          <div onClick={() => this.handleVote(8)}>8</div>
          <div onClick={() => this.handleVote(13)}>13</div>
          <div onClick={() => this.handleVote(21)}>21</div>
          <div onClick={() => this.handleVote(34)}>34</div>
          <div onClick={() => this.handleVote(55)}>55</div>
          <div onClick={() => this.handleVote(89)}>89</div>
          <div onClick={() => this.handleVote('pass')}>Pass</div>
        </div>

        <div>Resultado</div>
      </div>
    )
  }
}

export default Poker;