import React from 'react';
import { Card } from 'reactstrap';

const TimerText = (props) =>
  <div className="t-text">
    <Card>
      <h1>{ props.minutes } : { props.seconds }</h1>
    </Card>
  </div>

export default TimerText