import React, { Component } from 'react'
import Header from './Components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
          </Route >
          <Route exact path="/projects">
          </Route >
        </Switch>

      </Router>
    </>
    )
  }
}

export default App

