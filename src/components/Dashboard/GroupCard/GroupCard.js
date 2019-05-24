import React, { Component } from 'react';
import Button from '../../../shared-components/Button/Button';
import { Link } from 'react-router-dom';

import styles from './group-card.module.scss';

class GroupCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMembers: false,
      showManage: false
    };
  }

  toggleMemberListVisibility = () => {
    this.setState({ showMembers: !this.state.showMembers });
  };

  render() {
    const group = this.props.group;
    const { showMembers } = this.state;

    // Check for non-null group data
    if (group) {
      return (
        <div className={styles.container}>
          <div className={styles.groupInfo}>
            <h1 className={styles.name}>{group.name}</h1>
            <h2 className={styles.subheader}>
              Created by: <span>{group.creator}</span>
            </h2>
            <p className={styles.description}>{group.description}</p>
          </div>
          <div className={styles.members}>
            <button
              className={styles.membersToggle}
              onClick={this.toggleMemberListVisibility}
            >
              Show/Hide members...
            </button>
            <ul
              className={
                showMembers ? styles.showMemberList : styles.hideMemberList
              }
            >
              {group.members.map((member, index) => {
                return <li key={index}>{member}</li>;
              })}
            </ul>
          </div>
          <div className={styles.actions}>
            <Link to={`/groups/view/${group.slug}`}>
              <Button title={'View'} />
            </Link>
            {group.isOwner ? (
              <Link to={`/groups/manage/${group.slug}`}>
                <Button title={'Manage'} />
              </Link>
            ) : null}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default GroupCard;
