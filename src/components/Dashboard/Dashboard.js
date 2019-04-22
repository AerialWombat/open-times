import React, { Component } from 'react';
import GroupCard from './GroupCard/GroupCard';

import styles from './dashboard.module.scss';

const testGroupData = [
  {
    name: 'Dingos',
    creator: 'Wombat',
    id: '123asd',
    timezone: 'America/New_York',
    location: 'Discord',
    description:
      'Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime.',
    members: ['Seeker', 'Mikey', 'Makila', 'Leets', 'Pebol', 'Adolin', 'Perry']
  },
  {
    name: 'Yurigawa',
    creator: 'Penukonda',
    id: '1239-023194kfkf2',
    timezone: 'America/New_York',
    location: 'Skype',
    description:
      "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.",
    members: ['Gouken', 'Roana', 'Benkei', 'Sendo', 'Sori']
  },
  {
    name: 'Capcom Pro Tour',
    creator: 'Capcom',
    id: '1239-02935sd-fi-234',
    timezone: 'America/Detroit',
    location: "Joe's Crabs Shacks",
    description:
      'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?',
    members: ['Tokido', 'Daigo', 'Momochi', 'Angrybird', 'JustinWong']
  }
];

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      showMembers: false
    };
  }

  toggleMemberListVisibility = () => {
    this.setState({ showMembers: !this.state.showMembers });
  };

  render() {
    return (
      <div className={styles.container}>
        <h1>Your Groups</h1>
        {testGroupData.map(group => {
          return <GroupCard group={group} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
