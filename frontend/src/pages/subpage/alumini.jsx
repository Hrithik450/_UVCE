import Hero from "../components/hero";
import Slider from "../components/slider";
import Slider3 from "../components/slider3";
import "./alumini.css";

import React from "react";

const Alumini = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728123608/vangoghmuseum-s0195V1962-800_cgu0zn.jpg"
        }
        data={{
          title: "Alumini",
          subtitle: "",
        }}
      />
    </>
  );
};

export default Alumini;
