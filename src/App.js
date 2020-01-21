import React, { Component } from 'react';
import { Router } from '@reach/router'
import TopBar from './components/TopBar'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'
import Topics from './components/Topics'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import ErrorDisplayer from './components/ErrorDisplayer'

import './App.css'

class App extends Component {

  state = {
    user: "jessjelly",
    usersList: ["jessjelly", "grumpy19", "cooljmessy", "weegembump", "tickle122", "happyamy2016"]
  }

  switchUser = (user) => {
      this.setState({user: user})
  }

  render() {

    const user = this.state.user
    
    return (
      <div>

        <TopBar user={user}/>

        <Router>
          <Home path='/'/>
          <Articles path='/articles' user={user}/>
          <SingleArticle path='/articles/:id' user={user}/>
          <Topics path='/topics' user={user}/>
          <Articles path='/topics/:topic' user={user}/>
          <LoginPage path='/login' user={user} usersList={this.state.usersList} switchUser={this.switchUser}/>
          <ErrorDisplayer default />
        </Router>
      </div>
    )
  }
}


export default App;
