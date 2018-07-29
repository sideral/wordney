import React from 'react';

class ControlButtonShuffle extends React.Component{
  render(){
    return (
      <div className={"GameControls-button GameControls-shuffle"} onClick={this.props.onClick}>
        shuffle
      </div>
    );
  }
}

export default ControlButtonShuffle;