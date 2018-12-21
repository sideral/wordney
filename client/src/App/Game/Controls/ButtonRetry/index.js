import React from 'react';
import styles from '../styles.module.css';

function ControlButtonRetry({ onClick }) {
  return (
    <div className={styles['game-controls-retry']} onClick={onClick}>
      restart
    </div>
  );
}

export default ControlButtonRetry;