import React from 'react';
import WordSquare from './WordSquare';


class WordStep extends React.Component{
  static defaultProps = {
    color: 'purple',
    isLast: false,
    isDone: false
  };

  onClick(word){
    if(this.props.onClick){
      this.props.onClick(word);
    }
  }

  render() {
    let color = this.props.isDone? "green" : this.props.color;
    return (
      <div className={"WordStep " + (this.props.isLast? "WordStep-last ": "") + (this.props.isDone? "WordStep-done": "")}>
        <WordSquare index={this.props.index} color={color} onClick={this.onClick.bind(this)}>{this.props.children}</WordSquare>
        {this.props.isLast? null : <div className="WordStep-arrow"/>}
      </div>
    )
  }
}


export default WordStep;