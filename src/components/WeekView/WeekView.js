import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WeekViewBlock from './WeekViewBlock/WeekViewBlock';
import ReactToolTip from 'react-tooltip';

//TODO: Copied from week-edit. Remove unused styles
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
      ]
    };
  }

  //GET all members schedules, combine them into single array to store in state, convert to local time using UTC offset
  componentDidMount = () => {
    fetch(
      `http://localhost:5000/api/groups/view/${this.props.match.params.slug}`,
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
              combinedSchedule: combinedSchedule
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
          {this.getTimeString(i)}
        </div>
      );
    }
    week.unshift(<div className={styles.labelContainer}>{labels}</div>);
    return week;
  };

  // Takes time index and returns string with formatted hour time
  getTimeString = timeIndex => {
    if (timeIndex === 0 || timeIndex === 24) {
      return '12 AM';
    } else if (timeIndex > 0 && timeIndex <= 11) {
      return `${timeIndex.toString()} AM`;
    } else if (timeIndex === 12) {
      return '12 PM';
    } else {
      return `${(timeIndex - 12).toString()} PM`;
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <Link
            to={`/groups/edit/${this.props.match.params.slug}`}
            className={styles.button}
          >
            EDIT
          </Link>
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
        </header>
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
                    {members.map(member => {
                      return <li>{member}</li>;
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
