import React from "react";
import "./people.css";
import Hero from "../components/hero";
import Slider3 from "../components/slider3";

const People = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          title: "People",
          subtitle: "",
        }}
      />
      <section className="people-first-section">
        <div className="first-section">
          <img
            src="https://res.cloudinary.com/duozomapm/image/upload/v1728099339/vangoghmuseum-s0097V1962v-800_qlcqlc.jpg"
            alt=""
            className="imageclass"
          />

          <div className="text_content">
            <h3>B Muthuraman</h3>
            <h4>Chairman, Governing Council</h4>
          </div>
        </div>

        <div className="first-section">
          <img
            src="https://res.cloudinary.com/duozomapm/image/upload/v1728099387/vangoghmuseum-s0065V1962-800_xjut4d.jpg"
            alt=""
            className="imageclass"
          />
          <div className="text_content">
            <h3>Dr Subhashish Tripathy</h3>
            <h4>Director</h4>
          </div>
        </div>
      </section>

      <section>
        <Slider3
          slides={[
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099355/vangoghmuseum-s0067V1962-800_sqfmi1.jpg",
              title: "Registrar",
              name: "Cedric Diggory",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099327/vangoghmuseum-s0068V1962v-800_c0kr9x.jpg",
              title: "Dean of Engineering",
              name: "Dr B M Rajprakash",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099347/vangoghmuseum-s0113V1962-800_zwr3t1.jpg",
              title: "Finance Officer",
              name: "Horace Slughorn",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099347/vangoghmuseum-s0113V1962-800_zwr3t1.jpg",
              title: "Finance Officer",
              name: "Severus Snape",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099355/vangoghmuseum-s0067V1962-800_sqfmi1.jpg",
              title: "Controller of Examinations",
              name: "Dr B P Harish",
            },

            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099382/vangoghmuseum-s0093V1962-800_rkhwip.jpg",
              title: "Dy Controller of Examinations",
              name: "Prof H S Veena",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099360/vangoghmuseum-s0061V1962-800_ayurad.jpg",
              title: "Dy Controller of Examinations",
              name: "Prof H S Veena",
            },
          ]}
        />
      </section>

      <section className="last-section">
        <h1>Staff</h1>
        <div className="people_main">
          <div className="right_item">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728099327/vangoghmuseum-s0068V1962v-800_c0kr9x.jpg"
              alt=""
            />
            <h1>XY</h1>
          </div>
          <div className="right_item">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728104256/vangoghmuseum-s0016V1962-800_bhvmdm.jpg"
              alt=""
            />
            <h1>Afaq Sharif</h1>
          </div>
          <div className="right_item">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728104262/vangoghmuseum-s0083V1962-800_qu3nav.jpg"
              alt=""
            />
            <h1>XX</h1>
          </div>
          <div className="right_item">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728099355/vangoghmuseum-s0067V1962-800_sqfmi1.jpg"
              alt=""
            />
            <h1>XY</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
