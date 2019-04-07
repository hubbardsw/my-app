import React, { Component } from 'react';
import './App.css';
import Login from './Components/test'
import RegistrationForm from './Components/Register.jsx'
import Home from './Components/Home'
import { Route, BrowserRouter as Router } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
library.add(faPenSquare)
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Welcome to Sabio React</h1>
        <Route path='/login' component={Login} />
        <Route path ='/registration'component={RegistrationForm} />
        <Route path='/home' component={Home} />
      </div>
    </Router>
    );
  }
}

export default App;
