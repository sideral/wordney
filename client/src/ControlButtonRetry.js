import React from 'react';

class ControlButtonRetry extends React.Component{
  render(){
    return (
      <div className={"GameControls-button GameControls-retry"} onClick={this.props.onClick}>
        retry
      </div>
    );
  }
}

export default ControlButtonRetry;