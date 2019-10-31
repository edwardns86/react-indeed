import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Row,
    Col,
    Card,
    ListGroup,
    Container,
    ListGroupItem,
    Image,
    CardColumns,
    Button,
    Nav,
    NavDropdown

} from "react-bootstrap";

import { faSearchDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LinkContainer } from 'react-router-bootstrap'

export default function Candidates() {
    const [candidates, setCandidates] = useState([]);


    const getCandidates = async () => {
        const response = await fetch("http://localhost:3001/candidates");
        const data = await response.json();
        setCandidates(data);
    };

    useEffect(() => {
        getCandidates();
    }, []);

    const onDeleteCandidate = async (e, id) => {
        e.preventDefault();
        const config = {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        };
        const go = await fetch(`http://localhost:3001/candidates/${id}`, config);
        const hi = await go.json()
        console.log('dkdewjd', hi)
        const newCandidates = candidates.filter(candidates => candidates.id !== id);
        setCandidates(newCandidates)
        console.log('these are the new candidates', newCandidates)

    }


    return (

        <Container fluid>
            <Row style={{ color: 'white', backgroundColor: '#16A2B8', padding: '20px' }}>
                <Col>
                    <h2>Teamwork Makes The Dream Work</h2>
                    <FontAwesomeIcon
                        icon={faSearchDollar}
                        color="white"
                        size="4x"
                    />
                </Col>
            </Row>
            <Row className="cardrow" d-flex bd-highlight flex-wrap>
                {/* <CardColumns  p-2 flex-fill bd-highlight  > */}
                {candidates.map(candidate => {

                    return (
                        // <Col key={candidate.id}>
                        <Card className="cardstyle" bg="info" key={candidate.id} text="white" >
                            <div className="card-image-container">
                                <Image className="candidate-img img" style={{ margin: '10px', width: "100px", height: "100px" }} roundedCircle variant="top" src={(`https://picsum.photos/id/${candidate.id}/200/300`)} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    {candidate.first_name + " " + candidate.last_name}
                                </Card.Title>

                            </Card.Body>
                            <ListGroup className="list-group-flush" style={{ color: '#16A2B8' }}>
                                <ListGroupItem>{candidate.address} {" " + candidate.postal_code && candidate.postal_code}</ListGroupItem>
                                <ListGroupItem>{candidate.email}</ListGroupItem>
                                <ListGroupItem>{"University: " + candidate.university}</ListGroupItem>
                                <ListGroupItem>{"Current company: " + candidate.company_name}</ListGroupItem>
                                <ListGroupItem>{"Top Skills: " + candidate.skills}</ListGroupItem>
                                <ListGroupItem>{"Gender: " + candidate.gender}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <LinkContainer to={`candidates/${candidate.id}`} exact style={{ margin: '10px', onHover: "pointer" }} >
                                    <Button variant="outline-light" >Edit</Button>
                                </LinkContainer>

                                <Button variant="outline-light" onClick={(e) => onDeleteCandidate(e, candidate.id)}>Delete</Button>

                            </Card.Body>
                        </Card>
                        // </Col>
                    )

                }

                )}
                {/* </CardColumns> */}
            </Row>
        </Container>
    )
}
