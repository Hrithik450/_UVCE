import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import Slider3 from "../components/Swiper";
import Slider from "../components/Swiper2";

const CarouselDataURLS = [
  "https://res.cloudinary.com/duozomapm/image/upload/v1728141010/vangoghmuseum-s0144V1962-800_bcicci.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728141036/vangoghmuseum-s0031V1962-800_oladul.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728140989/vangoghmuseum-s0109V1962-800_yhdl4y.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728141070/vangoghmuseum-s0102V1962-800_ofsdqr.jpg",
];

const ResourcesSlides = [
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg",
    title: "Inflibnet",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
    title: "Old Question Papers",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728140989/vangoghmuseum-s0109V1962-800_yhdl4y.jpg",
    title: "E-Newspapers",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728141036/vangoghmuseum-s0031V1962-800_oladul.jpg",
    title: "E-Journals",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728141010/vangoghmuseum-s0144V1962-800_bcicci.jpg",
    title: "Publications",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728139435/Screenshot_2024-09-23_234428_cl3fxl.jpg",
    title: "E-Books",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728139460/Roses_-_The_Metropolitan_Museum_of_Art_xltmy4.jpg",
    title: "Library Subscriptions",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728185750/vangoghmuseum-s0025V1962-800_yptwqa.jpg",
    title: "Plagiarism Tool",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
    title: "Memberships",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123585/vangoghmuseum-s0032V1962-800_sffk94.jpg",
    title: "Reprography",
  },
];

const LibrarianSlides = [
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728188136/vangoghmuseum-s0022V1962-800_tvrlfm.jpg",
    title: "W",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728104256/vangoghmuseum-s0016V1962-800_bhvmdm.jpg",
    title: "X",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099339/vangoghmuseum-s0097V1962v-800_qlcqlc.jpg",
    title: "Y",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099387/vangoghmuseum-s0065V1962-800_xjut4d.jpg",
    title: "Z",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099404/vangoghmuseum-s0060V1962v-800_slam8p.jpg",
    title: "A",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099404/vangoghmuseum-s0060V1962v-800_slam8p.jpg",
    title: "A",
  },
];

const LastDataUrls = [
  "https://res.cloudinary.com/duozomapm/image/upload/v1728188542/vangoghmuseum-s0104V1962-800_klzfxe.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728188614/vangoghmuseum-s0051V1962-800_gskvns.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728188556/vangoghmuseum-s0038V1962-800_bu4vsc.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728123578/vangoghmuseum-s0047V1962-800_gnefn4.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728123585/vangoghmuseum-s0032V1962-800_sffk94.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728188596/vangoghmuseum-s0028V1962-800_vpp4u0.jpg",
  "https://res.cloudinary.com/duozomapm/image/upl oad/v1728123631/vangoghmuseum-s0055V1962-800_oqy5hq.jpg",
];

const Library = () => {
  return (
    <>
      <Hero title={"Library"} />
      <LibrarySection>
        <section className="first-sec">
          <div className="library-section">
            <div className="carousel-section">
              <h3>New Arrivals</h3>
              <Slider dataURLS={CarouselDataURLS} />
            </div>

            <div className="search-section">
              <h3>Search books</h3>
              <p>Web OPAC - Koha</p>
              <span>Search Book/Author/Keywords</span>
            </div>

            <div className="form">
              <h1>Google form</h1>
            </div>
          </div>
        </section>

        <section className="library-section-2">
          <h3>Library Resources</h3>
          <div className="arrows">
            <button className="highlight-button-prev">&lt;</button>
            <Slider3 slides={ResourcesSlides} color={"black"} />
            <button className="highlight-button-next">&gt;</button>
          </div>
        </section>

        <section className="library-section-3">
          <h3>Library Team</h3>
          <div className="library-main-2">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728099382/vangoghmuseum-s0093V1962-800_rkhwip.jpg"
              alt=""
            />
            <h3>Sandhyarani K</h3>
          </div>
        </section>

        <section className="library-section-3">
          <h3>Librarian</h3>
          <div className="arrows">
            <button className="highlight-button-prev">&lt;</button>
            <Slider3 slides={LibrarianSlides} color={"black"} />
            <button className="highlight-button-next">&gt;</button>
          </div>
        </section>

        <section>
          <div className="library-main-3">
            <Slider dataURLS={LastDataUrls} />
          </div>
        </section>
      </LibrarySection>
      <Footer />
    </>
  );
};

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

const LibrarySection = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;

  .library-section {
    display: flex;
    gap: 4rem;
    margin: 1.5rem 0;
  }

  .carousel-section {
    animation: ${Animation} 1000ms ease-in-out;
    height: 100%;
    margin: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;

    h3 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1rem;
      animation: ${Animation} 1000ms ease-in-out;
    }
  }

  .library-section > * {
    flex-basis: 100%;
  }

  .search-section {
    animation: ${Animation} 1000ms ease-in-out;

    @media (max-width: 450px) {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
    }

    p {
      padding-block: 2rem;
    }
  }

  .form {
    animation: ${Animation} 1000ms ease-in-out;

    @media (max-width: 450px) {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
    }

    h1 {
      font-size: 2rem;
      text-align: center;
      animation: ${Animation} 1000ms ease-in-out;
    }
  }

  .library-section-2,
  .library-section-3 {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
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
    border-block: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 0 2rem 0;
  }

  .library-section-2 h3,
  .library-section-3 h3 {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
    text-align: center;
    color: gray;
    margin-block: 2rem;
    font-size: 2rem;
  }

  .search-section h3 {
    animation: ${Animation} 1000ms ease-in-out;
    font-size: 2rem;
    text-align: center;
  }

  .library-main,
  .library-main-2 {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
    max-width: 80%;
    margin: auto;
  }

  .library-main-2 img {
    display: block;
    margin: 0 auto;
    width: 30%;
    border-radius: 10px;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.7);
  }

  .library-main-2 img:hover {
    scale: 1.05;
    transition: 0.3s ease;
  }

  .library-main-3 {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
    max-width: 60%;
    margin: auto;
    margin-block: 4rem;
  }

  @media (max-width: 768px) {
    .library-section {
      flex-direction: column;
    }

    .carousel-section {
      max-width: 100%;
    }
    .library-main {
      max-width: 100%;
    }

    .library-main-2 img {
      width: 100%;
    }

    .library-main-3 {
      max-width: 100%;
    }
  }
`;

export default Library;
