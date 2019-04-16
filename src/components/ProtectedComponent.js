import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedComponent = ProtectedComponent => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false
      };
    }

    // On mount, send GET request to check user authentication
    componentDidMount = () => {
      fetch('http://localhost:5000/api/checkAuth', {
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
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to='/users/login' />;
      }
      return (
        <React.Fragment>
          <ProtectedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default ProtectedComponent;
