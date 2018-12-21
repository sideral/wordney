import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Start from './Start';
import Game from './Game';
import styles from './styles.module.css';

const App = () => (
  <BrowserRouter>
    <div className={styles.app}>
      <Route exact path="/" component={Start}/>
      <Route path="/game" component={Game}/>
    </div>
  </BrowserRouter>
);

export default App;