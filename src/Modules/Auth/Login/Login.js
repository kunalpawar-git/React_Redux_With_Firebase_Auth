import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import emailRegex from 'email-regex';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../Actions/login.action';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const onSubmit = (data) => {
    if (!data.email || !data.password) {
      return;
    }
    dispatch(loginAction(data));
  }

  return (
    <div className="outerDiv1">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register('email', {
              required: true,
              pattern: {
                value: emailRegex,
                message: "Please enter valid email",
              },
            })} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('password', {
              required: true,

            })} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Link to="/Register"><p>Don't have an account</p></Link>
      </Form>
    </div>
  )
}

export default Login;