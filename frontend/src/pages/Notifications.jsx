import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import Slider3 from "../components/Swiper";

const NotificationSlides = [
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg",
    title:
      "Call for Supply of Tally Prime Multiuser Software for accounting purposes in Finance Branch of UVCE",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
    title: "Call for Quatation for disposal of newspapers",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728140989/vangoghmuseum-s0109V1962-800_yhdl4y.jpg",
    title: "Call for Quotation of ERP",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728140989/vangoghmuseum-s0109V1962-800_yhdl4y.jpg",
    title: "Call for Public Relations Officer",
  },
];

const Notifications = () => {
  return (
    <>
      <Hero title={"Notifications"} />
      <NotificationSection>
        <div className="notification-section">
          <h3>Notifications</h3>
          <div className="arrows">
            <button className="highlight-button-prev">&lt;</button>
            <Slider3 slides={NotificationSlides} color={"black"} />
            <button className="highlight-button-next">&gt;</button>
          </div>
        </div>
      </NotificationSection>
      <Footer />
    </>
  );
};

export default Notifications;

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

const NotificationSection = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;

  .notification-section {
    max-width: 60%;
    margin: auto;

    @media (max-width: 450px) {
      max-width: 100%;
    }

    h3 {
      animation: ${Animation} 1000ms ease-in-out;
      text-align: center;
      font-size: 2rem;
      margin: 0 0 2rem 0;
    }

    .arrows {
      animation: ${Animation} 1000ms ease-in-out;
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
  }
`;
