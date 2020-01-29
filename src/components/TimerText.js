import React from 'react';
import { Card, Button } from 'reactstrap';

const TimerText = (props) =>
  <div className="timer-text">
    <Card>
      <h1>{ props.minutes } : { props.seconds }</h1>
      { props.showButton ? (
          props.timerOn ? <Button onClick={ props.handleOnPause }>Pause</Button> : <Button onClick={ props.handleOnResume }>Resume</Button>
        ) : (
          null
      )}
    </Card>
  </div>

export default TimerText