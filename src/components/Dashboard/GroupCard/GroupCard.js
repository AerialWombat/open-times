import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './group-card.module.scss';

class GroupCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMembers: false
    };
  }

  toggleMemberListVisibility = () => {
    this.setState({ showMembers: !this.state.showMembers });
  };

  render() {
    const group = this.props.group;
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
              this.state.showMembers
                ? styles.showMemberList
                : styles.hideMemberList
            }
          >
            {group.members.map((member, index) => {
              return <li key={index}>{member}</li>;
            })}
          </ul>
        </div>
        <div className={styles.actions}>
          <Link to={`/groups/:${group.slug}`} className={styles.navButton}>
            View
          </Link>
          <Link
            to={`/groups/${group.slug}/manage`}
            className={styles.navButton}
          >
            Manage
          </Link>
        </div>
      </div>
    );
  }
}

export default GroupCard;
