import React from "react";
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

const Wrapper = styled.div`
  text-align: center;
  padding: 50px 0px;
`;

const SectionTitle = styled.h2`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
  font-size: 2.3rem;
  color: black;
  margin: 10px;
`;

const Description = styled.p`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
  font-size: 1rem;
  color: #777;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 450px) {
    flex-wrap: wrap;
    gap: 2rem 0rem;
  }
`;

const Card = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
  flex-basis: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  text-align: center;

  .image-wrapper {
    width: 100%;
    height: 270px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0.5rem 0;
`;

const DescriptionCard = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #34495e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #2c3e50;
  }
`;

const StudentInfo = ({ data }) => {
  return (
    <Wrapper>
      <SectionTitle>For Students:</SectionTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Description>
      <Grid>
        {data.map((item, index) => (
          <Card key={index}>
            <div className="image-wrapper">
              <img src={item.src} alt="Student-Info" />
            </div>
            <Title>{item.title}</Title>
            <DescriptionCard>{item.description}</DescriptionCard>
            <Button>Read More...</Button>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default StudentInfo;
