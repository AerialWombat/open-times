import React, { Component } from 'react';
import GroupCard from './GroupCard/GroupCard';

import styles from './dashboard.module.scss';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      groups: []
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:5000/api/groups/dashboard', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => this.setState({ groups: data }));
  };

  toggleMemberListVisibility = () => {
    this.setState({ showMembers: !this.state.showMembers });
  };

  render() {
    return (
      <div className={styles.container}>
        <h1>Your Groups</h1>
        {this.state.groups.map(group => {
          return <GroupCard group={group} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
