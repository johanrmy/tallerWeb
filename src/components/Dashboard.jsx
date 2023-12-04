import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Tabla from './Table';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
    const { entidad, mostrarBoton } = props;

    return (
        <>
            <Container>
                <Row>
                    <Col sm={8} className='py-4 d-flex justify-content-start'>
                        <h1>{entidad}</h1>
                    </Col>
                    {mostrarBoton && (
                        <Col sm={4} className='py-4 d-flex justify-content-end'>
                            <Link to="form">
                                <Button variant="success">Registrar</Button>
                            </Link>
                        </Col>
                    )}
                </Row>
                <Row>
                    <Col sm={12}>
                        <Tabla />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;
