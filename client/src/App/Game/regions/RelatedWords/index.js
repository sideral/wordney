import React from 'react';
import WordChoice from './WordChoice';
import styles from './styles.module.css';

class RelatedWords extends React.Component{
  static defaultProps = {
    onWordClick: () => {},
    words: [],
    currentWord: ''
  };

  render(){
    if(this.props.words.length === 0){
      return null;
    }

    let choices = this.props.words.map((word) => {
      return (
        <li key={this.props.currentWord+word}>
          <WordChoice onClick={() => this.props.onWordClick(word)}>{word}</WordChoice>
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