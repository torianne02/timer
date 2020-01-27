import React, { Component } from 'react';
import TimerForm from './TimerForm';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      startTime: '',
      minutes: '',
      seconds: '00',
      speed: 1,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();

    if (this.validate()) {
      this.startTimer();
    }
  }

  validate = () => {
    if (parseInt(this.state.startTime) > 0) {
      return true
    } else {
      return alert('Make sure to enter a number that is greater than 0!')
    }
  }

  startTimer = () => {

  }


  render() {
    return (
      <div className="timer">
        <div className="timer-form">
          <TimerForm 
            startTimeValue={ this.state.startTime }
            handleOnChange={ this.handleOnChange }
            handleOnSubmit={ this.handleOnSubmit }
          />
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