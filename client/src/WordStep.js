import React from 'react';
import WordSquare from './WordSquare';


class WordStep extends React.Component{
  static defaultProps = {
    color: 'blue',
    isLast: false
  };

  render() {
    return (
      <div className={"WordStep" + (this.props.isLast? "WordStep-last": "")}>
        <WordSquare index={this.props.index} color={this.props.color}>{this.props.children}</WordSquare>
        {this.props.isLast? null : <div className="WordStep-arrow"/>}
      </div>
    )
  }
}


export default WordStep;