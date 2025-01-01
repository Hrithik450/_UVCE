import styled, { keyframes } from "styled-components";

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

const AdmissionProcessWrapper = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;

  @media (max-width: 768px) {
    padding: 2rem 2rem;
    height: auto;
  }

  .content {
    height: 75%;
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;

    h2 {
      text-align: center;
    }

    p {
      text-align: center;
      max-width: 50%;
      margin: 1rem auto;
      font-weight: bold;

      @media (max-width: 768px) {
        max-width: 80%;
      }
    }

    .content-parent {
      max-width: 80%;
      width: 100%;
      margin: auto;

      @media (max-width: 450px) {
        max-width: 100%;
      }
    }

    .contentSection {
      display: flex;
      justify-content: center;
      height: 100%;

      @media (max-width: 768px) {
        flex-direction: column;
        row-gap: 2rem;
      }

      .image {
        flex-basis: 100%;

        img {
          height: auto;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          animation: ${Animation} linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;

          @media (max-width: 768px) {
            width: 100%;
            margin: 0 0;
          }
        }
      }

      .points {
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: ${Animation} linear;
        animation-timeline: view();
        animation-range: entry 0% cover 30%;

        ul {
          list-style: none;
          padding: 0;

          li {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
            text-align: center;

            svg {
              color: black;
              font-size: 1.5rem;
            }

            span {
              font-size: 1.5rem;
              font-weight: bold;
              color: #333;
              text-align: left;
              display: block;
            }
          }
        }
      }
    }

    h2 {
      font-size: 2rem;
      color: black;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 2rem;
    }

    .cta {
      margin-top: 2rem;

      button {
        width: 100%;
        padding: 0.75rem 1.5rem;
        background-color: black;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;

        &:hover {
          background-color: black;
        }
      }
    }
  }
`;

const AdmissionProcess = () => {
  const steps = [
    "Complete everything as ordered",
    "Provide your last exam result",
    "Choose your desired program",
    "Get contact with the instructor",
    "Finally get started your program",
  ];

  return (
    <AdmissionProcessWrapper>
      <div className="content">
        <h2>
          Student Admission Process and <br /> Assistance from us
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          harum odio sapiente eos, accusamus suscipit? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Magni, sequi!
        </p>
        <div className="content-parent">
          <div className="contentSection">
            <div className="image">
              <img
                src="https://res.cloudinary.com/duozomapm/image/upload/v1735698363/uvce_1_vjbb83.jpg"
                alt="Students in a meeting"
              />
            </div>
            <div className="points">
              <ul>
                {steps.map((step, index) => (
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      height="24"
                      width="24"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.992 5.016a.75.75 0 0 1-1.08.02L4.384 8.384a.75.75 0 1 1 1.08-1.04l1.64 1.723 3.866-4.097z" />
                    </svg>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="cta">
                <button>See all our admission</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdmissionProcessWrapper>
  );
};

export default AdmissionProcess;
