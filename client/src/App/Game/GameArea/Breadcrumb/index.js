import React from 'react';
import WordStep from '../WordSquare/WordStep';
import WordIncognitoStep from './WordIncognitoStep';

class Breadcrumb extends React.Component {
  static defaultProps = {
    ready: false,
    words: []
  };

  render() {
    const { words, ready, onWordClick } = this.props;

    const steps = words.slice(0, -1).map((word, idx) => {
      return (
        <WordStep key={`${word}-${idx}`} onClick={() => onWordClick(word)}>
          {word}
        </WordStep>
      );
    });

    steps.push(<WordIncognitoStep key='?' ready={ready}/>);

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

export default Breadcrumb;