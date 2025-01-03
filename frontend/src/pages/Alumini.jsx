import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import Slider3 from "../components/Swiper";
import Slider from "../components/Swiper2";

const AluminiSlides = [
  "https://res.cloudinary.com/duozomapm/image/upload/v1728141010/vangoghmuseum-s0144V1962-800_bcicci.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728141036/vangoghmuseum-s0031V1962-800_oladul.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728140989/vangoghmuseum-s0109V1962-800_yhdl4y.jpg",
  "https://res.cloudinary.com/duozomapm/image/upload/v1728141070/vangoghmuseum-s0102V1962-800_ofsdqr.jpg",
];

const ActivitySlides = [
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg",
    title: "Alumni Records",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
    title: "Membership",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728140989/vangoghmuseum-s0109V1962-800_yhdl4y.jpg",
    title: "Reunions",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728141036/vangoghmuseum-s0031V1962-800_oladul.jpg",
    title: "Scholarships",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728141010/vangoghmuseum-s0144V1962-800_bcicci.jpg",
    title: "Give to UVCE",
  },
  {
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728139435/Screenshot_2024-09-23_234428_cl3fxl.jpg",
    title: "Programmes",
  },
];

const BlogGrid = [
  {
    Class: "first-img",
    title: "Future of Energy - Dr Prahlada Rama Rao",
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728188596/vangoghmuseum-s0028V1962-800_vpp4u0.jpg",
  },
  {
    Class: "second-img",
    title: "Blockchain and its applications",
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728188596/vangoghmuseum-s0028V1962-800_vpp4u0.jpg",
  },
  {
    Class: "third-img",
    title: "Advances in Aerospace Engineering - Gopalkrishna",
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1728188596/vangoghmuseum-s0028V1962-800_vpp4u0.jpg",
  },
];

const Alumini = () => {
  return (
    <>
      <Hero title={"Alumini"} />
      <AluminiSection>
        <section>
          <div className="alumini_main">
            <div className="left-part">
              <Slider dataURLS={AluminiSlides} />
            </div>

            <div className="right-part">
              <p style={{ color: "gray" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                eligendi, nemo id aut ipsum enim sit quod ab quaerat! Accusamus
                dolore, laboriosam asperiores fuga dolorem voluptates molestias
                eum id reiciendis? Eveniet, reiciendis. Sed sunt, perspiciatis
                vero magnam alias aperiam! Tempora sunt, sequi neque similique
                eos iure ad, quidem deleniti, quibusdam itaque assumenda autem
                provident nam. Iste earum ipsam sunt nesciunt modi, labore
                nostrum commodi accusamus, officiis rem voluptas enim
                repudiandae ea ipsa porro unde? Minus quidem ullam ipsum facilis
                necessitatibus esse sapiente alias quod vero vel harum nemo
                saepe quibusdam ex veniam, doloribus voluptates cupiditate sunt.
                Tempore ab vitae veritatis autem nihil atque amet similique,
                dolores repudiandae maiores in cupiditate a eum quos quod
                placeat odio asperiores nulla tempora sapiente quibusdam
                assumenda blanditiis reprehenderit? Ipsam, architecto voluptatem
                similique facilis corporis totam tempore quae debitis voluptates
                fugit ut deleniti odio. Eum amet distinctio libero nemo ea
                sapiente temporibus cumque incidunt atque fuga doloribus
                inventore, dignissimos excepturi rem rerum vero. Laboriosam
                recusandae quas.
              </p>
            </div>
          </div>
        </section>

        <section className="alumini-section-2">
          <h3>Activities</h3>
          <div className="alumini-main arrows">
            <button className="highlight-button-prev">&lt;</button>
            <Slider3 slides={ActivitySlides} color={"black"} />
            <button className="highlight-button-next">&gt;</button>
          </div>
        </section>

        <section className="alumini-section-3">
          <h3>Alumini Blogs</h3>
          <div className="alumini-sec-3">
            {BlogGrid &&
              BlogGrid.map((blog, idx) => (
                <div
                  className={`alumini-image ${blog.Class}`}
                  key={`${blog}-${idx}`}
                >
                  <p>{blog.title}</p>
                  <img src={blog.url} alt="image2" />
                </div>
              ))}
          </div>
        </section>
      </AluminiSection>
      <Footer />
    </>
  );
};

export default Alumini;

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

const AluminiSection = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;

  .alumini_main {
    padding: 2rem 0 3rem 0;
    display: flex;
    gap: 3rem;

    .left-part {
      animation: ${Animation} 1000ms ease-in-out;
      box-shadow: 0 0 4px 3px #000000b3;
      border-radius: 5px;
      overflow: hidden;
      flex-basis: 50%;
    }

    @media (max-width: 450px) {
      flex-wrap: wrap;
      gap: 3rem 0;

      .left-part {
        flex-basis: 100%;
      }
    }

    .right-part {
      flex-basis: 100%;

      p {
        animation: ${Animation} 1000ms ease-in-out;
        padding-bottom: 2rem;
        line-height: 1.6rem;
        font-size: 1.2rem;

        @media (max-width: 450px) {
          animation: ${Animation} linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }
      }
    }
  }

  .alumini-section-2 {
    border-block: 1px solid rgba(0, 0, 0, 0.5);
    margin: 0 0 2rem 0;
    padding: 2rem 0;

    .alumini-main {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
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

    h3 {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
      text-align: center;
      font-size: 2.5rem;
      margin: 0 0 2rem 0;
    }
  }

  .alumini-sec-3 {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
  }

  .alumini-image {
    position: relative;
  }

  .first-img,
  .second-img,
  .third-img {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }

  .alumini-image p {
    position: absolute;
    z-index: 1;
    left: 1.5rem;
    bottom: 1rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
  }

  .alumini-sec-3 div img {
    width: 100%;
    height: 100%;
  }

  .first-img {
    grid-column: span 2;
  }

  .second-img {
    grid-column: span 2;
    grid-row-start: 2;
  }

  .alumini-image {
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.7);
  }

  .alumini-image img:hover {
    scale: 1.1;
    transition: 0.3s ease;
  }

  .third-img {
    grid-column: span 3;
    grid-row: span 2;
  }

  .alumini-section-3 {
    h3 {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
      text-align: center;
      font-size: 2.5rem;
      margin: 0 0 2rem 0;
    }

    margin-bottom: 2rem;
  }

  @media (max-width: 450px) {
    .alumini-sec-3 {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 0rem;
    }
    .alumini-image h3 {
      left: 0rem;
    }
  }

  @media (min-width: 1024px) {
    .alumini-sec-3 {
      max-height: 60vh;
    }

    .alumini-image h3 {
      bottom: -0.5rem;
    }
  }
`;
