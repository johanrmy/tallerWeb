import Button from 'react-bootstrap/Button';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';

function Formulario(props) {
  return (
    <>
    <Container>
        <Row>
            <Col sm={12}>
                <h1>Registrar {props.title}</h1>
            </Col>
        </Row>
    </Container>
    <Form className="p-4 border rounded" bg="light" >
      <Form.Group className="mb-3" controlId="text1">
        <Form.Label ><h6>Nombre</h6></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="text1">
        <Form.Label><h6>Example textarea</h6></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="text1">
        <Form.Label ><h6>Email address</h6></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label><h6>Disabled select menu</h6></Form.Label>
        <Form.Select>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><h6>País</h6></Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><h6>Example textarea</h6></Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
  
      
      <Button variant="primary" type="submit">
        Guardar
      </Button>
      <br></br>
      <Button variant="secondary" type="cancelar">
        Eliminar
      </Button>
    </Form>
    </>
  );
}

export default Formulario;