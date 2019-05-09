import React, { Component } from 'react';
import WeekEditBlock from './WeekEditBlock/WeekEditBlock.js';

import styles from './week-edit.module.scss';

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
      modalWeekday: null,
      modalStartTime: null,
      modalEndTime: null
    };
  }

  // Takes state's schedule array, convert to an array of integers, converts using local  UTC offset, and then makes POST request with converted schedule array //NOTE: with user data
  onScheduleSubmit = () => {
    const { schedule } = this.state;

    const convertedSchedule = schedule.map(hour => {
      if (hour.isNotAvailable) {
        return 0;
      } else {
        return 1;
      }
    });
    // console.log(`Initial integer array: ${convertedSchedule}`);
    const UTCOffset = new Date().getTimezoneOffset() / 60;
    // console.log(`UTC Offset: ${UTCOffset}`);

    // Shifts array forward by UTC offset
    if (UTCOffset > 0) {
      const shiftedHours = convertedSchedule.splice(
        convertedSchedule.length - UTCOffset,
        UTCOffset
      );
      convertedSchedule.splice(0, 0, ...shiftedHours);
    }
    // Shifts array backward by UTC offset
    else if (UTCOffset < 0) {
      const shiftedHours = convertedSchedule.splice(0, Math.abs(UTCOffset));
      convertedSchedule.splice(convertedSchedule.length, 0, ...shiftedHours);
    }

    // POST request to API's schedule setting route
    fetch('http://localhost:5000/api/groups/set-schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        UUID: this.props.match.params.slug,
        schedule: convertedSchedule
      })
    }).then(response => {
      // Check for success response
      if (response.status === 200) {
        // Redirect to week view with success message
        this.props.history.push({
          pathname: `/groups/view/${this.props.match.params.slug}`,
          state: { success: true, message: 'Schedule successfully set!' }
        });
      } else {
        response
          .json()
          .then(data => console.log(data))
          .catch(error => console.log(error));
      }
    });
  };

  // Creates time block object from current selections
  createTimeBlock = event => {
    event.preventDefault();
    const { currentID, modalStartTime, modalEndTime } = this.state;
    this.setState(
      {
        timeBlocks: [
          ...this.state.timeBlocks,
          {
            ID: currentID,
            startTime: modalStartTime,
            endTime: modalEndTime
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
    for (let i = this.state.modalStartTime + 1; i <= 24; i++) {
      if (i === this.state.modalStartTime) {
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

      // Create hour blocks with corresponding time
      for (let j = 0; j < 24; j++) {
        hours.push(
          <WeekEditBlock
            key={i * 24 + j}
            blockID={i * 24 + j}
            weekdayIndex={i}
            startTime={j}
            isNotAvailable={schedule[i * 24 + j].isNotAvailable}
            isStart={schedule[i * 24 + j].isStart}
            deleteTimeBlock={this.deleteTimeBlock}
            setCurrentTimeBlock={this.setCurrentTimeBlock}
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

  // Takes week index and returns string of weekday
  getWeekdayString = weekIndex => {
    const weekStrings = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    };
    return weekStrings[weekIndex];
  };

  // Sets start time to selected block's
  setCurrentTimeBlock = (id, weekdayIndex, startTime, endTime) => {
    // Reset select-option element to first option
    document.getElementById('endTimeForm')[0].value = startTime + 1;

    this.setState({
      ...this.state,
      showModal: true,
      currentID: id,
      modalWeekday: this.getWeekdayString(weekdayIndex),
      modalStartTime: startTime,
      modalEndTime: endTime
    });
  };

  // Updates current time block's ending time
  onEndTimeSelect = event => {
    this.setState({
      ...this.state,
      modalEndTime: event.target.value
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
        <header className={styles.header}>
          <button className={styles.button} onClick={this.onScheduleSubmit}>
            DONE
          </button>
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
        </header>

        <div
          className={
            this.state.showModal
              ? styles.showModalOverlay
              : styles.hideModalOverlay
          }
        >
          <form
            id='endTimeForm'
            className={styles.modal}
            onSubmit={this.createTimeBlock}
          >
            <h1 className={styles.title}>Select Ending Time</h1>
            <p>{this.state.modalWeekday}</p>
            <p>
              {this.getTimeString(this.state.modalStartTime)} <br /> to
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
