import React from 'react';
import { Card, Button } from 'reactstrap';

const TimerText = (props) =>
  <div className="timer-text">
    <Card>
      {/* { props.timerOn === false && props.minutes === 0 && props.seconds <= 10 ? (
        <h1 style={{color: '#F00'}}>
          { props.minutes } : { props.seconds } {' '}  
        </h1> 
      ) : (
        <h1 style={{color: 'black'}}>
          { props.minutes } : { props.seconds } {' '}  
        </h1>
      )} */}
      <h1>{ props.minutes } : { props.seconds }</h1>
      { props.showButton ? (
          props.timerOn ? <Button onClick={ props.handleOnPause }>Pause</Button> : <Button onClick={ props.handleOnResume }>Resume</Button>
        ) : (
          null
      )}
    </Card>
  </div>

export default TimerText