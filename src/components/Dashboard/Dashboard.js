import React, { Component } from 'react';
import Alert from '../../shared-components/Alert/Alert';
import Input from '../../shared-components/Input/Input';
import Button from '../../shared-components/Button/Button';
import Modal from '../../shared-components/Modal/Modal';
import GroupCard from './GroupCard/GroupCard';
import { FaPlusCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import styles from './dashboard.module.scss';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      groups: [],
      showModal: false,
      name: null,
      location: null,
      description: null,
      alerts: []
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:5000/api/groups/dashboard', {
      method: 'GET',
      credentials: 'include'
    }).then(response =>
      response.json().then(data => {
        // Check for successful response
        if (response.status === 200) {
          this.setState({ groups: data });
        } else {
          // Append alerts from unsuccessful response
          this.setState({ ...this.state, alerts: data.alerts });
        }
      })
    );
  };

  hideModal = event => {
    event.preventDefault();
    this.setState({ showModal: false });
  };

  showModal = event => {
    event.preventDefault();
    this.setState({ showModal: true });
  };

  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  // Checks for group data and then renders cards
  getGroupCards = groups => {
    if (groups.length > 0) {
      return this.state.groups.map((group, index) => {
        return <GroupCard key={index} group={group} />;
      });
    } else {
      return;
    }
  };

  onCreateSubmit = event => {
    event.preventDefault();
    const { name, location, description } = this.state;
    fetch('http://localhost:5000/api/groups/create', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        location: location,
        description: description
      })
    }).then(response => {
      response
        .json()
        .then(data => {
          // Check for successful response
          if (response.status === 200) {
            // Redirect to schedule view page for group with returned slug
            this.props.history.push({
              pathname: `/groups/view/${data.slug}`,
              state: { success: true, message: 'Group Created!' }
            });
          } else {
            // Append alerts from unsuccessful response
            this.setState({ ...this.state, alerts: data.alerts });
          }
        })
        .catch(error => console.log(error));
    });
  };

  // Check for alerts and display Alert component for each
  getAlertList = alerts => {
    if (alerts.length <= 0 || !alerts[0]) {
      return;
    }
    return alerts.map((alert, index) => {
      return (
        <Alert key={index} success={alert.success} message={alert.message} />
      );
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Modal isOpen={this.state.showModal} hideModalHandle={this.hideModal}>
          <form onSubmit={this.onCreateSubmit}>
            <h1>Create Group</h1>
            {this.getAlertList(this.state.alerts)}
            <Input
              type={'text'}
              title={'Name'}
              name={'name'}
              placeholder={'Enter group name'}
              required={true}
              onChangeHandle={this.onInputChange}
            />
            <Input
              type={'text'}
              title={'Location'}
              name={'location'}
              placeholder={'Enter location (optional)'}
              required={false}
              onChangeHandle={this.onInputChange}
            />
            <Input
              type={'text'}
              title={'Description'}
              name={'description'}
              placeholder={'Enter description (optional)'}
              required={false}
              onChangeHandle={this.onInputChange}
            />
            <Button title={'Create'} />
            <Button title={'Go Back'} onClickHandle={this.hideModal} />
          </form>
        </Modal>

        <header>
          <h1>Your Groups</h1>
          <Button onClickHandle={this.showModal}>
            <IconContext.Provider value={{ size: '1.5em' }}>
              <FaPlusCircle />
            </IconContext.Provider>
            <span className={styles.btnText}>Create Group</span>
          </Button>
        </header>

        <div className={styles.cardsContainer}>
          {' '}
          {this.getGroupCards(this.state.groups)}
        </div>
      </div>
    );
  }
}

export default Dashboard;
