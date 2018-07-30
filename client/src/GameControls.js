import React from 'react';
import ControlButtonChange from './ControlButtonChange';
import ControlButtonLeft from './ControlButtonLeft';
import ControlButtonRetry from './ControlButtonRetry';
import './GameControls.css';

class GameControls extends React.Component{
  render(){
    return (
      <nav className="GameControls">
        <ul>
          <li><ControlButtonLeft left={this.props.left}/></li>
          <li><ControlButtonRetry onClick={this.props.onRetry}/></li>
          <li><ControlButtonChange onClick={this.props.onShuffle}/></li>
        </ul>
      </nav>
    );
  }
}

export default GameControls;