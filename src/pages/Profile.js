/**
 * @file Page Component for Trainer Profile. 
 * @author Manav Patel <mpate136@uottawa.ca>
 */

// React Imports
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Bootstrap Imports/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Tab from 'react-bootstrap/Tab';
import Tabs from "react-bootstrap/Tabs";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal"

// Custom Imports.
import DateButton from "../components/DateButton";
import ServiceButton from "../components/ServiceButton";
import TimeButton from "../components/TimeButton";

// Style Imports.
import "../styles/Profile.css";

function Profile() {
  // To get data for profile from trainers profile card.
  const location = useLocation();
  // Store Trainer data.
  const data = location.state;

  // useState for changing active tabs.
  const [activeKey, setActiveKey] = useState("service");
  // useState for setting time options based on date option.
  const [times, setTimes] = useState(null);
  const [service, setService] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();

  // Handle active tab change when directly clicking on tabs.
  const handleSelect = (key) => {
    setActiveKey(key);
  };

  // Change active tab to date after selecting service.
  function handleServiceClick(service) {
    setActiveKey("date");
    setService(service);
  }

  // Change active tab to time after selecting date.
  // Additionally also set time setTime based on date selected.
  function handleDateClick(times, date) {
    setTimes(times);
    setActiveKey("time");
    setDate(date);
  }

  // Change active tab to confirm tab after selecting time.
  function handleTimeClick(time) {
    setActiveKey("confirm");
    setTime(time);
  }

  function handleCancellation() {
    // Reset states to default values.
    setService(null);
    setDate(null);
    setTime(null);
    setTimes(null);
  }

  function handleConfirmation() {
    // State change to activate modal of acknowledgement.
    setShowModal(true);

    // Reset states to default values.
    setActiveKey("service");
    setService(null);
    setDate(null);
    setTime(null);
    setTimes(null);
  }

  function handleCloseModal() {
    setShowModal(false);
    navigateTo("/trainers")
  }

  function navigateTo(path) {
    navigate(path);
  }

  return (
    <>
      <Container className="profile">
        <Row>
          <Col>
            <Image src={data.img} fluid />
          </Col>
          <Col>
            <Row className="name">{data.name}</Row>
            <Row className="extended-bio">{data.extendedbio}</Row>
          </Col>
        </Row>
        <Row className="booking">
          <Tabs
            id="booking-tabs"
            defaultActiveKey="service"
            activeKey={activeKey}
            className="mb-3"
            justify
            onSelect={handleSelect}
          >
            <Tab eventKey="service" title="Service">
              {data.services.map((data, key) => {
                return (
                  <ServiceButton
                    data={data}
                    change={handleServiceClick}
                    select={service === data ? true : false}
                  />
                );
              })}
            </Tab>
            <Tab eventKey="date" title="Date">
              {data.datetime.map((data, key) => {
                return (
                  <DateButton
                    date={data.date}
                    times={data.time}
                    change={handleDateClick}
                    select={date === data.date ? true : false}
                  />
                );
              })}
            </Tab>
            <Tab eventKey="time" title="Time">
              {times !== null ? (
                times.map((data, key) => {
                  return (
                    <TimeButton
                      variant="primary"
                      time={data}
                      change={handleTimeClick}
                      select={time === data ? true : false}
                    />
                  );
                })
              ) : (
                <Alert key="warning" variant="warning">
                  Please go back and select a Date!
                </Alert>
              )}
            </Tab>
            <Tab eventKey="confirm" title="Confirm">
              {/* TODO: Make confirmation tab content and modal acknowledgement.*/}
              {service && date && time ? (
                <>
                  <Card body className="confirm-card">
                    {`Are you sure that you want to book the ${service} session on the ${date} at ${time} ?`}
                    <Form className="confirm-form">
                      <Row className="initials">
                        <Col>
                          <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Last name" />
                        </Col>
                      </Row>
                      <Row className="emailInput">
                        <Form.Control type="email" placeholder="Email" />
                      </Row>
                      <Row className="form-buttons">
                        <Button
                          className="cancel"
                          variant="danger"
                          onClick={handleCancellation}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="confirm"
                          variant="success"
                          onClick={handleConfirmation}
                        >
                          Confirm
                        </Button>
                      </Row>
                    </Form>
                  </Card>
                </>
              ) : (
                <Alert
                  className="confirm-alert"
                  key="warning"
                  variant="warning"
                >
                  Please go back and Make your Booking Selection!
                </Alert>
              )}
            </Tab>
          </Tabs>
        </Row>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Booking Successful</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Woohoo, Your workout session has been confirmed! You should receive
            an email soon with more details. Thank you!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleCloseModal}>
              Home
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Profile;
