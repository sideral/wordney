import React from 'react';
import WordSquare from '../../WordSquare';
import styles from './styles.module.css';

class WordStep extends React.Component{
  static defaultProps = {
    color: 'purple',
    isLast: false,
    isDone: false,
    onClick: () => {}
  };

  render() {
    let color = this.props.isDone? "green" : this.props.color;
    return (
      <div className={styles['word-step']}>
        <WordSquare index={this.props.index} color={color} onClick={this.props.onClick}>
          {this.props.children}
        </WordSquare>
        {this.props.isLast? null : <div className="word-step-arrow"/>}
      </div>
    );
  }
}

export default WordStep;