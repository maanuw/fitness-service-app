import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

import "../styles/ProfileCard.css";

function ProfileCard({name, bio, extendedbio, services, datetime, img}) {
  let navigate = useNavigate();
  const data = {name: name, bio: bio, extendedbio: extendedbio, services: services, datetime: datetime, img: img}
  
  const handleClick = () => {
    navigate("/profile", {state: data});
  }
    return (
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={6} md={4}>
              <Image src={img} thumbnail />
            </Col>
            <Col xs={8} md={6}>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {bio}
              </Card.Text>
              <Button variant="primary" onClick={handleClick}>Book Session</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
}

export default ProfileCard;