import React, { Component } from 'react';
import TimerForm from './TimerForm';
import TimerText from './TimerText';
import TimerSpeed from './TimerSpeed';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      startTime: '',
      minutes: 0,
      seconds: 0,
      speed: 1000,
      messageText: '',
      showButton: false,
      changeSpeed: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnPause = event => {
    this.setState({
      timerOn: false,
    })
  }

  handleOnResume = event => {
    this.setState({
      timerOn: true,
    })
  }

  handleOnNormalSpeed = event => {
    this.startInterval()

    this.setState({
      speed: 1000,
      changeSpeed: true,
    })
  }

  handleOnMediumSpeed = event => {
    this.startInterval()

    this.setState({
      speed: 1500,
      changeSpeed: true,
    })
  }

  handleOnHighSpeed = event => {
    this.startInterval()
    
    this.setState({
      speed: 2000,
      changeSpeed: true,
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    event.target.reset();

    if (this.validate()) {
      let time = parseInt(this.state.startTime)

      this.setState({
        timerOn: true,
        seconds: this.state.seconds,
        startTime: time,
        minutes: time,
        showButton: true,
      })
    }
  }

  validate = () => {
    if (parseInt(this.state.startTime) > 0) {
      return true
    } else {
      return alert('Make sure to enter a number that is greater than 0!')
    }
  }

  tick = () => {
    if (this.state.timerOn === true) {
      let sec = this.state.seconds
      let min = this.state.minutes
      let timerStatus = true
  
      if (sec === 0 && min !== 0) {
        min -= 1
        sec = 59
      } else if (sec === 0 && min === 0) {
        timerStatus = false
      } else {
        sec -= 1
      }
  
      this.setState({
        minutes: min,
        seconds: sec,
        timerOn: timerStatus,
        messageText: this.updateMessage(),
      })  
    }
  }

  updateMessage = () => {
    let message;

    if (this.state.startTime !== '') {
      if ((this.state.startTime * 60) / 2 === (this.state.minutes * 60) + this.state.seconds) {
        message = 'More than halfway there!'
      } else if (this.state.minutes === 0 && this.state.seconds === 0) {
        message = "Time's up!"
      }
    }

    return message
  }

  fixString = (num) => {
    if (num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  startInterval = () => {
    // this is acting really odd - when 1.5 or 2 is clicked it goes fast and then lags
    if (this.state.changeSpeed) {
      clearInterval(this.timerID);

      this.timerID = setInterval(() => this.tick(), this.state.speed)
    } else {
      this.timerID = setInterval(() => this.tick(), this.state.speed)
    }
  }

  componentDidMount() {
    this.startInterval()
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
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
          { this.state.messageText }
        </div>

        <TimerText
          minutes={ this.fixString(this.state.minutes) }
          seconds={ this.fixString(this.state.seconds) } 
          timerOn={ this.state.timerOn }
          showButton={ this.state.showButton }
          handleOnPause={ this.handleOnPause }
          handleOnResume={ this.handleOnResume }
        />

        <TimerSpeed
          handleOnNormalSpeed={ this.handleOnNormalSpeed }
          handleOnMediumSpeed={ this.handleOnMediumSpeed }
          handleOnHighSpeed={ this.handleOnHighSpeed } 
        />
      </div>
    )
  }
}

export default Timer