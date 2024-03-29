import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default () => (
    <div className="wrapper">
        <div className="header">
            <h3>Contato</h3>
            <hr></hr>
        </div>
        <div id="form-container">
            <style>
                {`
                    .btn-custom {
                        background-color: #00b2f1;
                        color: #fff;
                    }

                    .btn-custom:hover {
                        background-color: #43ccfd;
                        transition: 0.5s;
                        color: #fff;
                    }
                `}
            </style>
            <Form>
                <Row>
                    <Col md="6">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control placeholder="Digite seu nome" />
                        </Form.Group>
                    </Col>
                    <Col md="6">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu e-mail" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="Mensagem" rows="6" />
                </Form.Group>

                <Row className="justify-content-end pr-3">
                    <Button size="lg" variant="custom" type="submit">Enviar</Button>
                </Row>
            </Form>
        </div>
    </div>
);