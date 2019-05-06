import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Account from './components/Account/Account';
import Dashboard from './components/Dashboard/Dashboard';
import WeekEdit from './components/WeekEdit/WeekEdit';
import WeekView from './components/WeekView/WeekView';
import { Switch, Route, withRouter } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

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
        }
      })
      .catch(error => console.log(error));
  };

  // Updates isLoggedIn state based on arg
  updateLoggedIn = choice => {
    if (choice.toLowerCase() === 'in') {
      this.setState({ isLoggedIn: true });
    } else if (choice.toLowerCase() === 'out') {
      // If logging out, calls API's logout route, sets loggedIn to false, and redirects
      this.setState({ isLoggedIn: false });
      fetch('http://localhost:5000/api/users/logout', {
        method: 'GET',
        credentials: 'include'
      });
      this.props.history.push('/users/login');
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
            <PrivateRoute
              path='/account'
              component={Account}
              updateLoggedIn={this.updateLoggedIn}
            />
            <PrivateRoute exact path='/groups' component={Dashboard} />
            <Route path='/groups/view/:slug' component={WeekView} />

            <Route path='/groups/edit/:slug' component={WeekEdit} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
