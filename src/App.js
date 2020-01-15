import React, { Component } from 'react';
import { Router } from '@reach/router'
import TopBar from './components/TopBar'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'
import Topics from './components/Topics'
import ArticlesByTopic from './components/ArticlesByTopic'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:100&display=swap" rel="stylesheet"/>

        <TopBar />
        <Router>
          <Articles path='/articles' />
          <SingleArticle path='/articles/:id' />
          <Topics path='/topics'/>
          <Articles path='/topics/:topic'/>
        </Router>
      </div>
    )
  }
}


export default App;
