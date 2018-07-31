import WordStep from './WordStep';
import React from 'react';

class WordIncognitoStep extends React.Component{


  render(){
    let content = <div className="WordSquare-loading"/>;
    if(this.props.ready) {
      content = <div className="WordSquare-question">??</div>;
    }

    return (
      <WordStep color="lightgray">{content}</WordStep>
    );
  }
}

export default WordIncognitoStep;