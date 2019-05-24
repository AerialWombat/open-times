import React from 'react';

import styles from './week-edit-block.module.scss';

const WeekEditBlock = ({
  blockID,
  weekdayIndex,
  startTime,
  isNotAvailable,
  isStart,
  deleteTimeBlock,
  setCurrentTimeBlock
}) => {
  if (isNotAvailable) {
    return (
      <div
        className={styles.notAvailable}
        onClick={() => {
          setCurrentTimeBlock(blockID, weekdayIndex, startTime, startTime + 1);
        }}
      />
    );
  } else {
    if (isStart) {
      return (
        <div className={styles.available}>
          <button
            className={styles.delete}
            onClick={() => deleteTimeBlock(blockID)}
          />
        </div>
      );
    } else {
      return <div className={styles.available} />;
    }
  }
};

export default WeekEditBlock;
