import React, { Component } from 'react';

class CountDownTimer extends Component {
  constructor(props) {
    super(props);
    // initialize state to what's passed in
    this.state = {
      time: props.startTime
    };
  }
  startTimer() {
    this.timer = setInterval(() => {
      const time = this.state.time - 1;
      this.setState({ time });

      if (time === 0) {
        this.props.onTimerDone();
        clearInterval(this.timer);
      }
    }, 1000);
  }
  render() {
    const self = this;
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => {
       console.log('inside map', this)
       return React.cloneElement(child, {
         onClick: () => this.startTimer()
       })
     }
    );
    // render value stored in state
    const startTime = this.state.time;
    return (
      <h1>
        {startTime}
        {childrenWithProps}
      </h1>
    )
  }
};

export default CountDownTimer;
