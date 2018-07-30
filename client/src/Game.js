import React from 'react';
import axios from 'axios';

import WordStep from './WordStep';
import WordChoiceList from './WordChoiceList';
import GameControls from './GameControls';
import LoadingSquare from './LoadingSquare';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      similarWords: [],
      left: 25,
      isDone: false
    };
  }

  componentDidMount() {
    this.loadRandomWords();
  }

  loadRandomWords() {
    axios.get(this.props.url + '/random-words')
    .then((response) => {
      this.setState({
        words: response.data.words
      });
      this.loadSimilarWords(response.data.words[0]);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  loadSimilarWords(word) {
    axios.get(`${this.props.url}/similar-words/${word}`)
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

  render() {
    if (this.state.words.length === 0) {
      return (
        <div>
          <GameControls left={this.state.left} onRetry={this.onRetry.bind(this)} onShuffle={this.onShuffle.bind(this)}/>
          <LoadingSquare/>
        </div>
      );
    }
    else {
      let steps = [];
      this.state.words.forEach((word, idx) => {
        if (idx < this.state.words.length - 1) {
          steps.push(<WordStep key={word}>{word}</WordStep>);
        }
      });

      let wordList;
      if (!this.state.isDone) {
        steps.push(<LoadingSquare/>);
        var lastWord = this.state.words[this.state.words.length - 1];
        steps.push(<WordStep key={lastWord} isLast={true} color="gray">{lastWord}</WordStep>);
        wordList = <WordChoiceList words={this.state.similarWords} onSelect={this.onWordSelect.bind(this)}/>;
      }

      return (
        <div>
          <GameControls left={this.state.left} onRetry={this.onRetry.bind(this)} onShuffle={this.onShuffle.bind(this)}/>
          {steps}
          {wordList}
        </div>
      );
    }
  }
}

export default Game;