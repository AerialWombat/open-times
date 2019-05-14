// Takes time index and returns string with formatted hour time
export const getTimeString = timeIndex => {
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
export const getWeekdayString = weekIndex => {
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

// Takes an hourly schedule array and direction and shifts schedule to or from UTC timezone
export const shiftByUTCOffset = (schedule, direction) => {
  //Get local offset from UTC
  const UTCOffset = new Date().getTimezoneOffset() / 60;

  if (direction === 'toLocal') {
    // Shifts array backwards by UTC offset
    if (UTCOffset < 0) {
      const shiftedHours = schedule.splice(
        schedule.length - UTCOffset,
        UTCOffset
      );
      schedule.splice(0, 0, ...shiftedHours);
    }
    // Shifts array forwards by UTC offset
    else if (UTCOffset > 0) {
      const shiftedHours = schedule.splice(0, Math.abs(UTCOffset));
      schedule.splice(schedule.length, 0, ...shiftedHours);
    }
  } else if (direction === 'toUTC') {
    // Shifts array forward by UTC offset
    if (UTCOffset > 0) {
      const shiftedHours = schedule.splice(
        schedule.length - UTCOffset,
        UTCOffset
      );
      schedule.splice(0, 0, ...shiftedHours);
    }
    // Shifts array backward by UTC offset
    else if (UTCOffset < 0) {
      const shiftedHours = schedule.splice(0, Math.abs(UTCOffset));
      schedule.splice(schedule.length, 0, ...shiftedHours);
    }
  }

  return schedule;
};
