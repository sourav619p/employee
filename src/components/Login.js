import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'

function Login() {
  return (
    <Form className='center p-5 border border-3 border-primary rounded-top rounded-bottom'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>User Name</Form.Label>
      <Form.Control type="text" placeholder="Enter username" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Login
    </Button>
  </Form>
  )
}

export default Login
