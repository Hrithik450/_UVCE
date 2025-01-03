"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
      <FooterSec1>
        <Footer1>
          <FooterHeading>ABOUT</FooterHeading>
          <FooterPara>
            University of Visvesvaraya College of Engineering (UVCE) was
            established in the year 1917 by Bharat Ratna Sir M Visvesvaraya.
            Currently an autonomous institution, the College provides seven
            engineering courses - Electronics and Communication, Electrical and
            Electronics, Mechanical, Computer Science, Information Science,
            Artificial Intelligence and Civil Engineering apart from
            Architecture.
          </FooterPara>
        </Footer1>
        <Footer2>
          <FooterHeading>QUICKLINKS</FooterHeading>
          <FooterList>
            <li>College Intake</li>
            <li>Admission Process</li>
            <li>Syallabus</li>
            <li>Placement Office</li>
            <li>Fests</li>
            <li>Student Clubs</li>
          </FooterList>
        </Footer2>
        <Footer3>
          <FooterHeading>CONTACT</FooterHeading>
          <FooterDetails>
            <p>
              Office Address - K R Circle, Dr Ambedkar Veedhi, Bengaluru,
              Karnataka 560001
            </p>
            <p>
              Info line - <FooterSpan>+080-22961890</FooterSpan>
            </p>
            <p>
              Email - <FooterSpan>info@campusuvce.in</FooterSpan>
            </p>
            <NavLinkItem>Plan a visit</NavLinkItem>
          </FooterDetails>
        </Footer3>
      </FooterSec1>
      <FooterSec2>
        <p>
          ©UVCE 2025-2026 All rights reserved | Designed and Developed by
          <span>Hruthik M</span>
        </p>
      </FooterSec2>
    </FooterSection>
  );
};

export default Footer;

const Animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;+
    transform: scale(1);
  }
`;

const FooterSection = styled.footer`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  overflow: hidden;
`;

const FooterSec1 = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 4rem;
  padding: 1rem 10rem 0rem 10rem;

  @media (max-width: 1024px) {
    padding: 1rem 2rem 0rem 2rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem 2rem 0rem 2rem;
    column-gap: 0rem;
    row-gap: 2rem;
  }
`;

const FooterHeading = styled.h4`
  font-family: "Inconsolata", monospace;
  letter-spacing: 2px;
  padding-block: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const FooterPara = styled.p`
  font-family: "Inconsolata", monospace;
  line-height: 1.5rem;
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const Footer1 = styled.div`
  flex-basis: 100%;
`;

const Footer2 = styled.div`
  flex-basis: 100%;
`;

const Footer3 = styled.div`
  flex-basis: 100%;
`;

const FooterList = styled.ul`
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }

  li {
    margin-top: 1rem;
    font-family: "Inconsolata", monospace;
    &::marker {
      color: gray;
    }

    > * {
      font-family: "Inconsolata", monospace;
      text-decoration: none;
      color: gray;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const FooterDetails = styled.div`
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
  p {
    margin-top: 0.5rem;
    font-family: "Inconsolata", monospace;
  }
`;

const FooterSpan = styled.span`
  color: gray;
  margin-left: 0.5rem;
  font-family: "Inconsolata", monospace;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLinkItem = styled.p`
  > * {
    font-family: "Inconsolata", monospace;
    text-decoration: none;
    color: gray;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterSec2 = styled.div`
  margin-top: 2rem;
  background-color: rgba(0, 0, 0, 0.2);
  padding-block: 1rem;
  border-block: 1px solid rgba(255, 255, 255, 0.5);

  p {
    text-align: center;
    color: gray;
    font-family: "Inconsolata", monospace;

    span {
      margin-left: 0.5rem;
      color: rgba(0, 115, 255, 0.668);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 800px) {
    p {
      font-size: 13px;
    }
  }
`;

// const StyledNavLink = styled(NavLink)`
//   text-decoration: none;
//   color: gray;
//   font-family: "Inconsolata", monospace;

//   &:hover {
//     text-decoration: underline;
//   }
// `;
