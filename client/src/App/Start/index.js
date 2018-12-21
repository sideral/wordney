import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Start = () => (
  <div>
    <header className={styles.header}>
      <h1 className={styles.title}>
        wordney
      </h1>
      <h2 className={styles.subtitle}>
        find the shortest path between two words
      </h2>
    </header>
    <Link to='/game' className={styles.button}>start</Link>
  </div>
);

export default Start;