"use client";
import styled, { keyframes } from "styled-components";
import Slider3 from "./Swiper";
import { useSwiper } from "swiper/react";

const TestimonialsWrapper = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;

  color: white;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 0;
  }

  .arrows {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 69%;
    margin: 0 auto;

    button {
      height: 50px;
      width: 50px;
      margin: 0 2rem;
      padding: 1rem;
      border-radius: 50%;
      font-weight: bold;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }

    @media (max-width: 768px) {
      max-width: 100%;

      button {
        margin: 0 -5rem;
        display: none;
      }
    }
  }

  .profile-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 20px auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  .description {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const slides = [
  {
    url: "https://tse3.mm.bing.net/th?id=OIP.l0ai3Gemc84mnwkfBwywrAHaHa&pid=Api&P=0&h=180",
  },
  {
    url: "https://tse4.mm.bing.net/th?id=OIP.OYbzbbyzogwtriubL2pP0AHaHa&pid=Api&P=0&h=180",
  },
  {
    url: "https://tse3.mm.bing.net/th?id=OIP.l0ai3Gemc84mnwkfBwywrAHaHa&pid=Api&P=0&h=180",
  },
  {
    url: "https://tse1.mm.bing.net/th?id=OIP.q2YsgHsjuMWvKbVbnp-aJwHaHa&pid=Api&P=0&h=180",
  },
  {
    url: "https://tse3.mm.bing.net/th?id=OIP.l0ai3Gemc84mnwkfBwywrAHaHa&pid=Api&P=0&h=180",
  },
];

const Testimonials = () => {
  const swiper = useSwiper();

  return (
    <TestimonialsWrapper>
      <h2>What Our Student Say About Us</h2>
      <div className="arrows">
        <button className="swiper-button-prev">&lt;</button>
        <Slider3 slides={slides} />
        <button className="swiper-button-next">&gt;</button>
      </div>
      <h3 className="title">Carmen Hodkiewicz</h3>
      <p>Global Markets Engineer</p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa
        sit amet nisi blandit vehicula adipiscing elit.
      </p>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
