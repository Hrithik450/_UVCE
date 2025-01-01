import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { EffectCoverflow } from "swiper/modules";
import styled from "styled-components";

export default function Slider3({ slides }) {
  return (
    <StyledSwiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 1,
        depth: 150,
        modifier: 2.5,
        slideShadows: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{ delay: 1000 }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide className="slide-content" key={index}>
          <StyledImage src={slide.url} />
          <StyledH5>{slide.name || ""}</StyledH5>
          <StyledH4>{slide.title || ""}</StyledH4>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}

// Styled Components
const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 0px;
  padding-bottom: 0px;

  .slide-content {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid white;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.7);
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  .slide_images {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .slide_images:hover {
    scale: 1.2;
    transition: 0.2s linear;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  &:hover {
    scale: 1.2;
    transition: 0.2s linear;
  }
`;

const StyledH4 = styled.h4`
  text-align: left;
  position: absolute;
  bottom: 2.5rem;
  left: 1.5rem;
  color: white;
  font-family: "Inconsolata", monospace;
  max-width: 80%;
`;

const StyledH5 = styled.h5`
  text-align: left;
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  color: white;
  font-family: "Inconsolata", monospace;
`;
