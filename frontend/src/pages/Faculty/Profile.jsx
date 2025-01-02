import React from "react";
import styled, { keyframes } from "styled-components";

const Profile = () => {
  return (
    <ProfileWrapper>
      <AboutSection>
        <LeftSection>
          <div>
            <ProfileImg
              src="https://res.cloudinary.com/duozomapm/image/upload/v1735698363/uvce_1_vjbb83.jpg"
              alt="Manager Profile"
            />
          </div>
          <Name>Jhonanthan Doe</Name>
          <Subtitle>Executive Manager</Subtitle>
        </LeftSection>
        <RightSection>
          <Title>The Manager Profile</Title>
          <AboutTitle>About Me</AboutTitle>
          <AboutText>
            Mr Muthuraman holds degrees in B.Tech in Metallurgical Engineering
            from IIT, Madras (India) and a MBA from XLRI, Jamshedpur. Mr
            Muthuraman joined Tata Steel in 1966 and was appointed as Executive
            Director in 2000, Managing Director of the Company in 2001 and
            non-executive Vice Chairman in 2009. He was the Chairman of the
            Board of Governors of IIT, Kharagpur; NIT, Jamshedpur and XLRI,
            Jamshedpur. Mr Muthuraman has been conferred with the prestigious
            “Padma Bhushan” award in 2012, from Government of India for his
            significant contribution to Indian Trade & Industry. He has now been
            appointed as the Chairman of Governing Council for University of
            Visvesvaraya College of Engineering, an autonomous institution under
            the Karnataka State Govt.
          </AboutText>
          <MilestoneWrapper>
            <Milestone>
              <MilestoneIcon bgColor="#8bc34a">✏️</MilestoneIcon>
              <MilestoneYear>2006</MilestoneYear>
              <MilestoneText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </MilestoneText>
            </Milestone>
            <Milestone>
              <MilestoneIcon bgColor="#ff9800">📐</MilestoneIcon>
              <MilestoneYear>2009</MilestoneYear>
              <MilestoneText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </MilestoneText>
            </Milestone>
            <Milestone>
              <MilestoneIcon bgColor="#03a9f4">🚀</MilestoneIcon>
              <MilestoneYear>2012</MilestoneYear>
              <MilestoneText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </MilestoneText>
            </Milestone>
          </MilestoneWrapper>
        </RightSection>
      </AboutSection>
    </ProfileWrapper>
  );
};

export default Profile;

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

const TextAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ProfileWrapper = styled.div`
  padding: 2rem 20px;
  max-width: 1280px;
  width: auto;
  margin: 2rem auto;

  color: black;
  text-align: center;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 450px) {
    box-shadow: none;
  }
`;

const Title = styled.h2`
  animation: ${TextAnimation} 1000ms ease-in-out;
  font-size: 2.2rem;
  color: black;
  margin-bottom: 2rem;
  font-weight: 800;

  @media (max-width: 450px) {
    font-size: 2rem;
    text-align: left;
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
`;

const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 450px) {
    flex-wrap: wrap;
    margin-top: 0px;
  }
`;

const LeftSection = styled.div`
  min-width: 200px;
  flex-basis: 33%;

  @media (max-width: 450px) {
    flex-basis: 100%;
  }
`;

const ProfileImg = styled.img`
  animation: ${Animation} 1000ms ease-in-out;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 4px solid #4fc3f7;
  margin-bottom: 15px;

  @media (max-width: 820px) {
    width: 230px;
    height: 230px;
  }

  @media (max-width: 450px) {
    width: 70%;
    height: 200px;
  }
`;

const Name = styled.h3`
  animation: ${TextAnimation} 1000ms ease-in-out;
  font-size: 2rem;
  color: blue;
  margin: 0.5rem;
`;

const Subtitle = styled.p`
  animation: ${TextAnimation} 1000ms ease-in-out;
  font-size: 1.3rem;
  color: black;

  @media (max-width: 450px) {
    margin: 1rem 0;
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
`;

const RightSection = styled.div`
  flex-basis: 67%;
  min-width: 300px;
  text-align: left;
  padding-left: 20px;

  @media (max-width: 450px) {
    padding-left: 0px;
  }
`;

const AboutTitle = styled.h3`
  font-weight: 800;
  animation: ${TextAnimation} 1000ms ease-in-out;
  font-size: 22px;
  color: black;
  margin-bottom: 10px;

  @media (max-width: 450px) {
    text-align: left;
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
`;

const AboutText = styled.p`
  animation: ${TextAnimation} 1000ms ease-in-out;
  font-size: 1rem;
  color: black;
  line-height: 1.6;

  @media (max-width: 450px) {
    text-align: left;
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
`;

const MilestoneWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  gap: 20px;

  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

const Milestone = styled.div`
  text-align: center;
`;

const MilestoneIcon = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
  width: 150px;
  height: 150px;
  background: ${(props) => props.bgColor || "#4fc3f7"};
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  margin: 0 auto 10px;
`;

const MilestoneYear = styled.h4`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
  font-size: 2rem;
  color: black;
  margin: 10px 0;
`;

const MilestoneText = styled.p`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
  font-size: 1rem;
  color: black;
`;
