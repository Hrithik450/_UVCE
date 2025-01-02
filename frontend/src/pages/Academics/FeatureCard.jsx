import React from "react";
import styled, { keyframes } from "styled-components";

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

const Card = styled.div`
  animation: ${TextAnimation} 1s ease-in-out;
  background: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  margin: 15px;
`;

const IconWrapper = styled.div`
  background: #f5f5f5;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #d9534f;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
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

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>Read More...</Button>
    </Card>
  );
};

export default FeatureCard;
