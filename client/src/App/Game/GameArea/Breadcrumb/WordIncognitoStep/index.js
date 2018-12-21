import React from 'react';
import WordStep from '../../WordSquare/WordStep';
import styles from './styles.module.css';

function WordIncognitoStep({ ready }) {
  return (
    <WordStep color="lightgray">{
      ready
        ? <div className={styles['word-square-question']}>??</div>
        : <div className={styles['word-square-loading']}/>
    }</WordStep>
  );
}

export default WordIncognitoStep;