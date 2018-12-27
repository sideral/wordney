import React from 'react';
import WordStep from '../../../components/WordSquare/WordStep';
import styles from './styles.module.css';

function WordIncognitoStep({ loading }) {
  return (
    <WordStep color="lightgray">{
      loading
        ? <div className={styles['word-square-loading']}/>
        : <div className={styles['word-square-question']}>??</div>
    }</WordStep>
  );
}

export default WordIncognitoStep;