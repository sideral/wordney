import React from 'react';
import ButtonChange from './ButtonChange';
import ButtonLeft from './ButtonLeft';
import ButtonRetry from './ButtonRetry';
import styles from './styles.module.css';

function Controls({ attempts, onRetry, onShuffle }) {
  return (
    <nav className={styles['game-controls']}>
      <ul>
        <li><ButtonLeft left={attempts}/></li>
        <li><ButtonRetry onClick={onRetry}/></li>
        <li><ButtonChange onClick={onShuffle}/></li>
      </ul>
    </nav>
  );
}

export default Controls;