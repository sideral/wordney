import React from 'react';
import './GameControls.css';

class GameControls extends React.Component{
  render(){
    return (
      <nav className="GameControls">
        <ul>
          <li className="GameControls-retry">retry</li>
          <li className="GameControls-shuffle">shuffle</li>
        </ul>
      </nav>
    );
  }
}

export default GameControls;