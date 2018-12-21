import React from 'react';
import WordChoice from './WordChoice';
import styles from './styles.module.css';
import Api from '../../Api';

class RelatedWords extends React.Component{
  static defaultProps = {
    onSelect: () => {},
    onFetch: () => {}
  };

  state = {
    words: []
  };

  componentDidMount() {
    this.fetchWords();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.word !== this.props.word){
      this.fetchWords();
    }
  }

  fetchWords(){
    Api.fetchRelatedWords(this.props.word).then((words) => {
      this.setState({
        words: words
      });
      this.props.onFetch();
    });
  }

  onSelect = (word) => {
    this.setState({
      words: []
    });
    this.props.onSelect(word);
  };

  render(){
    if(this.state.words.length === 0){
      return null;
    }

    let choices = this.state.words.map((word) => {
      return (
        <li key={this.props.word+word}>
          <WordChoice onClick={() => this.onSelect(word)}>{word}</WordChoice>
        </li>
      );
    });

    return (
      <div>
        <ul className={styles['word-choices']}>
          {choices}
        </ul>
      </div>
    );
  }
}

export default RelatedWords;