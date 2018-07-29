import React from 'react';
import WordStep from './WordStep';

class WordLastStep extends React.Component{
  render(){
    return (
      <WordStep color={"red"} isLast={true}>{this.props.children}</WordStep>
    );
  }
}

export default WordLastStep;