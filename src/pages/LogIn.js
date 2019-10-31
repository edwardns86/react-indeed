import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


import {
    Row,
    Col,
    Form,
    Container,
    Button,

} from "react-bootstrap";

import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'

export default function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState({})
    let history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        setCurrentUser({ email, password })
        dispatch({ type:'SIGN_IN', payload:{email, password}})
        history.push('/home')

    }
    console.log('current User', currentUser)
    return (

        <Container fluid>
            <Row style={{ backgroundColor: '#0069D9' }}>
                <Col className="signincol">
                    <Form
                        onSubmit={onSubmit}
                        className="signinform">
                        <Form.Group

                            controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button

                            variant="primary"
                            type="submit"
                            block>
                            Log In
                            </Button>
                    </Form>
                </Col>
            </Row>
        </Container>



    )
}
