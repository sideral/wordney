import React from 'react';
import { Rectangle } from 'react-rough';

import './WordSquare.css';

class WordSquare extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      textWidth: 0,
      squareWidth: 0,
      squareHeight: props.inline? 40 : 60,
      padding: 10,
      strokeWidth: 5
    }
  }

  componentDidMount(){
    var wordEl = document.querySelector('.WordSquare-word-' + this.props.index);
    var textWidth = wordEl.getBoundingClientRect().width;
    this.setState({
      textWidth: textWidth,
      squareWidth: textWidth + 4*this.state.padding + 2*this.state.strokeWidth
    });
  }

  render(){
    let rectangle = null;

    if(this.state.squareWidth){
      rectangle = (<Rectangle
        width={this.state.squareWidth}
        height={this.state.squareHeight + 2*this.state.padding}
        options={{
          data: [
            this.state.padding, // x
            this.state.padding, // y
            this.state.squareWidth - 2*this.state.padding, // width
            this.state.squareHeight // height
          ],
          fill: 'white',
          fillStyle: 'solid',
          strokeWidth: this.state.strokeWidth,
          stroke: this.props.color
        }}
      />);
    }

    return (
      <div className={"WordSquare " + (this.props.inline? "WordSquare-inline" : "")} style={{width: this.state.squareWidth}}>
        {rectangle}
        <div className={"WordSquare-word WordSquare-word-" + this.props.index}>
          {this.props.word}
        </div>
      </div>
    );
  }
}

export default WordSquare;