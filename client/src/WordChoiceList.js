import React from 'react';
import WordChoice from './WordChoice';
import LoadingSquare from './LoadingSquare';

class WordChoiceList extends React.Component{
  static defaultProps = {
    words: [],
    onSelect: () => {}
  };

  onSelect(word){
    this.props.onSelect(word);
  }

  render(){
    if(this.props.words.length === 0){
      return <LoadingSquare/>;
    }

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