import WordStep from './WordStep';
import React from 'react';

const LoadingSquare = (props) => (
  <WordStep color="gray" isLast={true}><div className="WordSquare-loading"/></WordStep>
);

export default LoadingSquare;