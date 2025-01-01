"use client";
import styled, { keyframes } from "styled-components";
import Slider3 from "./Swiper";

const Animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const HighlightsWrapper = styled.section`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
  padding: 0rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;

  color: black;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 0;
  }

  .arrows {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 450px) {
      max-width: 69%;
    }

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
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1735698363/uvce_1_vjbb83.jpg",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1735698363/uvce_1_vjbb83.jpg",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1735698363/uvce_1_vjbb83.jpg",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1735698363/uvce_1_vjbb83.jpg",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1735698363/uvce_1_vjbb83.jpg",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1735698363/uvce_1_vjbb83.jpg",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1735698363/uvce_1_vjbb83.jpg",
  },
];

const Highlights = () => {
  return (
    <HighlightsWrapper>
      <h2>Highlights</h2>
      <div className="arrows">
        <button className="swiper-button-prev">&lt;</button>
        <Slider3 slides={slides} color={"black"} />
        <button className="swiper-button-next">&gt;</button>
      </div>
    </HighlightsWrapper>
  );
};

export default Highlights;
