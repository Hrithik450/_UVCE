import Hero from "../components/hero";
import "./research.css";
import React from "react";

const Research = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          title: "Research",
          subtitle: "",
        }}
      />

      <section>
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
            src="https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Research;
