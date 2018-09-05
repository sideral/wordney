import React from 'react';

class ControlButtonLeft extends React.Component{
  render(){
    return (
      <div className={"GameControls-button GameControls-left"}>
        <div className={this.props.left <= 5 ? "ending" : ""}>{this.props.left}</div>
        left
      </div>
    );
  }
}

export default ControlButtonLeft;