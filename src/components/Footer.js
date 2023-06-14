import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import "../styles/Footer.css"

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <Container className="footer-container" fluid>
        <Row>
          <Col className="footer-left">
            <h3>Revitalize</h3>
            <p>
              We are a platform connecting fitness experts with users, providing
              a seamless experience for those seeking professional guidance.
              Discover a diverse community of certified trainers who are
              passionate about helping you achieve your fitness goals. Unlock
              your full potential and embark on a transformative fitness journey
              with our dedicated experts.
            </p>
          </Col>
          <Col className="footer-middle">
            <h3>Reach Us</h3>
            <p>New York, NY 10012, US</p>
            <p>info@example.com</p>
            <p>+01 234 567 88</p>
            <p>+01 234 567 88</p>
          </Col>
          <Col className="footer-right">
            <h3>Opening Hours</h3>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Mon - Thur</th>
                  <th>8AM - 9PM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fri - Sat</td>
                  <td>8AM - 1AM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>9AM - 10PM</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <footer>{`Copyright © Revitalize ${year}`}</footer>
    </>
  );
}

export default Footer;
