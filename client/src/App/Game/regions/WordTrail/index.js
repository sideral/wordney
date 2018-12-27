import React from 'react';
import WordStep from '../../components/WordSquare/WordStep';
import WordIncognitoStep from './WordIncognitoStep';
import styles from './styles.module.css';

class WordTrail extends React.Component {
  static defaultProps = {
    loading: true,
    result: 'pending',
    words: []
  };

  render() {
    const { words, loading, onWordClick, result } = this.props;

    if(words.length === 0){
      return <div className={styles['word-trail']}><WordIncognitoStep key='?' loading={loading}/></div>;
    }

    const steps = words.slice(0, -1).map((word, idx) => {
      return (
        <WordStep key={`${word}-${idx}`} onClick={() => onWordClick(word)}>
          {word}
        </WordStep>
      );
    });

    if(result !== 'won'){
      steps.push(<WordIncognitoStep key='?' loading={loading}/>);
      const last = words.slice(-1)[0];
      steps.push(
        <WordStep key={`${last}-last`} isLast={true} color="gray">
          {last}
        </WordStep>
      );
    }

    return (
      <div className={styles['word-trail']}>{steps}</div>
    );
  }
}

export default WordTrail;