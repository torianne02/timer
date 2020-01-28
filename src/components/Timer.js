import React, { Component } from 'react';
import TimerForm from './TimerForm';
import TimerText from './TimerText';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      startTime: '',
      minutes: '00',
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

  // will need different onClick handlers - pause and resume
  // OR can check innerHTML text of button and have conditional
  // still need logic to pause timer
  handleOnClick = event => {
    this.setState({
      timerOn: false,
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("HERE (SUBMIT)")

    if (this.validate()) {
      this.setState({
        timerOn: true,
      })

      this.beginTimer();
    }
  }

  validate = () => {
    console.log("HERE (VALIDATION)")
    this.convertStartTime()

    if (this.state.startTime > 0) {
      return true
    } else {
      return alert('Make sure to enter a number that is greater than 0!')
    }
  }

  convertStartTime = () => {
    console.log("HERE (CONVERTER)")
    let time = parseInt(this.state.startTime)
    this.setState({
      startTime: time,
      minutes: time,
    })
  }

  beginTimer = () => {
    if (this.state.timerOn === true) {
      const countdown = setInterval(function() {
        this.updateCounter()
      }, 1000)
  
      this.setState({
        countdown
      })
    }
  }

  updateCounter = () => {
    let sec = parseInt(this.state.seconds)
    let min = this.state.minutes

    if (sec <= 0) {
      min -= 1
      sec = 59
    }

    sec -= 1

    this.setState({
      minutes: min,
      seconds: sec,
    })
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
          <TimerText
            minutes={ this.state.minutes }
            seconds={ this.state.seconds } 
            handleOnClick={ this.handleOnClick }
          />
          {/* 
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