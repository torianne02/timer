import React from 'react';
import { Card, Button } from 'reactstrap';

const TimerText = (props) =>
  <div className="t-text">
    <Card>
      <h1>
        { props.minutes } : { props.seconds } {' '}  
        { props.showButton ? (
          props.timerOn ? <Button onClick={ props.handleOnPause }>Pause</Button> : <Button onClick={ props.handleOnResume }>Resume</Button>
        ) : (
          null
        )}
      </h1>
    </Card>
  </div>

export default TimerText