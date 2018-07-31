import React from 'react';

class MagnificentMessage extends React.Component{
  render(){
    const results = [
      'awesome',
      'beautiful',
      'breathtaking',
      'formidable',
      'impressive',
      'magnificent',
      'stunning',
      'wonderful',
      'amazing',
      'fascinating',
      'marvelous',
      'prodigious',
      'incredible',
      'unbelievable',
      'captivating',
      'delightful',
      'excellent',
      'admirable',
      'exemplary',
      'great',
      'outstanding',
      'superlative',
      'good',
      'notable',
      'superior',
      'neat',
      'cool',
      'sensational',
      'electrifying',
      'exciting',
      'remarkable',
      'spectacular',
      'well done',
      'brilliant',
      'lovely',
      'striking',
      'noteworthy',
      'memorable',
      'wondrous',
      'extraordinary',
      'awe-inspiring',
      'heavenly',
      'glorious',
      'heroic',
      'splendid',
      'gratifying'
    ];

    const randomIndex = Math.floor(results.length*Math.random());
    return (
      <div>
        <div className="MagnificentMessage">{results[randomIndex]}!!</div>
        <div className="MagnificentMessage-count">you used {this.props.usedWords} words. can you do it in less?</div>
      </div>
    );
  }
}

export default MagnificentMessage;