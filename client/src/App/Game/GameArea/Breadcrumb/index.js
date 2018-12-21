import React from 'react';
import WordStep from '../WordSquare/WordStep';
import WordIncognitoStep from './WordIncognitoStep';

class Breadcrumb extends React.Component {
  static defaultProps = {
    ready: false
  };

  backToWord(word) {
    let newWords = [];
    for (let currentWord of this.state.words) {
      newWords.push(currentWord);
      if (currentWord === word) {
        break;
      }
    }

    newWords.push(this.state.words[this.state.words.length - 1]);

    this.setState({
      words: newWords,
      similarWords: [],
      isDone: false
    });
    //this.loadSimilarWords(word);
  }

  render() {
    const steps = this.props.words.slice(0, -1).map((word, idx) => {
      return (
        <WordStep key={`${word}-${idx}`}>
          {word}
        </WordStep>
      );
    });

    steps.push(<WordIncognitoStep key='?' ready={this.props.ready}/>);

    const last = this.props.words.slice(-1)[0];
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