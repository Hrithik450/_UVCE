import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";

const Research = () => {
  return (
    <>
      <Hero title={"Research"} />
      <ResearchSection>
        <div className="reasearch-section">
          <div className="first_ele research_main">
            <h3>Startups from Digital Public Infra</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg"
              alt=""
            />
          </div>
          <div className="second_ele research_main">
            <h3>Energy Vaults - Gravitational Batteries</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg"
              alt=""
            />
          </div>
          <div className="third_ele research_main">
            <h3>Green Hydrogen Electrolyzers</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123585/vangoghmuseum-s0032V1962-800_sffk94.jpg"
              alt=""
            />
          </div>
          <div className="third_ele research_main">
            <h3>EMLS for Launching UAVs</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg"
              alt=""
            />
          </div>
          <div className="second_ele research_main">
            <h3>Hydroelectric Batteries using Bangalore's Lakes</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="last_image">
          <h3>Novel Innovations in Wave Energy</h3>
          <img
            src="https://res.cloudinary.com/duozomapm/image/upload/v1735698365/uvceImage1_aoy7nl.jpg"
            alt=""
          />
        </div>
      </ResearchSection>
      <Footer />
    </>
  );
};

export default Research;

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

const ResearchSection = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;

  @media (max-width: 450px) {
    padding: 0rem 20px;
  }

  .reasearch-section {
    gap: 1.5rem;
    margin: auto;
    height: 70vh;
    display: grid;
    padding-top: 3rem;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @media (max-width: 450px) {
      height: auto;
    }
  }

  .first_ele {
    animation: ${Animation} 1s ease-in-out;
    grid-column: span 3;
    grid-row: span 2;
  }

  .second_ele {
    animation: ${Animation} 1s ease-in-out;
    @media (max-width: 450px) {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
    }
    grid-column: span 3;
  }

  .third_ele {
    animation: ${Animation} 1s ease-in-out;
    @media (max-width: 450px) {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
    }
    grid-column: span 2;
  }

  .last_image {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.7);
    height: auto;
  }

  .research_main {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.7);
    height: auto;
  }

  .research_main h3,
  .last_image h3 {
    font-family: "Inconsolata", monospace;
    position: absolute;
    bottom: 2rem;
    left: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 800;
    z-index: 1;
  }

  .research_main img {
    height: 100%;
    width: 100%;
  }

  .research_main img:hover,
  .last_image img:hover {
    scale: 1.1;
    transition: 0.6s ease;
  }

  .last_image {
    margin: auto;
    height: 70vh;
    margin-block: 5rem;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.7);

    @media (max-width: 450px) {
      margin-block: 2rem;
      height: auto;
    }
  }

  .last_image img {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 450px) {
    .reasearch-section {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      column-gap: 0rem;
    }

    .research_main h3 {
      max-width: 90%;
      left: 1rem;
    }
  }
`;
