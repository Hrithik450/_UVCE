// components/CallToAction.js
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

const CallToActionWrapper = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;

  text-align: center;
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;

  h2 {
    font-size: 3rem;
    color: black;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .description {
    margin: 20px 0;
    font-size: 1.2rem;
    max-width: 60%;
    margin: 2rem auto;

    @media (max-width: 768px) {
      max-width: 80%;
      font-size: 1rem;
    }
  }

  .button {
    background-color: black;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 1rem;
  }
`;

const CalltoAction = () => (
  <CallToActionWrapper>
    <h2>
      Join now to get special <br />
      offers at Univerz
    </h2>
    <p className="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa
      sit amet nisi blandit vehicula adipiscing elit. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Illo, possimus!
    </p>
    <button className="button">Join Now</button>
  </CallToActionWrapper>
);

export default CalltoAction;
