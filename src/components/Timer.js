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
      intervalID: 0,
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
    if (this.state.speed !== 1000) {
      this.setState({
        speed: 1000,
        changeSpeed: true,
      })
    }
  }

  handleOnMediumSpeed = event => {
    if (this.state.speed !== 1000/1.5 ) {
      this.setState({
        speed: 1000/1.5,
        changeSpeed: true,
      })
    }
  }

  handleOnHighSpeed = event => {
    if (this.state.speed !== 1000/2) {
      this.setState({
        speed: 1000/2,
        changeSpeed: true,
      })
    }
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

  changeInterval = () => {
    clearInterval(this.state.intervalID);

    let timerID = setInterval(() => this.tick(), this.state.speed)

    this.setState({
      changeSpeed: false,
      intervalID: timerID,
    })
  }

  componentDidMount() {
    let timerID = setInterval(() => this.tick(), this.state.speed)

    this.setState({
      intervalID: timerID,
    })
  }

  componentDidUpdate() {
    if (this.state.changeSpeed) {
      this.changeInterval()
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID)
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

        { this.state.timerOn !== false && this.state.minutes === 0 && this.state.seconds <= 20 ? (
          <div className="red-text">
            { this.state.seconds <= 10 ? (
              <div className="blinker">
                <TimerText
                  minutes={ this.fixString(this.state.minutes) }
                  seconds={ this.fixString(this.state.seconds) } 
                  timerOn={ this.state.timerOn }
                  showButton={ this.state.showButton }
                  handleOnPause={ this.handleOnPause }
                  handleOnResume={ this.handleOnResume }
                />
              </div>
            ) : (
              <TimerText
                minutes={ this.fixString(this.state.minutes) }
                seconds={ this.fixString(this.state.seconds) } 
                timerOn={ this.state.timerOn }
                showButton={ this.state.showButton }
                handleOnPause={ this.handleOnPause }
                handleOnResume={ this.handleOnResume }
              />
            )}
        </div> ) : (
        <div className="black-text">
          <TimerText
            minutes={ this.fixString(this.state.minutes) }
            seconds={ this.fixString(this.state.seconds) } 
            timerOn={ this.state.timerOn }
            showButton={ this.state.showButton }
            handleOnPause={ this.handleOnPause }
            handleOnResume={ this.handleOnResume }
          />
        </div>          

        )}

        {/* <TimerText
          minutes={ this.fixString(this.state.minutes) }
          seconds={ this.fixString(this.state.seconds) } 
          timerOn={ this.state.timerOn }
          showButton={ this.state.showButton }
          handleOnPause={ this.handleOnPause }
          handleOnResume={ this.handleOnResume }
        /> */}

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