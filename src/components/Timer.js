import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      startTime: 0,
      countdownTime: 0,
      speed: 1,
    };
  }

  render() {
    return (
      <div className="timer">
        <div className="timer-form">
          {/* 
            TimerForm component for input 
            
            will use handleOnChange and handleOnStart to change state
          */}
        </div>
        <div className="timer-message">
          {/* 
            Message component to display "Time's up!" and "More than half way there!"

            still haven't decided if I want a separate comp. for this
          */}
        </div>
        <div className="timer-text">
          {/* 
            TimerText component to display 00:00 countdown
            this text will change color/blink 

            will house pause button

            will use handleOnPause to change state (pause timer)
          */}
        </div>
        <div className="timer-speed">
          {/* 
            Speed component will house the 3 speed buttons
            
            will use handleOnClick to change speed
          */}
        </div>
      </div>
    )
  }
}

export default Timer