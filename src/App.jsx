import React, {Component} from 'react';
import CountDownTimer from './CountDownTimer';

export default class App extends Component {
  countDownTimerComplete() {
    alert('time\'s up!');
  }

  render() {
    return (
      <div className="app">
        <CountDownTimer
          startTime="7"
          onTimerDone={this.countDownTimerComplete}>
          <button>Start Timer</button>
        </CountDownTimer>

      </div>
    )
  }
};
