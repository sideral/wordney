import React from 'react';

class ControlButtonChange extends React.Component{
  render(){
    return (
      <div className={"GameControls-button GameControls-shuffle"} onClick={this.props.onClick}>
        change
      </div>
    );
  }
}

export default ControlButtonChange;