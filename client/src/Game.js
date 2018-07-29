import React from 'react';
import axios from 'axios';

import WordStep from './WordStep';
import WordLastStep from './WordLastStep';
import WordChoiceList from './WordChoiceList';
import GameControls from './GameControls';
import LoadingSquare from './LoadingSquare';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      words: [],
      similarWords: []
    };
  }

  componentDidMount(){
    axios.get(this.props.url + '/random-words')
      .then((response) => {
        this.setState({words: response.data.words});
        this.loadSimilarWords(response.data.words[0]);
      })
    .catch((error) => {
      console.error(error);
    });
  }

  loadSimilarWords(word){
    axios.get(`${this.props.url}/similar-words/${word}`)
    .then((response) => {
      this.setState({ similarWords: response.data.words });
    })
    .catch((error) => {
      console.error(error);
    })
  }

  onWordSelect(word){
    var words = this.state.words;
    words.splice(this.state.words.length - 1, 0, word);

    var isDone = word === this.state.words[this.state.words.length - 1];
    this.setState({
      words: words,
      similarWords: [],
      isDone: isDone
    });

    if(!isDone){
      this.loadSimilarWords(word);
    }
  }

  render(){
    if(this.state.words.length === 0){
      return (
        <div>
          <GameControls/>
          <LoadingSquare/>
        </div>
      )
    }
    else{
      let steps = [];
      this.state.words.forEach((word, idx) => {
        if(idx < this.state.words.length - 1){
          steps.push(<WordStep key={idx}>{word}</WordStep>);
        }
      });

      let lastStep = this.state.isDone? null : <WordLastStep>{this.state.words[this.state.words.length - 1]}</WordLastStep>;

      let wordList;
      if(!this.state.isDone){
        wordList = <WordChoiceList words={this.state.similarWords} onSelect={this.onWordSelect.bind(this)}/>;
      }

      return (
        <div>
          <GameControls/>
          {steps}
          {wordList}
          {lastStep}
        </div>
      )
    }
  }
}

export default Game;