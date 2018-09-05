import React from 'react';
import WordChoice from './WordChoice';

class WordChoiceList extends React.Component{
  static defaultProps = {
    words: [],
    onSelect: () => {}
  };

  onSelect(word){
    this.props.onSelect(word);
  }

  render(){
    let choices = [];
    this.props.words.forEach((word, index) => {
      choices.push(<li key={index}><WordChoice onClick={this.onSelect.bind(this)}>{word}</WordChoice></li>);
    });

    return (
      <div>
        <ul className="WordChoices">
          {choices}
        </ul>
      </div>
    )
  }
}

export default WordChoiceList;