import React from 'react';
import { Rectangle } from 'react-rough';
import styles from './styles.module.css';

class WordSquare extends React.Component{
  static defaultProps = {
    onClick: () => {},
    inline: false
  };

  constructor(props){
    super(props);

    this.padding = 10;
    this.strokeWidth = 5;

    this.state = {
      textWidth: 0,
      width: 0,
      height: props.inline? 40 : 50
    };

    this.wordRef = React.createRef();
  }

  componentDidMount(){
    this.updateBox();
  }

  updateBox(){
    var wordEl = this.wordRef.current;
    var textWidth = wordEl.getBoundingClientRect().width;
    if(textWidth !== this.state.textWidth){
      this.setState({
        textWidth: textWidth,
        width: textWidth + 4*this.padding + 2*this.strokeWidth
      });
    }
  }

  render(){
    let rectangle = null;

    if(this.state.width > 0){
      rectangle = (
        <Rectangle
          width={this.state.width}
          height={this.state.height + 2*this.padding}
          options={{
            data: [
              this.padding, // x
              this.padding, // y
              this.state.width - 2*this.padding, // width
              this.state.height // height
            ],
            fill: 'white',
            fillStyle: 'solid',
            strokeWidth: this.strokeWidth,
            stroke: this.props.color
          }}
        />
      );
    }

    const inlineSuffix = (this.props.inline? '-inline' : '');

    return (
      <div className={styles['word-square']} style={{width: this.state.width}}>
        {rectangle}
        <div ref={this.wordRef} className={styles['word-square-word' + inlineSuffix]} onClick={this.props.onClick}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default WordSquare;