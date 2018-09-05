import WordStep from './WordStep';
import React from 'react';

export default class WordIncognitoStep extends React.Component{
  render(){
    return (
      <WordStep color="lightgray">{
        this.props.ready? <div className="WordSquare-question">??</div> : <div className="WordSquare-loading"/>
      }</WordStep>
    );
  }
}