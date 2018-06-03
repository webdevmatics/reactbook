import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login'
import Register from './Register'
import Home from './Home'
import Logout from './Logout'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
  }
 
  render() {
    return (
      <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">React PhoneBook</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>


          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            {!window.token?
            <span>
                  <li>
                    <Link to='/register'>Register</Link>
                  </li>
                  <li>
                    <Link to='/login'>Login</Link>
                  </li>
            </span>
              :
              <li><Link to='/logout'>Logout</Link></li>
          
          }
          </li>
            

          </ul>


          <div>
            <Route path='/' exact={true} component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
          </div>

          </div>


          

      </Router>
      
    );
  }
}

export default App;
