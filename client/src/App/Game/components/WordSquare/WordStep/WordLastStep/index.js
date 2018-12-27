import React from 'react';
import WordStep from '../../WordStep';

function WordLastStep({ children }) {
  return (
    <WordStep color={"red"} isLast={true}>{children}</WordStep>
  );
}

export default WordLastStep;