import React, { Component } from 'react';
import WeekEditBlock from './WeekEditBlock/WeekEditBlock.js';

import styles from './week-edit.module.scss';

// Create a schedule, convert to UST, and send POST request to add to schedule database

// schedule is created from time blocks whenever time blocks updates

class WeekEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeBlocks: [],
      schedule: [
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false },
        { isNotAvailable: true, isStart: false }
      ],
      showModal: false,
      currentID: null,
      currentStartTime: null,
      currentEndTime: null
    };
  }

  // Takes if from calling block and then deletes matching time block
  deleteTimeBlock = blockID => {
    const timeBlocks = this.state.timeBlocks.slice();
    let blockIndex = timeBlocks.findIndex(timeBlock => {
      return timeBlock.ID === blockID;
    });
    timeBlocks.splice(blockIndex, 1);
    this.setState(
      {
        ...this.state,
        timeBlocks: timeBlocks
      },
      this.updateSchedule
    );
  };

  // Takes week index and returns string of weekday
  getWeekDayString = weekIndex => {
    const weekStrings = {
      0: 'Sun',
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat'
    };
    return weekStrings[weekIndex];
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

  // NOTE: Get schedule from database for this user for this groups. Maybe not if not doing edit functionality
  componentDidMount = () => {};

  // Creates time block object from current selections
  createTimeBlock = event => {
    event.preventDefault();
    const { currentID, currentStartTime, currentEndTime } = this.state;
    this.setState(
      {
        timeBlocks: [
          ...this.state.timeBlocks,
          {
            ID: currentID,
            startTime: currentStartTime,
            endTime: currentEndTime
          }
        ]
      },
      this.updateSchedule
    );
    this.toggleModalVisibility(event);
  };

  // Takes selected start time and generates remaining ending time option elements for modal
  createEndingTimeOptions = () => {
    const options = [];
    for (let i = this.state.currentStartTime + 1; i <= 24; i++) {
      if (i === this.state.currentStartTime) {
        options.push(
          <option key={i} value={i} selected>
            {this.getTimeString(i)}
          </option>
        );
      } else {
        options.push(
          <option key={i} value={i}>
            {this.getTimeString(i)}
          </option>
        );
      }
    }

    return options;
  };

  // Generate UI elements for every weekday and its hours
  createWeekTable = () => {
    const schedule = this.state.schedule;
    const week = [];

    // Create weekday parent for hour block children
    for (let i = 0; i < 7; i++) {
      let hours = [];

      //TODO: Remove previous key template when finished
      // Create hour blocks with corresponding time
      for (let j = 0; j < 24; j++) {
        hours.push(
          <WeekEditBlock
            key={i * 24 + j}
            blockID={i * 24 + j}
            weekday={i}
            startTime={j}
            isNotAvailable={schedule[i * 24 + j].isNotAvailable}
            isStart={schedule[i * 24 + j].isStart}
            deleteTimeBlock={this.deleteTimeBlock}
            setCurrentTimeBlock={this.setCurrentTimeBlock}
          />
        );
      }
      week.push(
        <div className={styles.weekDayContainer} key={i}>
          <h1 className={styles.title}>{this.getWeekDayString(i)}</h1>
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
    week.unshift(
      <div className={styles.labelContainer}>
        <div />
        {labels}
      </div>
    );
    return week;
  };

  // Sets start time to selected block's and then shows modal
  setCurrentTimeBlock = (id, startTime, endTime) => {
    this.setState({
      ...this.state,
      showModal: true,
      currentID: id,
      currentStartTime: startTime,
      currentEndTime: endTime
    });
  };

  // Updates current time block's ending time
  onEndTimeSelect = event => {
    this.setState({
      ...this.state,
      currentEndTime: event.target.value
    });
  };

  toggleModalVisibility = event => {
    event.preventDefault();
    this.setState({ showModal: !this.state.showModal });
  };

  // Takes current state's schedule and updates using currently chosen time blocks
  updateSchedule = () => {
    // Resets schedule to initial state
    const schedule = this.state.schedule.map(() => {
      return { isNotAvailable: true, isStart: false };
    });
    const timeBlocks = this.state.timeBlocks.slice();

    timeBlocks.forEach(timeBlock => {
      const { ID: startBlock, startTime, endTime } = timeBlock;
      const length = endTime - startTime;

      for (let i = startBlock; i < startBlock + length; i++) {
        schedule[i].isNotAvailable = false;

        // Mark a block as start of a time block
        if (i === startBlock) {
          schedule[i].isStart = true;
        }
      }
    });

    this.setState({ schedule: schedule });
  };

  render() {
    return (
      <div className={styles.container}>
        <div>Sidebar</div>

        <div
          className={
            this.state.showModal
              ? styles.showModalOverlay
              : styles.hideModalOverlay
          }
        >
          <form className={styles.modal} onSubmit={this.createTimeBlock}>
            <h1 className={styles.title}>Select Ending Time</h1>
            <p>
              {this.getTimeString(this.state.currentStartTime)} <br /> to
            </p>
            <div className={styles.inputWrapper}>
              <label htmlFor='endTime'>Ending Time</label>
              <select id='endTime' onChange={this.onEndTimeSelect}>
                {this.createEndingTimeOptions()}
              </select>
            </div>
            <button type='submit'>Create Time Block</button>
            <button
              className={styles.grey}
              onClick={this.toggleModalVisibility}
            >
              Cancel
            </button>
          </form>
        </div>

        <div className={styles.weekContainer}>{this.createWeekTable()}</div>
      </div>
    );
  }
}

export default WeekEdit;
