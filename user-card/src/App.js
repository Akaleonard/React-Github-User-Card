import React from 'react';
import './App.css';
import UserCard from './components/usercard';
import UserList from './components/userlist';

class App extends React.Component {
  constructor() {
    super()
      this.state = {
        user: {},
        followers: []
      }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/Akaleonard")
    .then(res => {
      return res.json()
    })
    .then(data => {
      return this.setState({user: data})
    })
    .catch(err => {
      console.log(err)
    })
    fetch("https://api.github.com/users/Akaleonard/followers")
    .then(res => {
      return res.json()
    })
    .then(data => {
      return this.setState({followers: data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="card-container">
        <UserCard user = {this.state.user} />
        <UserList followers = {this.state.followers} />
        </div>
      </div>
    )
  }
}



export default App;
