import React from 'react';
import { Container, Button, Form, Label, Input } from 'reactstrap';

const TimerForm = props => {
  return (
    <Container className="form">
      <Form onStart={ props.handleOnStart }>
        <Label for="start-time">Countdown: </Label>
        <Input type="text"
          name="start-time"
          onChange={ props.handleOnChange }
          value={ props.startTime } />
        <Button>Start</Button>
      </Form>
    </Container>
  )
}

export default TimerForm