import React from 'react';
import ControlButtonChange from './components/ControlButtonChange';
import ControlButtonLeft from './components/ControlButtonLeft';
import ControlButtonRetry from './components/ControlButtonRetry';
import './index.css';

export default class Index extends React.Component{
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