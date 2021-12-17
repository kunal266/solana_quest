import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home.js";
import PollingStation from "./Components/PollingStation.js";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import getConfig from './config'
import NewPoll from './Components/NewPoll.js';
const { networkId } = getConfig(process .env.NODE_ENV || 'development')

export default function App() {


  return (
    
  <Router>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Voting Near</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"></Nav>
          <Nav>
            <Nav.Link href="/NewPoll">New Poll</Nav.Link>
            <Nav.Link onClick={window.accountId === '' ? login : logout}>{window.accountId === "" ? "login" : window.accountId}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/NewPoll' element={< NewPoll />}></Route>
    <Route exact path='/PollingStation' element={< PollingStation />}>
      </Route>
    </Routes>
  </Router>)
}
