import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import ProfileCard from '../components/ProfileCard';
import { trainerProfiles } from "../data/trainerProfiles.js";
import CarouselImgOne from "../assets/carousel-1.jpg"
import CarouselImgTwo from "../assets/carousel-2.jpg";
import CarouselImgThree from "../assets/carousel-3.jpg";
import "../styles/Trainers.css";

function Trainers() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImgOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Meet Your Trainer</h3>
              <p>
                Unlock your full potential with our elite team of fitness
                experts. Get ready to meet your trainer – a passionate guide who
                will inspire, motivate, and empower you on your journey to a
                stronger, healthier you
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImgTwo}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Plan your Routine or Session</h3>
              <p>
                Take charge of your fitness destiny. Create a personalized
                routine or session tailored to your goals, preferences, and
                schedule. With our intuitive planning tools, you can design a
                workout that fits perfectly into your life, helping you achieve
                your desired results.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImgThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Have a Revitalize-ing Workout </h3>
              <p>
                Elevate your fitness experience with our invigorating workouts.
                Our high-energy sessions are designed to revitalize your mind,
                body, and soul. Get ready to sweat, feel the burn, and leave
                each workout feeling refreshed, accomplished, and ready to
                conquer the world.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container className="feed">
          {trainerProfiles.map((data, key) => {
            return (
              <div className="CardContainer">
                <ProfileCard name={data.name} bio={data.bio} extendedbio={data.extendedbio} services={data.services} datetime={data.datetime} img={data.img} />
              </div>
            );
          })}
        </Container>
      </>
    );
}

export default Trainers;