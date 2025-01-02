import React from "react";
import Hero from "../components/Hero";
import FeatureCard from "./Academics/FeatureCard";
import { FaGraduationCap } from "react-icons/fa6";
import styled from "styled-components";
import StudentInfo from "./Academics/StudentInfo";
import Footer from "../components/Footer";

const data = [
  {
    title: "Attendece Procedure",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia error harum, consequuntur voluptas totam nulla iure magnam asperiores quidem recusandae autem! Porro culpa numquam odit quaerat nulla aspernatur consequatur!",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg",
  },
  {
    title: "Health & Help",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia error harum, consequuntur voluptas totam nulla iure magnam asperiores quidem recusandae autem! Porro culpa numquam odit quaerat nulla aspernatur consequatur!",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg",
  },
  {
    title: "International Students",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia error harum, consequuntur voluptas totam nulla iure magnam asperiores quidem recusandae autem! Porro culpa numquam odit quaerat nulla aspernatur consequatur!",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg",
  },
];

const Students = () => {
  return (
    <>
      <Hero title={"Students"} />
      <FeatureSection>
        <div className="features">
          <FeatureCard
            icon={<FaGraduationCap />}
            title={"Academics"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, rem porro beatae voluptas accusamus modi."
            }
          />
          <FeatureCard
            icon={<FaGraduationCap />}
            title={"Academics"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, rem porro beatae voluptas accusamus modi."
            }
          />
          <FeatureCard
            icon={<FaGraduationCap />}
            title={"Academics"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, rem porro beatae voluptas accusamus modi."
            }
          />
        </div>

        <div className="student-info">
          <StudentInfo data={data} />
        </div>
      </FeatureSection>
      <Footer />
    </>
  );
};

export default Students;

const FeatureSection = styled.section`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: auto;

  .features {
    display: flex;

    @media (max-width: 450px) {
      flex-wrap: wrap;
    }
  }
`;
