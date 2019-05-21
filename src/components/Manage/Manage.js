import React, { Component } from 'react';
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
      location: null,
      description: null,
      members: [],
      membersToRemove: []
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
            const { title, location, description, members } = data;
            this.setState({
              ...this.state,
              title: title,
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

  onEditSubmit = event => {
    event.preventDefault();
  };

  onRemoveSubmit = event => {
    event.preventDefault();
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
    const { title, location, description, membersToRemove } = this.state;
    const { isEditing } = this.state;
    let groupForm;

    if (isEditing) {
      groupForm = (
        <form>
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
        {groupForm}

        <form onSubmit={this.handleCheckSubmit}>
          <h1 className={styles.subtitle}>Remove Members</h1>
          <Checkbox
            title={''}
            name={'members'}
            options={this.state.members}
            selectedOptions={membersToRemove}
            onChangeHandle={this.onCheckboxChange}
          />
          <Button title={'Remove'} />
        </form>
      </div>
    );
  }
}

export default Manage;
