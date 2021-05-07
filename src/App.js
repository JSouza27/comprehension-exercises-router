import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';

import { BrowserRouter, Link } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage={this.greetingMessage} />} />
          <Route path='/strict-access' render={() => (<StrictAccess user={ {username: 'joao', password: '1234'}} />)} />
        </Switch>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict Access</Link>
      </BrowserRouter>
    );
  }
}

export default App;
