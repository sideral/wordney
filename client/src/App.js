import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Start from './Start';
import Game from './Game';

import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Start}/>
      <Route path="/game" component={Game}/>
    </div>
  </BrowserRouter>
);

export default App;