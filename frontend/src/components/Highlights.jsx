// components/UVCEHighlights.js
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const HighlightsWrapper = styled.section`
  max-width: 1280px;
  width: auto;
  margin: 2rem auto;

  @media (max-width: 450px) {
    padding: 0rem 20px;
    margin: auto;
  }

  text-align: center;

  h2 {
    margin-bottom: 30px;
    font-size: 2.5rem;
    color: black;
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    @media (max-width: 1024px) {
      gap: 1rem;
    }
  }

  .text-block {
    flex: 1 1 250px;
    max-width: 300px;
    text-align: left;
    display: flex;
    flex-direction: column;
    row-gap: 4rem;

    @media (max-width: 1024px) {
      row-gap: 2rem;
    }

    .text-content {
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
      padding: 0.5rem 1rem;
      border-radius: 10px;
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
    }

    h3 {
      margin: 1rem 0 0.5rem 0;
      font-size: 1.2rem;
      color: black;
    }

    p {
      font-size: 1rem;
      color: #555;
      line-height: 1.6;
    }
  }

  .image-wrapper {
    flex: 1 1 400px;
    max-width: 400px;
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;

    img {
      border-radius: 10px;
      width: 100%;
      height: auto;
    }
  }
`;

const UVCEHighlights = () => (
  <HighlightsWrapper>
    <h2>UVCE</h2>
    <div className="content">
      <div className="text-block">
        <div className="text-content">
          <h3>First Engineering College of Karnataka</h3>
          <p>
            Established in 1917 under the name Government Engineering College,
            it is the fifth engineering college in the country.
          </p>
        </div>
        <div className="text-content">
          <h3>Vision of Sir M Visvesvaraya</h3>
          <p>
            In order to develop a skilled force among the boys from Mysore,
            BharatRatna Sir M Visvesvaraya envisioned the college in 1917.
          </p>
        </div>
      </div>

      <div className="image-wrapper">
        <img
          src="https://res.cloudinary.com/duozomapm/image/upload/v1735698365/uvceImage1_aoy7nl.jpg"
          alt="UVCE Building"
        />
      </div>

      <div className="text-block">
        <div className="text-content">
          <h3>100 Years of Legacy</h3>
          <p>
            What started off with 20 students in civil and mechanical branches,
            now has over 3300 students in 7 different branches.
          </p>
        </div>
        <div className="text-content">
          <h3>Campus Location</h3>
          <p>
            The main campus is situated at KR Circle, in the neighborhood of
            Vidhana Soudha, while the other is situated amidst Jnana Bharati
            Campus spread over 50 acres.
          </p>
        </div>
      </div>
    </div>
  </HighlightsWrapper>
);

export default UVCEHighlights;
