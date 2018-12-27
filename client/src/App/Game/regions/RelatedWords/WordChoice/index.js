import React from 'react';
import WordSquare from '../../../components/WordSquare';

function WordChoice({ onClick, children }) {
  return (
    <WordSquare color={'lightgray'} inline={true} onClick={onClick}>
      {children}
    </WordSquare>
  );
}

export default WordChoice;