import Hero from "../components/hero";
import Slider3 from "../components/slider3";
import "./careers.css";

import React from "react";

const Careers = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg"
        }
        data={{
          title: "Careers",
          subtitle: "",
        }}
      />
    </>
  );
};

export default Careers;
