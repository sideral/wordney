import React from 'react';
import WordSquare from './WordSquare';

class WordChoice extends React.Component{
  render(){
    return (
      <WordSquare color={"lightgray"} inline={true} onClick={this.props.onClick}>{this.props.children}</WordSquare>
    );
  }
}

export default WordChoice;