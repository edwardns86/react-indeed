import React, { useState, useEffect } from 'react'

import {
    Row,
    Col,
    Form,
    Container,
    Button,
    InputGroup,
} from "react-bootstrap";

import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    useParams
} from 'react-router-dom'

export default function CandidateEditPage() {
    const [candidate, setCandidate] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const getCandidate = async () => {
            const response = await fetch(`http://localhost:3001/candidates/` + id)
            const data = await response.json()
            setCandidate(data)
        }
        getCandidate()
    }, [])

    // function FormExample() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = async event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        const config = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(candidate)
        }

        const response = await fetch(`http://localhost:3001/candidates/` + id, config)

    };


    return (
        <Container fluid >
            <Row style={{ color: '#16A2B8', backgroundColor: 'white', padding: '20px' }}>
                <Col>
                    <FontAwesomeIcon icon={faUserEdit}
                        color="#16A2B8"
                        size="4x"
                    />
                    <h1> Update Candidate Profile</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet tempor augue. Etiam erat quam, pellentesque at orci vel, gravida tempus eros. Nam vulputate est mauris. Aenean mollis enim in augue sagittis, at vestibulum nisi maximus. Nulla massa est, convallis viverra lacus in, aliquam molestie velit. Duis ultrices nunc quis tellus efficitur tempor. Nam sem justo, pulvinar bibendum dolor vel, placerat ultrices massa. Etiam vitae tincidunt ligula, nec consectetur magna.</p>
                </Col>
            </Row>

            <Row style={{ textAlign: 'left' ,color: 'white', backgroundColor: '#16A2B8', padding: '20px' }}>
                <Col>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue={candidate.first_name}
                                    onChange={(e) => setCandidate({ ...candidate, first_name: e.target.value })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue={candidate.last_name}
                                    onChange={(e) => setCandidate({ ...candidate, last_name: e.target.value })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="Email"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        defaultValue={candidate.email}
                                        onChange={(e) => setCandidate({ ...candidate, email: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                         </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Address </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Address"
                                    required defaultValue={candidate.address}
                                    onChange={(e) => setCandidate({ ...candidate, address: e.target.value })}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid address.
                                    </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>PostCode</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="e.g. NW10 6NT"
                                    required defaultValue={candidate.postal_code}
                                    onChange={(e) => setCandidate({ ...candidate, postal_code: e.target.value })}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid postal code.
                                     </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" e.g. Male"
                                    required defaultValue={candidate.gender}
                                    onChange={(e) => setCandidate({ ...candidate, gender: e.target.value })}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid gender.
                                     </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>University </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="e.g. Harvard"
                                    required defaultValue={candidate.university}
                                    onChange={(e) => setCandidate({ ...candidate, university: e.target.value })}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid university.
                                    </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>Company</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" e.g. Google"
                                    required defaultValue={candidate.company_name}
                                    onChange={(e) => setCandidate({ ...candidate, company_name: e.target.value })}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid current employer.
                                     </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>Skills</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" e.g. Google"
                                    required defaultValue={candidate.skills}
                                    onChange={(e) => setCandidate({ ...candidate, skills: e.target.value })}

                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid skill.
                                     </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <Button type="submit" bg="info" variant="outline-light" style={{ backgroundColor: '#16A2B8', }} >Submit form</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}

