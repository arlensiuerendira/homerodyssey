import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
//import Recap from './components/Recap';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={SignUp} />
      </Switch>
    );
  }
}

export default App;

//        <Route exact path='/recap' component={Recap} />
