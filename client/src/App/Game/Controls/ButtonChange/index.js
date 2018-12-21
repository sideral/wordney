import React from 'react';
import styles from '../styles.module.css';

function ControlButtonChange({ onClick }) {
  return (
    <div className={styles['game-controls-shuffle']} onClick={onClick}>
      change
    </div>
  );
}

export default ControlButtonChange;