import React from 'react';
import WordSquare from './WordSquare';

const WordStep = (props) => (
  <WordSquare word={props.word} index={props.index} color={"blue"} />
);

export default WordStep;