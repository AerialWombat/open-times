import React, { Component } from 'react';
import WeekEditBlock from './WeekEditBlock/WeekEditBlock.js';
import Button from '../../shared-components/Button/Button';
import Modal from '../../shared-components/Modal/Modal';
import Select from '../../shared-components/Select/Select';
import Sidebar from '../../shared-components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ReactToolTip from 'react-tooltip';
import {
  getTimeString,
  getWeekdayString,
  shiftByUTCOffset
} from '../../utils.js';

import styles from './week-edit.module.scss';

class WeekEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      anonUsername: null,
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
      showSidebar: false,
      currentID: null,
      modalWeekday: null,
      modalStartTime: null,
      modalEndTime: null
    };
  }

  componentDidMount = () => {
    if (this.props.location.state) {
      this.setState({
        ...this.state,
        anonUsername: this.props.location.state.anonUsername
      });
    }

    fetch(
      `${process.env.REACT_APP_API_URL}api/groups/info/${
        this.props.match.params.slug
      }`,
      {
        method: 'GET',
        credentials: 'include'
      }
    )
      .then(response => {
        response.json().then(data => {
          if (response.status === 200) {
            this.setState({ title: data.title });
          } else {
            console.log(data);
          }
        });
      })
      .catch(error => console.log(error));
  };

  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  // Takes state's schedule array, convert to an array of integers, converts using local  UTC offset, and then makes POST request with converted schedule array
  onScheduleSubmit = () => {
    const { schedule } = this.state;

    if (!this.state.anonUsername && !this.props.isLoggedIn) {
      this.props.history.push({
        pathname: '/users/login',
        state: { success: false, message: 'Please log in.' }
      });
    }

    const convertedSchedule = schedule.map(hour => {
      if (hour.isNotAvailable) {
        return 0;
      } else {
        return 1;
      }
    });

    // POST request to API's schedule setting route
    fetch(`${process.env.REACT_APP_API_URL}api/groups/set-schedule`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        UUID: this.props.match.params.slug,
        anonUsername: this.state.anonUsername,
        schedule: shiftByUTCOffset(convertedSchedule, 'toUTC')
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
    this.hideModal(event);
  };

  // Takes selected start time and generates remaining ending time option elements for modal
  createEndingTimeOptions = () => {
    const options = [];
    for (let i = this.state.modalStartTime + 1; i <= 24; i++) {
      options.push({ value: i, label: getTimeString(i) });
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
          {getTimeString(i)}
        </div>
      );
    }
    week.unshift(<div className={styles.labelContainer}>{labels}</div>);
    return week;
  };

  // Takes id from calling block and then deletes matching time block object
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

  // Sets start time to selected block's
  setCurrentTimeBlock = (id, weekdayIndex, startTime, endTime) => {
    // Reset select-option element to first option
    document.getElementById('endTimeForm')[0].value = startTime + 1;

    this.setState({
      ...this.state,
      showModal: true,
      currentID: id,
      modalWeekday: getWeekdayString(weekdayIndex),
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

  hideModal = event => {
    event.preventDefault();
    this.setState({ showModal: false });
  };

  showModal = event => {
    event.preventDefault();
    this.setState({ showModal: true });
  };

  showSidebar = () => {
    this.setState({ ...this.state, showSidebar: true });
  };

  hideSidebar = () => {
    this.setState({ ...this.state, showSidebar: false });
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
    const {
      title,
      modalStartTime,
      modalWeekday,
      showModal,
      showSidebar
    } = this.state;

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <span>Set a new schedule for yourself</span>
          <h1>{title ? title : undefined}</h1>
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
          <Button
            title={'Submit schedule'}
            onClickHandle={this.onScheduleSubmit}
          />
          <Link
            to={`/groups/view/${this.props.match.params.slug}`}
            className={styles.button}
          >
            <Button title={'View group'} />
          </Link>
        </Sidebar>
        <Modal isOpen={showModal} hideModalHandle={this.hideModal}>
          <form id='endTimeForm' onSubmit={this.createTimeBlock}>
            <h1 className={styles.title}>Select Ending Time</h1>
            <span>{modalWeekday}</span>
            <span>
              {getTimeString(modalStartTime)} <br /> to
            </span>
            <Select
              title={'Ending Time'}
              name={'endTime'}
              placeholder={'Select an ending time'}
              options={this.createEndingTimeOptions()}
              onChangeHandle={this.onEndTimeSelect}
            />
            <Button title={'Create Time Block'} />
            <Button title={'Cancel'} onClickHandle={this.hideModal} />
          </form>
        </Modal>
        <div className={styles.weekContainer}>{this.createWeekTable()}</div>
        <ReactToolTip
          className={styles.tooltip}
          effect='solid'
          place='top'
          type='light'
        />
      </div>
    );
  }
}

export default WeekEdit;
