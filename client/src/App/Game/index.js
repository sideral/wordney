import React from 'react';
import Controls from './Controls';
import GameArea from './GameArea';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'new', //'playing', 'lost', 'won',
      attemptsLeft: 20,
      degrees: 5
    };
  }

  onRetry = () => {
    this.setState({
      status: 'refreshing',
      attemptsLeft: 20
    });
  };

  onShuffle = () => {
    this.setState({
      status: 'new',
      attemptsLeft: 20
    });
  };

  onAttempt = () => {
    this.setState((prevState) => {
      var left = prevState.attemptsLeft - 1;
      return {
        attemptsLeft: left,
        status: left === 0? 'lost' : 'playing',
        playing: left > 0
      }
    });
  };

  onReady = () => {
    this.setState({
      status: 'playing'
    });
  };

  render() {
    const {status, attemptsLeft, degrees} = this.state;

    if(['new', 'playing', 'refreshing'].includes(status)){
      return (
        <section>
          <Controls
            attempts={attemptsLeft}
            onShuffle={this.onShuffle}
            onRetry={this.onRetry}
          />
          <GameArea
            degrees={degrees}
            status={status}
            onAttempt={this.onAttempt}
            onReady={this.onReady}
          />
        </section>
      );
    }

    return (
      <section>
        <Controls
          attempts={attemptsLeft}
          onShuffle={this.onShuffle}
          onRetry={this.onRetry}
        />
      </section>
    );
  }
}