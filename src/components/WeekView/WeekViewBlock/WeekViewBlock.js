import React from 'react';

import styles from './week-view-block.module.scss';

const WeekViewBlock = ({ percentageAvailable, membersAvailable }) => {
  const bgColorStyle = {
    backgroundColor: `rgba(235, 125, 0, ${percentageAvailable})`
  };

  return (
    <div
      className={styles.viewBlock}
      style={bgColorStyle}
      data-for='members'
      data-tip={membersAvailable}
    />
  );
};

export default WeekViewBlock;
