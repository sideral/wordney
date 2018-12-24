import React from 'react';
import Api from '../Api';
import Breadcrumb from './Breadcrumb';
import RelatedWords from './RelatedWords';

export default class GameArea extends React.Component {
  state = {
    ready: false,
    words: [],
    currentWord: ''
  };

  componentDidMount() {
    this.fetchWords();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.status === 'new' && prevProps.status !== 'new'){
      this.setState({
        words: [],
        currentWord: '',
        ready: false
      });
      this.fetchWords();
    }
    else if(this.props.status === 'refreshing' && prevProps.status !== 'refreshing'){
      prevState.words.splice(1, prevState.words.length -2);
      this.setState({
        words: prevState.words,
        currentWord: prevState.words[0],
        ready: false
      });
      this.fetchWords();
    }
  }

  fetchWords() {
    Api.fetchWordPair(this.props.degrees).then((words) => {
      this.setState({
        words: words,
        currentWord: words[0]
      });
    });
  }

  makeReady = () => {
    this.setState({
      ready: true
    });
    this.props.onReady();
  };

  attemptWord = (word) => {
    this.setState((prevState) => {
      prevState.words.splice(-1, 0, word);
      return {
        words: prevState.words,
        currentWord: word
      }
    });
    this.props.onAttempt();
  };

  backToWord = (word) => {
    this.setState((prevState) => {
      const index = prevState.words.indexOf(word);
      prevState.words.splice(index + 1, prevState.words.length - index - 2 );
      return {
        words: prevState.words,
        currentWord: prevState.words[prevState.words.length - 2]
      }
    });
  };

  render() {
    const { ready, words, currentWord } = this.state;

    if (words.length === 0) {
      return null;
    }

    return (
      <div>
        <Breadcrumb words={words} onWordClick={this.backToWord} ready={ready}/>
        <RelatedWords word={currentWord} onSelect={this.attemptWord} onFetch={this.makeReady}/>
      </div>
    );
  }
}