import React from 'react';
import styles from './styles.module.css';

function ResultMessage({result, usedWords, onRetry}) {
  const messages ={
    won: [
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
      'gratifying',
      'bravo',
      'wow',
      'fuck yeah',
      'supreme',
      'incomparable',
      'transcendent',
      'perfect',
      'unrivalled',
      'supernatural',
      'legendary',
      'fabulous',
      'unreal',
      'A+',
      'super',
      'palatial',
      'grandiose',
      'bombastic',
      'ecstatic'
    ],
    lost: [
      'sad'
    ]
  } ;

  const randomIndex = Math.floor(messages[result].length * Math.random());
  const randomMessage = messages[result][randomIndex];
  return (
    <div>
      <div className={styles[result + '-message']}>{randomMessage}!!</div>
      {result === 'won'
        &&  <div className={styles['message-count']} onClick={onRetry}>you used {usedWords} words. can you do it in less?</div>}
    </div>
  );
}

export default ResultMessage;