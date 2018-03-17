import React, { Component } from 'react';
import './App.scss';
import LogIn from './container/LogIn';
import Footer from './container/Footer';
import Home from './container/Home';

import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/footer" component={Footer} />
                <Route path="/log-in" component={LogIn} />
            </Switch>
        </Router>
    );
  }
}

export default App;
