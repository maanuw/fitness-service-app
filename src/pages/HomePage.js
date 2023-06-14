/**
 * @file Homepage
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import '../styles/HomePage.css';

function HomePage () {
  let navigate = useNavigate();

  function navigateTo() {
    navigate('/trainers');
  }

  function navigateContact() {
    navigate('/contact');
  }

    return (
      <Container fluid="lg">
        <Row>
          <Col className="TextContainer">
            <Container className="HeroText">
              <h1>
                <b>Revitalize:</b>
              </h1>
              <h3>
                <b>Your Fitness Journey.</b>
              </h3>
              <h6>
                Are you tired of looking for the right trainer and session?
                Choose one of our trainers and their specialities. Book whenever
                you want, whatever you want, whomever you want.
              </h6>
              <Button variant="outline-light" onClick={navigateContact}>
                Learn More
              </Button>{" "}
              <Button variant="outline-light" onClick={navigateTo}>
                Our Trainers
              </Button>{" "}
            </Container>
          </Col>
          <Col className="HeroImage"></Col>
        </Row>
      </Container>
    );
}

export default HomePage;