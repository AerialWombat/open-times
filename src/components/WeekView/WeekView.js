import React, { Component } from 'react';
import WeekViewBlock from './WeekViewBlock/WeekViewBlock';
import Button from '../../shared-components/Button/Button';
import Input from '../../shared-components/Input/Input';
import Sidebar from '../../shared-components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ReactToolTip from 'react-tooltip';
import { getTimeString, shiftByUTCOffset } from '../../utils.js';

import styles from './week-view.module.scss';

class WeekView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      location: null,
      description: null,
      members: [],
      combinedSchedule: [
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] },
        { amountAvailable: 0, membersAvailable: [] }
      ],
      showSidebar: false,
      isInviteCopied: false
    };
  }

  copyInviteLink = event => {
    event.preventDefault();
    navigator.clipboard.writeText(
      `${process.env.REACT_APP_HOST_URL}groups/join/${
        this.props.match.params.slug
      }`
    );
    this.setState({ ...this.state, isInviteCopied: true });
  };

  showSidebar = () => {
    this.setState({ ...this.state, showSidebar: true });
  };

  hideSidebar = () => {
    this.setState({ ...this.state, showSidebar: false });
  };

  componentDidMount = () => {
    //GET all members schedules, combine them into single array to store in state, convert to local time using UTC offset
    fetch(
      `${process.env.REACT_APP_API_URL}api/groups/view/${
        this.props.match.params.slug
      }`,
      {
        method: 'GET',
        credentials: 'include'
      }
    ).then(response => {
      // Check for success response
      response
        .json()
        .then(data => {
          if (response.status === 200) {
            const {
              title,
              location,
              description,
              members,
              combinedSchedule
            } = data;
            this.setState({
              title: title,
              location: location,
              description: description,
              members: members,
              combinedSchedule: shiftByUTCOffset(combinedSchedule, 'toLocal')
            });
          } else {
            console.log(data);
          }
        })
        .catch(error => console.log(error));
    });
  };

  createWeekTable = () => {
    const schedule = this.state.combinedSchedule;
    const week = [];

    // Create weekday parent for hour block children
    for (let i = 0; i < 7; i++) {
      let hours = [];

      // Create hour blocks with corresponding time
      for (let j = 0; j < 24; j++) {
        hours.push(
          <WeekViewBlock
            key={i * 24 + j}
            percentageAvailable={
              schedule[i * 24 + j].amountAvailable / this.state.members.length
            }
            membersAvailable={schedule[i * 24 + j].membersAvailable}
          />
        );
      }
      week.push(
        <div className={styles.weekdayContainer} key={i}>
          {hours}
        </div>
      );
    }

    // Create hours label column
    let labels = [];
    for (let i = 0; i < 24; i++) {
      labels.push(
        <div key={i} className={styles.label}>
          {getTimeString(i)}
        </div>
      );
    }
    week.unshift(<div className={styles.labelContainer}>{labels}</div>);
    return week;
  };

  render() {
    const {
      title,
      location,
      description,
      members,
      showSidebar,
      isInviteCopied
    } = this.state;
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <span>View your group's open times</span>
          <h1>{title}</h1>
          <div className={styles.labels}>
            <Button title={''} onClickHandle={this.showSidebar}>
              <IconContext.Provider value={{ size: '1.5em' }}>
                <FaBars />
              </IconContext.Provider>
            </Button>
            <div>SUN</div>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
          </div>
        </header>
        <Sidebar isOpen={showSidebar} hideSidebarHandle={this.hideSidebar}>
          <Link
            to={`/groups/edit/${this.props.match.params.slug}`}
            className={styles.button}
          >
            <Button title={'Set a schedule'} />
          </Link>
          <h1>Location</h1>
          <p>{location}</p>
          <h1>Description</h1>
          <p>{description}</p>
          <h1>Current Members</h1>
          <ul>
            {members.map(member => {
              return <li>{member}</li>;
            })}
          </ul>
          <Input
            type={'text'}
            title={'Invite Link'}
            name={'inviteLink'}
            value={`${process.env.REACT_APP_HOST_URL}groups/join/${
              this.props.match.params.slug
            }`}
            readOnly={true}
          />
          <Button
            title={isInviteCopied ? 'Copied!' : 'Copy Invite Link'}
            onClickHandle={this.copyInviteLink}
          />
        </Sidebar>
        <div className={styles.weekContainer}>{this.createWeekTable()}</div>
        <ReactToolTip
          id='members'
          className={styles.tooltip}
          effect='solid'
          place='top'
          type='light'
          getContent={dataTip => {
            if (dataTip) {
              const members = dataTip.split(',');
              return (
                <React.Fragment>
                  <p>Members Available:</p>
                  <ul>
                    {members.map((member, index) => {
                      return <li key={index}>{member}</li>;
                    })}
                  </ul>
                </React.Fragment>
              );
            }
          }}
        />
      </div>
    );
  }
}

export default WeekView;
