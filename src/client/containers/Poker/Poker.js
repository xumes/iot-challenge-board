import React, { Component } from 'react';

class Poker extends Component {
  state = {
    issues: [2343, 2443],
    newIssue: '',
    usersList: [
      {name: 'name1 sobremona', team: 'team1', vote: 1 },
      {name: 'name2', team: 'team2', vote: 2 },
    ]
  }

  render () {
    return (
      <div>
        <h1>Poker</h1>
        {this.state.issues.map(issue => (
          <div key={issue}>{issue}</div>
        ))}
        <hr />
        {this.state.usersList.map(user => (
          <div key={user.name}>{user.name}</div>
        ))}
      </div>
    )
  }
}

export default Poker;