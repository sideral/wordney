import React from 'react';
import WordSquare from './WordSquare';

const WordChoice = (props) => (
  <WordSquare word={props.word} index={props.index} inline={true} color={"green"} />
);

export default WordChoice;