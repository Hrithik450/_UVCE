import styled, { keyframes } from "styled-components";
import Avatars from "./AvatarGroup";

const avatars = [
  "https://tse4.mm.bing.net/th?id=OIP.OYbzbbyzogwtriubL2pP0AHaHa&pid=Api&P=0&h=180",
  "https://tse1.mm.bing.net/th?id=OIP.q2YsgHsjuMWvKbVbnp-aJwHaHa&pid=Api&P=0&h=180",
  "https://tse3.mm.bing.net/th?id=OIP.l0ai3Gemc84mnwkfBwywrAHaHa&pid=Api&P=0&h=180",
];

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

const CommitmentWrapper = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }

  .text-content {
    display: flex;
    align-items: center;
    flex: 1;
    color: #333;
    animation: ${Animation} 1s ease-in-out;

    h2 {
      font-size: 2rem;
      color: black;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      font-weight: bold;
      color: #666;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 1.5rem;
    }
  }

  .image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    height: auto;
    gap: 3rem;

    @media (max-width: 450px) {
      flex-direction: column;
      height: auto;
      gap: 1rem;
    }

    .badge {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
      position: absolute;
      z-index: 5;
      top: 25%;
      left: 35%;
      text-align: center;

      background: white;
      color: black;
      padding: 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: bold;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      span {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
        color: gray;
        margin: 0px;
        margin: 0.5rem;
      }

      @media (max-width: 450px) {
        top: 27%;
        left: 20%;
      }
    }

    .Left {
      height: auto;
      display: flex;
      flex-basis: 100%;
      position: relative;
      border-radius: 10px;
      display: block;
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
      overflow: hidden;
      @media (max-width: 768px) {
        width: 100%;
      }

      img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
      }
    }

    .Right {
      display: flex;
      flex-basis: 150%;
      column-gap: 3rem;

      @media (max-width: 768px) {
        column-gap: 0.5rem;
      }

      .ImageContent {
        height: auto;
        display: flex;
        flex-direction: column;

        img {
          height: auto;
          width: 100%;
          border-radius: 10px;
          animation: ${Animation} linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        p {
          margin: 1.5rem 0;
          flex-shrink: 0;
          animation: ${Animation} linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        button {
          flex-shrink: 0;
          width: max-content;
          padding: 0.5rem 3rem;
          border-radius: 20px;
          color: white;
          font-weight: bold;
          background-color: black;
          animation: ${Animation} linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }
      }

      .stats {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        .Stat {
          animation: ${Animation} linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          padding: 1rem 0;
          max-width: 100%;

          h3 {
            font-size: 2rem;
            color: black;
            margin-bottom: 0.5rem;
          }

          p {
            font-size: 1.2rem;
            color: #666;
          }

          @media (max-width: 450px) {
            width: 100%;
            padding: 1rem 0.5rem;

            h3 {
              font-size: 1.5rem;
            }

            p {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;

const Commitment = () => (
  <CommitmentWrapper>
    <div className="text-content">
      <h2>Univerz's Commitment to Academic Excellence</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        tristique, tortor nec consequat vulputate.
      </p>
    </div>

    <div className="ContentWrapper">
      <div className="image-wrapper">
        <div className="Left">
          <img
            src="https://res.cloudinary.com/duozomapm/image/upload/v1735698363/uvce_1_vjbb83.jpg"
            alt="Campus 1"
          />
        </div>

        <div className="badge">
          <span>50K+</span>
          <p>Students</p>
          <Avatars avatars={avatars} />
        </div>

        <div className="Right">
          <div className="ImageContent">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1735698623/uvce_3_kcigij.jpg"
              alt="Campus 2"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              beatae praesentium quia doloribus, sint illo quos aperiam! Iusto
              corrupti optio iure ab, sapiente adipisci possimus maxime veniam
              illum aliquid corporis?
            </p>
            <button>Read more</button>
          </div>

          <div className="stats">
            <div className="Stat">
              <h3>35+</h3>
              <p>Courses</p>
            </div>

            <div className="Stat">
              <h3>56+</h3>
              <p>Startups</p>
            </div>

            <div className="Stat">
              <h3>100+</h3>
              <p>Languages</p>
            </div>

            <div className="Stat">
              <h3>150+</h3>
              <p>Professors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CommitmentWrapper>
);

export default Commitment;
