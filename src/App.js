import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import LogIn from './pages/LogIn'
import HomePage from './pages/Homepage'
import Company from './pages/Company'
import Candidates from './pages/Candidates'
import CandidateEditPage from './pages/CandidateEditPage'
import NewCandidates from './pages/NewCandidates'

import { useSelector } from 'react-redux'

import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  NavItem
} from "react-bootstrap";



import { LinkContainer } from 'react-router-bootstrap'


function App() {

  const user = useSelector(state => state.email)

  return (
    <div className="App">
      <Navbar bg="primary" expand='lg'>
        <Navbar.Brand >InWork</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">
            <LinkContainer to="/home" exact style={{ margin: '10px', onHover: "pointer" }}>
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/candidates" exact style={{ margin: '10px', onHover: "pointer" }}>
              <Nav.Link >Candidates</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/" exact style={{ margin: '10px', onHover: "pointer" }}>
              <Nav.Link >Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/company" exact style={{ margin: '10px', onHover: "pointer" }}>
              <Nav.Link >Company</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/newcandidates" exact style={{ margin: '10px', onHover: "pointer" }}>
              <Nav.Link >New Candidates</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder={`Hello ${user}`} className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Route path="/" exact component={LogIn} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/company" exact component={Company} />
      <Route path="/candidates" exact component={Candidates} />
      <Route path="/newcandidates" exact component={NewCandidates} />
      <Route path="/candidates/:id" exact component={CandidateEditPage} />

    </div>
  );
}

export default App;
