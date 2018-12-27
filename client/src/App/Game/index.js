import React from 'react';
import update from 'immutability-helper';
import Api from './services/api';
import Controls from './regions/Controls';
import RelatedWords from './regions/RelatedWords';
import WordTrail from './regions/WordTrail';

export default class Game extends React.Component {
  static getInitialState() {
    return {
      attemptsLeft: 20,
      degrees: 2,
      result: null,
      wordTrail: [],
      currentWordIndex: null,
      relatedWords: []
    };
  }

  constructor(props) {
    super(props);
    this.state = Game.getInitialState();
  }

  componentDidMount() {
    this.fetchWordPair();
  }

  fetchWordPair() {
    Api.fetchWordPair(this.state.degrees).then(words => {
      this.setState({
        wordTrail: words || [],
        currentWordIndex: 0
      }, this.fetchRelatedWords);
    });
  }

  fetchRelatedWords(){
    const currentWord = this.getCurrentWord();
    Api.fetchRelatedWords(currentWord).then(relatedWords => {
      this.setState({
        relatedWords: relatedWords
      })
    });
  }

  retry = () => {
    const initialState = Game.getInitialState();
    initialState.wordTrail = this.state.wordTrail;
    initialState.wordTrail.splice(1, initialState.wordTrail.length - 2);
    initialState.currentWordIndex = 0;
    this.setState(initialState, this.fetchRelatedWords);
  };

  shuffle = () => {
    this.setState(Game.getInitialState(), this.fetchWordPair);
  };

  addToTrail = (word) => {
    this.setState(prevState => {
      return {
        wordTrail: update(prevState.wordTrail, {$splice: [[-1, 0, word]]}),
        currentWordIndex: prevState.currentWordIndex + 1,
        attemptsLeft: prevState.attemptsLeft - 1
      }
    }, this.fetchRelatedWords);
  };

  backToWord = (word) => {
    this.setState(prevState => {
      const index = prevState.wordTrail.indexOf(word);
      const wordTrail = update(prevState.wordTrail, {$splice: [[index + 1, prevState.wordTrail.length - index - 2]]});
      return {
        wordTrail: wordTrail,
        currentWordIndex: wordTrail.length - 2
      }
    }, this.fetchRelatedWords);
  };

  getCurrentWord (){
    if(this.state.currentWordIndex === null || this.state.wordTrail.length === 0){
      return null;
    }
    return this.state.wordTrail[this.state.currentWordIndex];
  }

  render() {
    const {attemptsLeft, wordTrail, relatedWords} = this.state;
    const currentWord = this.getCurrentWord();
    return (
      <section>
        <Controls attempts={attemptsLeft} onShuffle={this.shuffle} onRetry={this.retry}/>
        <WordTrail words={wordTrail} loading={!relatedWords.length} onWordClick={this.backToWord}/>
        <RelatedWords words={relatedWords} currentWord={currentWord} onWordClick={this.addToTrail}/>
      </section>
    );
  }
}