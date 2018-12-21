import React from 'react';
import Api from '../Api';
import Breadcrumb from './Breadcrumb';
import RelatedWords from './RelatedWords';

export default class GameArea extends React.Component {
  state = {
    ready: false,
    fetched: false
  };

  constructor(props) {
    super(props);
    this.onWordSelected = this.onWordSelected.bind(this);
    this.onWordsFetched = this.onWordsFetched.bind(this);
  }

  componentDidMount() {
    Api.fetchRandomWords().then((words) => {
      this.setState({
        words: words,
        currentWord: words[0],
        ready: true
      });
    });
  }

  onWordsFetched(){
    this.setState({
      fetched: true
    });
  }

  onWordSelected(word) {
    this.state.words.splice(-1, 0, word);
    this.setState({
      words: this.state.words,
      currentWord: word,
      fetched: false
    });
    this.props.onAttempt();
  }

  render() {
    const { ready, words, currentWord, fetched } = this.state;

    if (!ready) {
      return null;
    }

    return (
      <div>
        <Breadcrumb words={words} ready={fetched}/>
        <RelatedWords word={currentWord} onSelect={this.onWordSelected} onFetch={this.onWordsFetched}/>
      </div>
    );
  }
}