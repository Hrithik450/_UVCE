import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import Slider3 from "../components/Swiper";
import Slider from "../components/Swiper2";

const SebSlides = [
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
];

const AboutDataUrls = [
  "https://res.cloudinary.com/duozomapm/image/upload/v1735698365/uvceImage1_aoy7nl.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728188614/vangoghmuseum-s0051V1962-800_gskvns.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728188556/vangoghmuseum-s0038V1962-800_bu4vsc.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728123578/vangoghmuseum-s0047V1962-800_gnefn4.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728123585/vangoghmuseum-s0032V1962-800_sffk94.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728188596/vangoghmuseum-s0028V1962-800_vpp4u0.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728123631/vangoghmuseum-s0055V1962-800_oqy5hq.jpg",
];

const AboutGrid = [
  {
    Class: "first_ele",
    title: "Industremia",
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728125228/vangoghmuseum-s0020V1962-800_z0099q.jpg",
  },
  {
    Class: "second_ele",
    title: "TA",
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg",
  },
  {
    Class: "third_ele",
    title: "Website for UVCE",
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123657/vangoghmuseum-s0086V1962-800_jupufa.jpg",
  },
  {
    Class: "third_ele",
    title: "Our Projects",
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg",
  },
  {
    Class: "second_ele",
    title: "Roles",
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
  },
];

const About = () => {
  return (
    <>
      <Hero title={"SEB"} desc={"Student Excecutive Body"} />
      <AboutSection>
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
                The University of Visvesvaraya College of Engineering (UVCE) is
                a premier institution of engineering in Bangalore. UVCE has been
                granted the status of State Eminence by the UVCE Act 2021 which
                was passed by the state legislature of Karnataka. UVCE was
                founded in the year 1917 by the Dewan of Mysore Sir.M
                Visvesvaraya K.C.I.E during the reign of Shri Krishnaraja
                Wodeyar IV, the Maharaja of Mysore. UVCE is the first college of
                engineering to be established in Karnataka and we are the fifth
                oldest college of engineering in India.
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
          <div className="about-section">
            {AboutGrid &&
              AboutGrid.map((item, idx) => (
                <div
                  className={`${item.Class} about_main`}
                  key={`${item}-${idx}`}
                >
                  <h3>{item.title}</h3>
                  <img src={item.url} alt="Image" />
                </div>
              ))}
          </div>
        </section>

        <section className="about-main3-section">
          <div className="arrows">
            <button className="highlight-button-prev">&lt;</button>
            <Slider3 slides={SebSlides} color={"black"} />
            <button className="highlight-button-next">&gt;</button>
          </div>
        </section>

        <section>
          <div className="about-carousel-section">
            <Slider dataURLS={AboutDataUrls} />
          </div>
        </section>
      </AboutSection>
      <Footer />
    </>
  );
};

export default About;

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

const AboutSection = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;

  .about-section-1 {
    margin: auto;
    display: flex;
    gap: 2rem;
  }

  .about-section {
    margin: auto;
    padding-top: 3rem;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .first_ele {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
    grid-column: span 3;
    grid-row: span 2;
  }

  .second_ele {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
    grid-column: span 3;
  }

  .third_ele {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
    grid-column: span 2;
  }

  .about_main,
  .last_image {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.7);
  }

  .about_main h3,
  .last_image h3 {
    font-family: "Inconsolata", monospace;
    position: absolute;
    bottom: 2rem;
    left: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 800;
    z-index: 1;
  }

  .about_main img {
    height: 100%;
    width: 100%;
  }

  .about_main img:hover,
  .last_image img:hover {
    scale: 1.1;
    transition: 0.6s ease;
  }

  .last_image {
    margin: auto;
    margin-block: 5rem;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.7);
  }

  .last_image img {
    width: 100%;
  }

  @media (max-width: 450px) {
    .about-section {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      max-width: 100%;
      column-gap: 0rem;
    }

    .about_main h3 {
      max-width: 90%;
      left: 1rem;
    }

    .last_image {
      max-width: 90%;
    }
  }

  @media (min-width: 1024px) {
    .about-section {
      max-height: 75vh;
    }
  }

  .about-main3-section {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
    border-block: 1px solid rgba(0, 0, 0, 0.3);
    margin: 2rem auto;
    padding: 3rem 0;

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
  }

  .about-first-image,
  .about-last-image {
    animation: ${Animation} 1000ms ease-in-out;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.7);
    flex-basis: 50%;
  }

  .about-last-image {
    @media (max-width: 450px) {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
    }
  }

  .about-last-image img,
  .about-first-image img {
    width: 100%;
    height: 100%;
  }

  .about-first-image img:hover,
  .about-last-image img:hover {
    scale: 1.1;
    transition: 0.3s ease;
  }

  .about-text-content {
    flex-basis: 150%;

    h4 {
      animation: ${Animation} 1000ms ease-in-out;
      margin-block: 1rem;
      font-size: 2rem;
    }

    p {
      animation: ${Animation} 1000ms ease-in-out;
      line-height: 1.5rem;
      font-size: 1.2rem;
    }

    @media (max-width: 450px) {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
    }
  }

  .about-carousel-section {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
    max-width: 80%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.7);

    @media (max-width: 450px) {
      max-width: 100%;
    }
  }

  @media (max-width: 912px) {
    .about-section-1 {
      flex-direction: column;
    }
  }
`;
