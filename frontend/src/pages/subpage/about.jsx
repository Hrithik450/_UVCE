import React from "react";
import Hero from "../components/hero";
import "./about.css";
import Slider3 from "../components/slider3";
import Slider from "../components/slider";

const About = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          title: "SEB UVCE",
          subtitle: "Student Executive Body",
          subtitle_2: "University of Visvesvaraya College of Engineering",
        }}
      />

      <section>
        <div className="about-section-1">
          <div className="about-first-image">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123585/vangoghmuseum-s0032V1962-800_sffk94.jpg"
              alt=""
            />
          </div>
          <div className="about-text-content">
            <h4>About Us</h4>
            <p>
              The University of Visvesvaraya College of Engineering (UVCE) is a
              premier institution of engineering in Bangalore. UVCE has been
              granted the status of State Eminence by the UVCE Act 2021 which
              was passed by the state legislature of Karnataka. UVCE was founded
              in the year 1917 by the Dewan of Mysore Sir.M Visvesvaraya K.C.I.E
              during the reign of Shri Krishnaraja Wodeyar IV, the Maharaja of
              Mysore. UVCE is the first college of engineering to be established
              in Karnataka and we are the fifth oldest college of engineering in
              India.
            </p>
          </div>
          <div className="about-last-image">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728141070/vangoghmuseum-s0102V1962-800_ofsdqr.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="about-main-section">
        <div className="reasearch-section">
          <div className="first_ele research_main">
            <h3>Industremia</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728125228/vangoghmuseum-s0020V1962-800_z0099q.jpg"
              alt=""
            />
          </div>
          <div className="second_ele research_main">
            <h3>TA</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg"
              alt=""
            />
          </div>
          <div className="third_ele research_main">
            <h3>Website for UVCE</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123657/vangoghmuseum-s0086V1962-800_jupufa.jpg"
              alt=""
            />
          </div>
          <div className="third_ele research_main">
            <h3>Our Projects</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg"
              alt=""
            />
          </div>
          <div className="second_ele research_main">
            <h3>Our Projects</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="about-main3-section">
        <Slider3
          slides={[
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099355/vangoghmuseum-s0067V1962-800_sqfmi1.jpg",
              title: "Faculty Advisor",
              name: "Dr K P Guruswamy",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099327/vangoghmuseum-s0068V1962v-800_c0kr9x.jpg",
              title: "Chairman",
              name: "Rahul S R",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099347/vangoghmuseum-s0113V1962-800_zwr3t1.jpg",
              title: "Vice Chairman",
              name: "Vaihhav Burli",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099347/vangoghmuseum-s0113V1962-800_zwr3t1.jpg",
              title: "Secretary",
              name: "Manjunath B",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099355/vangoghmuseum-s0067V1962-800_sqfmi1.jpg",
              title: "Lead, Finance",
              name: "Sanjana C K",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099382/vangoghmuseum-s0093V1962-800_rkhwip.jpg",
              title: "Lead , Relations & Initiatives",
              name: "Samyuktha Pasumarthi",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099360/vangoghmuseum-s0061V1962-800_ayurad.jpg",
              title: "Lead, Marketing",
              name: "Nischith",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099360/vangoghmuseum-s0061V1962-800_ayurad.jpg",
              title: "Lead, Design",
              name: "Varsha Shubhashri",
            },
          ]}
        />
      </section>

      <section>
        <div className="about-carousel-section">
          <Slider
            dataURLS={[
              "https://res.cloudinary.com/duozomapm/image/upload/v1728188542/vangoghmuseum-s0104V1962-800_klzfxe.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728188614/vangoghmuseum-s0051V1962-800_gskvns.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728188556/vangoghmuseum-s0038V1962-800_bu4vsc.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728123578/vangoghmuseum-s0047V1962-800_gnefn4.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728123585/vangoghmuseum-s0032V1962-800_sffk94.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728188596/vangoghmuseum-s0028V1962-800_vpp4u0.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728123631/vangoghmuseum-s0055V1962-800_oqy5hq.jpg",
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default About;
