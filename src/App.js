import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage={this.greetingMessage} />} />
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </BrowserRouter>
    );
  }
}

export default App;
