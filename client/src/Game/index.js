import React from 'react';

import WordStep from './WordStep';
import WordChoiceList from './WordChoiceList';
import GameControls from './GameControls';
import WordIncognitoStep from './WordIncognitoStep';
import MagnificentMessage from './MagnificentMessage';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      similarWords: [],
      left: 5,
      isDone: false,
      status: 'loading'
    };
  }

  componentDidMount() {
    this.loadRandomWords();
  }

  loadRandomWords() {
    fetch(this.props.url + '/random-words')
    .then((response) => {
      this.setState({
        words: response.json().words
      });
      this.loadSimilarWords(response.json().words[0]);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  loadSimilarWords(word) {
    fetch(`${this.props.url}/similar-words/${word}`)
    .then((response) => {
      this.setState({ similarWords: response.data.words });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onWordSelect(word) {
    var words = this.state.words;
    words.splice(this.state.words.length - 1, 0, word);

    var isDone = word === this.state.words[this.state.words.length - 1];
    var left = this.state.left - 1;
    this.setState({
      words: words,
      similarWords: [],
      isDone: isDone,
      left: left
    });

    if (!isDone && left > 0) {
      this.loadSimilarWords(word);
    }
  }

  onRetry() {
    var words = [this.state.words[0], this.state.words[this.state.words.length - 1]];
    this.setState({
      words: words,
      similarWords: [],
      isDone: false,
      left: 25
    });
    this.loadSimilarWords(words[0]);
  }

  onShuffle() {
    this.setState({
      words: [],
      similarWords: [],
      isDone: false,
      left: 25
    });
    this.loadRandomWords();
  }

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
    this.loadSimilarWords(word);
  }

  render() {
    const gameControls = <GameControls
      left={this.state.left}
      onRetry={this.onRetry.bind(this)}
      onShuffle={this.onShuffle.bind(this)}
    />;

    if (this.state.words.length === 0) {
      return (
        <div>
          {gameControls}
          <WordIncognitoStep/>
        </div>
      );
    }
    else if (!this.state.isDone) {
      let steps = [];
      this.state.words.forEach((word, idx) => {
        if (idx < this.state.words.length - 1) {
          steps.push(<WordStep key={word + idx} onClick={this.backToWord.bind(this)}>{word}</WordStep>);
        }
      });

      steps.push(<WordIncognitoStep key={'?'} ready={this.state.similarWords.length > 0} />);
      var lastWord = this.state.words[this.state.words.length - 1];
      steps.push(<WordStep key={lastWord + '-last'} isLast={true} color="gray">{lastWord}</WordStep>);

      return (
        <div>
          {gameControls}
          {steps}
          <WordChoiceList words={this.state.similarWords} onSelect={this.onWordSelect.bind(this)}/>
        </div>
      );
    }
    else {
      let steps = [];

      this.state.words.forEach((word, idx) => {
        if (idx === this.state.words.length - 1) {
          return;
        }

        steps.push(<WordStep
          key={word}
          isDone={true}
          isLast={idx === this.state.words.length - 2}>{word}</WordStep>);
      });

      return (
        <div>
          {gameControls}
          {steps}
          <MagnificentMessage usedWords={this.state.words.length - 1}/>
        </div>
      );
    }
  }
}