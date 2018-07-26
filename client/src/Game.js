import React from 'react';
import { Link } from 'react-router-dom';
import WordStep from './WordStep';
import WordChoice from './WordChoice';
import GameControls from './GameControls';

const Game = () => (
  <div>
    <GameControls/>
    <WordStep word={"information"} index={15}/>
    <WordChoice word={"data"} index={0}/>
    <WordChoice word={"knowledge"} index={1}/>
    <WordChoice word={"provide"} index={2}/>
    <WordChoice word={"documents"} index={3}/>
    <WordChoice word={"access"} index={4}/>
    <WordChoice word={"intelligence"} index={5}/>
    <WordChoice word={"details"} index={6}/>
    <WordChoice word={"reports"} index={7}/>
    <WordChoice word={"database"} index={8}/>
    <WordChoice word={"internet"} index={9}/>
    <WordChoice word={"technology"} index={10}/>
    <WordChoice word={"evidence"} index={11}/>
    <WordChoice word={"source"} index={12}/>
    <WordChoice word={"communication"} index={13}/>
    <WordChoice word={"communications"} index={14}/>
  </div>
);

export default Game;