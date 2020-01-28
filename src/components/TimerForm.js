import React from 'react';
import { Container, Button, Form, Label, Input } from 'reactstrap';

const TimerForm = props => {
  return (
    <Container className="form">
      <Form onSubmit={ props.handleOnSubmit }>
        <Label for="startTime">Countdown: </Label>
        <Input type="text"
          name="startTime"
          onChange={ props.handleOnChange }
          value={ props.startTime } />
        <Button>Start</Button>
      </Form>
    </Container>
  )
}

export default TimerForm