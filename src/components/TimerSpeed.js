import React from 'react';
import { Row, Button } from 'reactstrap';

const TimerSpeed = (props) =>
  <div className="timer-speed">
    <Row>
      <h1>
        <Button onClick={ props.handleOnNormalSpeed }>1x</Button>{'  '}
        <Button onClick={ props.handleOnMediumSpeed }>1.5x</Button>{'  '}
        <Button onClick={ props.handleOnHighSpeed }>2x</Button>
      </h1>
    </Row>
  </div>

export default TimerSpeed