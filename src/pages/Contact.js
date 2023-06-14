import React from "react"
import { Container } from "react-bootstrap";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "../styles/Contact.css"

function Contact() {
    return (
      <div className="pg-background">
        <Container>
          <Row>
            <Col className="form-container">
              <Card className="form-card">
                <Form>
                  <Row>
                    <Col>
                      <div className="contact-form-title"><b>Contact Us!</b></div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="fn-col">
                      <Form.Control placeholder="First name" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ln-col">
                      <Form.Control placeholder="Last name" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="e-col">
                      <Form.Control placeholder="Email" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="com-col">
                      <Form.Control placeholder="Comments" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="but-col">
                      <Button variant="outline-success">Send</Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Contact;