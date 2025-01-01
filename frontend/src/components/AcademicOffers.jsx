import styled, { keyframes } from "styled-components";
import { PiCertificate } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { GiRocketThruster } from "react-icons/gi";
import { MdHomeWork } from "react-icons/md";

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

const AcademicOfferingsWrapper = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;
  text-align: center;
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;

  h2 {
    font-size: 2rem;
    color: black  ;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: black;
    margin-bottom: 2rem;
    max-width: 50%;
    margin: 1.5rem auto;
  }

  @media (max-width: 768px) {
    padding: 0rem 2rem;

    p {
      max-width: 80%;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 768px) {
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr);
    }
  }

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      color: white;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;

      .icon {
        flex-basis: 50%;
        font-size: 4rem;
      }

      .content {
        flex-basis: 250%;
      }

      h3 {
        text-align: left;
        font-size: 1.2rem;
        max-width: 80%;
        margin: auto;
      }

      p {
        font-size: 1rem;
        text-align: left;
        max-width: 80%;
        color: white;
      }

      svg {
        font-size: 2rem;
      }
    }
  }

  .view-all {
    margin-top: 2rem;

    button {
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
`;

const AcademicOfferings = () => {
  const offerings = [
    {
      icon: <PiCertificate />,
      title: "World-Wide Recognition",
      description:
        "The oldest and most venerated Engineering Colleges in Karnataka, with its unique mix of the State of the Art Education and active industrial collaboration is recognized globally",
    },
    {
      icon: <FaComputer />,
      title: "Skill Development",
      description:
        "The college focuses on overall development of students comprising of both academic and extra curricular activities.",
    },
    {
      icon: <FaSearchengin />,
      title: "Campus Recruitment",
      description:
        "The college has an excellent Industry - Institution interaction with all the reputed Global Companies visiting the campus.",
    },
    {
      icon: <GiArchiveResearch />,
      title: "Research",
      description:
        "Most students are involved in Research and have published Technical papers and also been acknowledged in International Conferences and Journals in the last few years.",
    },
    {
      icon: <GiRocketThruster />,
      title: "Great Environment",
      description:
        "The students of this college are hardworking, cultured, highly disciplined and have preserved the cherished values of this institution over the years.",
    },
    {
      icon: <MdHomeWork />,
      title: "Hostel Facilties",
      description:
        "The College provides hostel facilities for boys and girls separately both in the Jnana Bharathi and City Campus to reduce the travel time.",
    },
  ];

  return (
    <AcademicOfferingsWrapper>
      <h2>
        Explore Our Academic Offerings <br /> Chart Your Path to Success
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga
        eveniet, qui quam tempore dignissimos at nesciunt ipsa earum, repellat
        nulla et. Voluptatibus numquam assumenda ipsam cum mollitia, enim fugit.
      </p>
      <div className="cards">
        {offerings.map((offering, index) => (
          <div key={index} className="card">
            <div className="icon">{offering.icon}</div>
            <div className="content">
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all">
        <button>View All</button>
      </div>
    </AcademicOfferingsWrapper>
  );
};

export default AcademicOfferings;
