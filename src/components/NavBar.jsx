import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarSystem(props) {
  return (
    <>
    <header>
        <Row>
            <Col sm={12}>
                <Navbar bg="light" data-bs-theme="light">
                    <Navbar.Brand href="/">Aerolínea</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/vuelo">Vuelos</Nav.Link>
                        <Nav.Link href="/avion">Aviones</Nav.Link>
                        <Nav.Link href="/tripulacion">Tripulación</Nav.Link>
                        <Nav.Link href="/piloto">Piloto</Nav.Link>
                    </Nav>
                </Navbar>
            </Col>
        </Row>
    </header>
    </>
  );
}

export default NavBarSystem;