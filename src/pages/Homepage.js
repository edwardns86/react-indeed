import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

import {
    Row,
    Col,
    Form,
    InputGroup,
    Container,
    Jumbotron,
    Button,
    Image,
} from "react-bootstrap";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Homepage() {

    const user = useSelector(state => state.email)

    return (
        <>

            <Container fluid>
                <h1>{user}</h1>
                <Image src="https://picsum.photos/id/179/1440/500" fluid />


                <Jumbotron fluid style={{ backgroundColor: '#16A2B8', backgroundSize: 'cover', color: 'white' }} >
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                <Row style={{ color: '#16A2B8', backgroundColor: 'white', padding: '20px' }}>
                    <Col>
                        <FontAwesomeIcon icon={faEnvelope}
                            color="#16A2B8"
                            size="4x"
                        />
                        <h1> Sign Up For Email Updates</h1>
                        <Form noValidate style={{ backgroundColor: 'white', alignItems: 'center', marginRight: 'auto', marginLeft: 'auto' }}>
                            {/* validated={validated} onSubmit={handleSubmit} */}
                            <Form.Row>
                                <Form.Group as={Col} controlId="validationCustomUsername">
                                    <Form.Label></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        // defaultValue={candidate.email}
                                        // onChange={(e) => setCandidate({ ...candidate, email: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid email.
                                         </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
