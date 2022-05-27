import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './register.css'
import { useDispatch, useSelector } from 'react-redux';
import { registerInitiate } from '../Actions/register.action';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const {
        register,
        handleSubmit,
    } = useForm();

    const { currentUser } = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        if (currentUser) {
            navigate("/login");
        }
    }, [currentUser,navigate])

    const onSubmit = (data) => {
        dispatch(registerInitiate(data))
    }


    return (
        <div className="wrapper">
            <div className="outerDiv">
                <div>
                    <h1> Register</h1>
                </div>
                <div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
                        <Form.Group className="mb-3  fistName" controlId="formBasicEmail">
                            {/* <Form.Label>Name</Form.Label> */}
                            <Form.Control className="mr-3"
                                type="text"
                                placeholder="First Name"
                                {...register("first_name", {
                                    required: true
                                })} />
                            <Form.Control
                                type="text" async
                                placeholder="Last Name"
                                {...register("last_name", {
                                    required: "last name"
                                })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: true
                                })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: true
                                })} />
                            <Form.Control className="mt-2"
                                type="password"
                                placeholder="Confirm Password"
                                {...register("Confirm_Password", {
                                    required: true
                                })} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register Now
                        </Button>
                    </Form>
                </div>
            </div>
        </div>

    )
}

export default Register;