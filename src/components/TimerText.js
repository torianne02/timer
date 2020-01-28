import React from 'react';
import { Card, Button } from 'reactstrap';

const TimerText = (props) =>
  <div className="t-text">
    <Card>
      <h1>
        { props.minutes } : { props.seconds } {' '}  
        <Button onClick={ props.handleOnClick }>Pause</Button>
      </h1>
    </Card>
  </div>

export default TimerText