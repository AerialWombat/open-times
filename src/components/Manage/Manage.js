import React, { Component } from 'react';
import Alert from '../../shared-components/Alert/Alert';
import Input from '../../shared-components/Input/Input';
import Button from '../../shared-components/Button/Button';
import Checkbox from '../../shared-components/Checkbox/Checkbox';
import { IconContext } from 'react-icons';
import { FaEdit } from 'react-icons/fa';

import styles from './manage.module.scss';

class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: null,
      creator: null,
      location: null,
      description: null,
      members: [],
      membersToRemove: [],
      alerts: []
    };
  }

  // GET group title, description, and members
  componentDidMount = () => {
    fetch(
      `http://localhost:5000/api/groups/info/${this.props.match.params.slug}`,
      {
        method: 'GET',
        credentials: 'include'
      }
    )
      .then(response => {
        response.json().then(data => {
          if (response.status === 200) {
            const { title, creator, location, description, members } = data;
            this.setState({
              ...this.state,
              title: title,
              creator: creator,
              location: location,
              description: description,
              members: members
            });
          } else {
            console.log(data);
          }
        });
      })
      .catch(error => console.log(error));
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

  onCheckboxChange = event => {
    const { membersToRemove } = this.state;
    const newSelection = event.target.value;
    let newMembersToRemove;

    if (membersToRemove.includes(newSelection)) {
      newMembersToRemove = membersToRemove.filter(
        member => member !== newSelection
      );
    } else {
      newMembersToRemove = [...membersToRemove, newSelection];
    }

    this.setState({ ...this.state, membersToRemove: newMembersToRemove });
  };

  onDeleteSubmit = event => {
    event.preventDefault();
    fetch(`http://localhost:5000/api/groups/${this.props.match.params.slug}`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(response =>
        response
          .json()
          .then(data => {
            if (response.status === 200) {
              this.props.history.push({
                pathname: '/groups',
                state: { success: true, message: 'Group successfully deleted.' }
              });
            } else {
              this.setState({ alerts: data.alerts });
            }
          })
          .catch(error => console.log(error))
      )
      .catch(error => console.log(error));
  };

  onEditSubmit = event => {
    event.preventDefault();
    const { title, location, description } = this.state;
    fetch(
      `http://localhost:5000/api/groups/edit/${this.props.match.params.slug}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          title: title,
          location: location,
          description: description
        })
      }
    ).then(response => {
      response
        .json()
        .then(data =>
          this.setState({
            ...this.state,
            isEditing: false,
            alerts: data.alerts
          })
        )
        .catch(error => console.log(error));
    });
  };

  onRemoveSubmit = event => {
    event.preventDefault();
    const { membersToRemove } = this.state;
    fetch(
      `http://localhost:5000/api/groups/remove-members/${
        this.props.match.params.slug
      }`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          membersToRemove: membersToRemove
        })
      }
    )
      .then(response => {
        response
          .json()
          .then(data =>
            this.setState({
              ...this.state,
              members: data.members,
              alerts: data.alerts
            })
          )
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  };

  // Input change handle for form fields
  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  toggleEditing = event => {
    event.preventDefault();
    this.setState({ ...this.state, isEditing: !this.state.isEditing });
  };

  render() {
    const {
      alerts,
      title,
      creator,
      location,
      description,
      isEditing,
      members,
      membersToRemove
    } = this.state;
    let groupForm;

    if (isEditing) {
      groupForm = (
        <form onSubmit={this.onEditSubmit}>
          <h1 className={styles.subtitle}>Edit Group Info</h1>
          <Input
            type={'text'}
            title={'Group Name'}
            name={'title'}
            value={title}
            required={true}
            onChangeHandle={this.onInputChange}
          />
          <Input
            type={'text'}
            title={'Location'}
            name={'location'}
            value={location}
            onChangeHandle={this.onInputChange}
          />
          <Input
            type={'text'}
            title={'Description'}
            name={'description'}
            value={description}
            onChangeHandle={this.onInputChange}
          />
          <Button title={'Save'} />
          <Button title={'Cancel'} onClickHandle={this.toggleEditing} />
        </form>
      );
    } else {
      groupForm = (
        <div className={styles.groupContainer}>
          <h1 className={styles.subtitle}>Edit Group Info</h1>
          <h2 className={styles.name}>{title}</h2>
          <p className={styles.location}>{location}</p>
          <p className={styles.description}>{description}</p>
          <Button title={'Edit'} onClickHandle={this.toggleEditing} />
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          <IconContext.Provider
            value={{ color: 'black', className: 'global-class-name' }}
          >
            <FaEdit />
          </IconContext.Provider>
          Manage Group
        </h1>
        {this.getAlertList(alerts)}
        {groupForm}

        <form onSubmit={this.onRemoveSubmit}>
          <h1 className={styles.subtitle}>Remove Members</h1>
          <Checkbox
            title={''}
            name={'members'}
            options={members.filter(member => member !== creator)}
            selectedOptions={membersToRemove}
            onChangeHandle={this.onCheckboxChange}
          />
          <Button title={'Remove'} />
        </form>

        <form onSubmit={this.onDeleteSubmit}>
          <h1 className={styles.subtitle}>Delete Group</h1>
          <Button title={'Delete'} />
        </form>
      </div>
    );
  }
}

export default Manage;
