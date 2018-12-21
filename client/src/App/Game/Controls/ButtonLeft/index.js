import React from 'react';
import styles from '../styles.module.css';

function ControlButtonLeft({ left }) {
  return (
    <div className={styles['game-controls-left']}>
      <div className={left <= 5 ? styles['game-controls-left-ending'] : ""}>{left}</div>
      left
    </div>
  );
}

export default ControlButtonLeft;