import React from 'react';
import WordStep from '../../components/WordSquare/WordStep';
import WordIncognitoStep from './WordIncognitoStep';

class WordTrail extends React.Component {
  static defaultProps = {
    loading: true,
    words: []
  };

  render() {
    const { words, loading, onWordClick } = this.props;

    if(words.length === 0){
      return <WordIncognitoStep key='?' loading={loading}/>;
    }

    const steps = words.slice(0, -1).map((word, idx) => {
      return (
        <WordStep key={`${word}-${idx}`} onClick={() => onWordClick(word)}>
          {word}
        </WordStep>
      );
    });

    steps.push(<WordIncognitoStep key='?' loading={loading}/>);

    const last = words.slice(-1)[0];
    steps.push(
      <WordStep key={`${last}-last`} isLast={true} color="gray">
        {last}
      </WordStep>
    );

    return (
      <div>{steps}</div>
    );
  }
}

export default WordTrail;