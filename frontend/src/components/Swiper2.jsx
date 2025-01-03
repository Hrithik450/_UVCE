import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import styled from "styled-components";

export default function Slider({ dataURLS }) {
  return (
    <>
      <MySwiper>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {dataURLS.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt="image1" />
            </SwiperSlide>
          ))}
        </Swiper>
      </MySwiper>
    </>
  );
}

const MySwiper = styled.section`
  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .swiper-slide {
    height: 400px;
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 450px) {
      height: 300px;
    }
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
  }

  .swiper-slide img:hover {
    scale: 1.2;
    transition: 0.2s linear;
  }

  .headline {
    color: black;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: #fff;
  }
`;
