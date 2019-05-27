import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      redirect: false
    };
  }

  componentDidMount = () => {
    fetch(`${process.env.REACT_APP_API_URL}api/checkAuth`, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => {
        if (response.status === 200) {
          this.setState({ ...this.state, loading: false });
        } else {
          // On unsuccessful response, throw error and redirect
          const error = new Error(response.error);
          throw error;
        }
      })
      .catch(error => {
        console.error(error);
        this.setState({ loading: false, redirect: true });
      });
  };

  render() {
    const { component: Component, ...rest } = this.props;
    const { loading, redirect } = this.state;
    if (loading) {
      return null;
    }
    if (redirect) {
      return <Redirect to='/users/login' />;
    }
    return (
      <Route {...rest} render={props => <Component {...props} {...rest} />} />
    );
  }
}
export default PrivateRoute;
