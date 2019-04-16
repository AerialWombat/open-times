import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { Switch, Route } from 'react-router-dom';

import ProtectedComponent from './components/ProtectedComponent';
import Secret from './components/Secret';

import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  // Check if user is already logged in and update state
  componentDidMount = () => {
    fetch('http://localhost:5000/api/checkAuth', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => {
        if (response.status === 200) {
          this.setState({ isLoggedIn: true });
        } else {
          const error = new Error(response.error);
          throw error;
        }
      })
      .catch(error => console.log(error));
  };

  // Updates isLoggedIn state based on arg
  updateLoggedIn = choice => {
    if (choice.toLowerCase() === 'in') {
      this.setState({ isLoggedIn: true });
    } else if (choice.toLowerCase() === 'out') {
      // If logging out, calls API's logout route
      this.setState({ isLoggedIn: false });
      fetch('http://localhost:5000/api/users/logout', {
        method: 'GET',
        credentials: 'include'
      }).then(response => console.log(response));
    }
  };

  render() {
    return (
      <div className='App'>
        <Navbar
          isLoggedIn={this.state.isLoggedIn}
          updateLoggedIn={this.updateLoggedIn}
        />
        <main>
          <Switch>
            <Route exact path='/' />
            <Route path='/users/register' component={Register} />
            <Route
              path='/users/login'
              render={props => (
                <Login {...props} updateLoggedIn={this.updateLoggedIn} />
              )}
            />
            <Route
              path='/users/secret'
              component={ProtectedComponent(Secret)}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
