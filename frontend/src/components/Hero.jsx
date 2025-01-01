import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar/Navbar";

export default function Hero() {
  const object = {
    theme: "dark",
    title: "UVCE",
    sizing: {
      minWidth: "250px",
    },
    NavItems: [
      { title: "Home", type: "normal", href: "/", icon: "MdHome" },
      {
        title: "Inventory",
        icon: "AiTwotoneFileExclamation",
        type: "dropdown",
        items: [
          {
            title: "Development",
            icon: "AiTwotoneFileExclamation",
            items: [
              {
                title: "Web Development",
                icon: "MdWeb",
                href: "/WebDevelopment",
              },
              {
                title: "Data Science",
                icon: "LiaNetworkWiredSolid",
                href: "/DataScience",
              },
              {
                title: "Mobile Development",
                items: [
                  {
                    title: "Google Flutter",
                    href: "#",
                    icon: "FaApple",
                  },
                  { title: "IOS Development", href: "#", icon: "FaApple" },
                  {
                    title: "Android Develeopment",
                    href: "#",
                    icon: "GrAndroid",
                  },
                  { title: "React Native", href: "#", icon: "FaReact" },
                ],
              },
            ],
          },
          {
            title: "Business",
            icon: "AiTwotoneFileExclamation",
            items: [
              { title: "Entrepreneurship" },
              { title: "Communication" },
              {
                title: "Management",
                items: [
                  { title: "Product Management", href: "#", icon: "FaReact" },
                  { title: "Leadership", href: "#", icon: "FaReact" },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Pricing & Plans",
        type: "normal",
        href: "/pricing",
        icon: "FaUser",
      },
      { title: "Contact Us", type: "normal", href: "#", icon: "MdMessage" },
      {
        title: "Categories",
        type: "dropdown",
        icon: "AiTwotoneFileExclamation",
        items: [
          {
            title: "Development",
            items: [
              { title: "Web Development", icon: "MdWeb" },
              { title: "Data Science", icon: "LiaNetworkWiredSolid" },
              {
                title: "Mobile Development",
                items: [
                  {
                    title: "Google Flutter",
                    href: "#",
                    icon: "FaApple",
                  },
                  { title: "IOS Development", href: "#", icon: "FaApple" },
                  {
                    title: "Android Develeopment",
                    href: "#",
                    icon: "GrAndroid",
                  },
                  { title: "React Native", href: "#", icon: "FaReact" },
                ],
              },
            ],
            icon: "AiTwotoneFileExclamation",
          },
          {
            title: "Business",
            icon: "AiTwotoneFileExclamation",
            items: [
              { title: "Entrepreneurship" },
              { title: "Communication" },
              {
                title: "Management",
                items: [
                  { title: "Product Management", href: "#", icon: "FaReact" },
                  { title: "Leadership", href: "#", icon: "FaReact" },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "More",
        type: "LastDropdown",
        icon: "AiTwotoneFileExclamation",
        items: [
          {
            title: "Android-Development",
            type: "normal",
            href: "/android",
            icon: "BsCartCheck",
          },
          {
            title: "Infrastructure",
            type: "normal",
            href: "#",
            icon: "BsCartCheck",
          },
          { title: "About", type: "normal", href: "#", icon: "BsCartCheck" },
          { title: "About", type: "normal", href: "#", icon: "AiFillHeart" },
          {
            title: "About",
            type: "normal",
            href: "#",
            icon: "AiTwotoneFileExclamation",
          },
          {
            title: "About",
            type: "normal",
            href: "#",
            icon: "AiTwotoneFileExclamation",
          },
        ],
      },
      {
        name: "Login",
        type: "button",
        href: "/Login",
        icon: "IoMdLogIn",
      },
    ],
  };

  return (
    <>
      <Header>
        <Navbar object={object} />
        <Content>
          <h1>University of Visvesvaraya College of Engineering</h1>
          <P>First State Autonomous University On IIT Model</P>
          <button>Take a Tour</button>
        </Content>
      </Header>
    </>
  );
}

const HeadAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
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

const Header = styled.header`
  height: 80vh;
  width: 100%;
  position: relative;
  background: url("https://wallpaperaccess.com/full/2137313.jpg") center/cover
    no-repeat;
  color: white;
  text-align: center;
  padding: 10px 0 100px 0;
  animation: ${HeadAnimation} 500ms ease-in-out;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
    z-index: 1;
  }

  button {
    margin-top: 20px;
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    animation: ${TextAnimation} 1s ease-in-out;
    transition: all 150ms ease;
    border: 1px solid white;

    &:hover {
      background-color: black;
      transform: scale(1.2);
    }
  }
`;

const P = styled.p`
  padding: 1.5rem 0rem 1rem 0rem;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  animation: ${TextAnimation} 1s ease-in-out;
`;

const Content = styled.div`
  width: 80%;
  z-index: 2;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 100px 0px;
  font-size: 1.5rem;

  h1 {
    transform-origin: center;
    perspective: 500px;
    animation: ${TextAnimation} 1s ease-in-out;
  }

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;
