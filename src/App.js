import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { Switch, Route } from 'react-router-dom';

import withAuth from './components/withAuth';
import Secret from './components/Secret';

import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

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

  updateLoggedIn = choice => {
    if (choice.toLowerCase() === 'in') {
      this.setState({ isLoggedIn: true });
    } else if (choice.toLowerCase() === 'out') {
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
            <Route path='/users/secret' component={withAuth(Secret)} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
