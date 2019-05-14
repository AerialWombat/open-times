import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
          this.setState({ loading: false, isLoggedIn: true });
        } else {
          this.setState({ loading: false, isLoggedIn: false });
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    const { loading, isLoggedIn } = this.state;
    if (loading) {
      return null;
    } else {
      return (
        <Redirect
          to={{
            pathname: `/groups/edit/${this.props.match.params.slug}`,
            state: { fromInvite: !isLoggedIn }
          }}
        />
      );
    }
  }
}
export default Invite;
