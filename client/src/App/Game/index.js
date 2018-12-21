import React from 'react';
import Controls from './Controls';
import GameArea from './GameArea';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      result: 'pending', //'lost', 'won',
      attemptsLeft: 6
    };
  }

  onRetry = () => {
    var words = [this.state.words[0], this.state.words[this.state.words.length - 1]];
    this.setState({
      words: words,
      similarWords: [],
      isDone: false,
      left: 25
    });
    //this.loadSimilarWords(words[0]);
  };

  onShuffle = () => {
    this.setState({
      words: [],
      similarWords: [],
      isDone: false,
      left: 25
    });
  };

  onAttempt = () => {
    var left = this.state.attemptsLeft - 1;
    this.setState({
      attemptsLeft: left,
      result: left === 0? 'lost' : 'pending',
      playing: left > 0
    });
  };

  render() {
    if(!this.state.playing){
      return (
        <section>
          <Controls attempts={this.state.attemptsLeft} onShuffle={this.onShuffle} onRetry={this.onRetry}/>
        </section>
      );
    }

    return (
      <section>
        <Controls attempts={this.state.attemptsLeft} onShuffle={this.onShuffle} onRetry={this.onRetry}/>
        <GameArea result={this.state.result} onAttempt={this.onAttempt}/>
      </section>
    );

    // const gameControls = <GameControls
    //   left={this.state.left}
    //   onRetry={this.onRetry.bind(this)}
    //   onShuffle={this.onShuffle.bind(this)}
    // />;
    //
    // if (this.state.words.length === 0) {
    //   return (
    //     <div>
    //       {gameControls}
    //       <WordIncognitoStep/>
    //     </div>
    //   );
    // }
    // else if (!this.state.isDone) {

    // }
    // else {
    //   let steps = [];
    //
    //   this.state.words.forEach((word, idx) => {
    //     if (idx === this.state.words.length - 1) {
    //       return;
    //     }
    //
    //     steps.push(<WordStep
    //       key={word}
    //       isDone={true}
    //       isLast={idx === this.state.words.length - 2}>{word}</WordStep>);
    //   });
    //
    //   return (
    //     <div>
    //       {gameControls}
    //       {steps}
    //       <MagnificentMessage usedWords={this.state.words.length - 1}/>
    //     </div>
    //   );
    // }
  }
}