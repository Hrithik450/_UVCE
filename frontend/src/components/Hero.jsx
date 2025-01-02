import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar/Navbar";

import { AiTwotoneFileExclamation } from "react-icons/ai";
import { MdHome, MdMessage } from "react-icons/md";
import { FaReact } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";

const object = {
  theme: "dark",
  title: "UVCE",
  sizing: {
    minWidth: "280px",
  },
  NavItems: [
    { title: "Home", type: "normal", href: "/", icon: <MdHome /> },
    { title: "People", type: "normal", href: "/people", icon: <MdHome /> },

    {
      title: "Departments",
      icon: <AiTwotoneFileExclamation />,
      type: "dropdown",
      items: [
        {
          title: "Department of civil",
          icon: <AiTwotoneFileExclamation />,
          items: [
            {
              title: "UG - B.Tech",
              href: "/department/Civil",
              icon: <FaReact />,
            },
            {
              title: "PG - M.Tech",
              href: "/department/Civil",
              icon: <FaReact />,
            },
            { title: "Phd", href: "/department/Civil", icon: <FaReact /> },
          ],
        },
        {
          title: "Department of Mechanical",
          icon: <AiTwotoneFileExclamation />,
          items: [
            {
              title: "UG - B.Tech",
              href: "/department/Mechanical",
              icon: <FaReact />,
            },
            {
              title: "PG - M.Tech",
              href: "/department/Mechanical",
              icon: <FaReact />,
            },
            { title: "Phd", href: "/department/Mechanical", icon: <FaReact /> },
          ],
        },
        {
          title: "Department of EEE",
          icon: <AiTwotoneFileExclamation />,
          items: [
            {
              title: "UG - B.Tech",
              href: "/department/EEE",
              icon: <FaReact />,
            },
            {
              title: "PG - M.Tech",
              href: "/department/EEE",
              icon: <FaReact />,
            },
            { title: "Phd", href: "/department/EEE", icon: <FaReact /> },
          ],
        },
        {
          title: "Department of ECE",
          icon: <AiTwotoneFileExclamation />,
          items: [
            {
              title: "UG - B.Tech",
              href: "/department/ECE",
              icon: <FaReact />,
            },
            {
              title: "PG - M.Tech",
              href: "/department/ECE",
              icon: <FaReact />,
            },
            { title: "Phd", href: "/department/ECE", icon: <FaReact /> },
          ],
        },
        {
          title: "Department of CSE",
          icon: <AiTwotoneFileExclamation />,
          items: [
            {
              title: "UG - B.Tech",
              href: "/department/CSE",
              icon: <FaReact />,
            },
            {
              title: "PG - M.Tech",
              href: "/department/CSE",
              icon: <FaReact />,
            },
            { title: "Phd", href: "/department/CSE", icon: <FaReact /> },
          ],
        },
        {
          title: "Department of Architecture",
          icon: <AiTwotoneFileExclamation />,
          items: [
            {
              title: "UG - B.Tech",
              href: "/department/Architecture",
              icon: <FaReact />,
            },
            {
              title: "PG - M.Tech",
              href: "/department/Architecture",
              icon: <FaReact />,
            },
            {
              title: "Phd",
              href: "/department/Architecture",
              icon: <FaReact />,
            },
          ],
        },
      ],
    },
    {
      title: "Research",
      type: "normal",
      href: "/research",
      icon: <FaUser />,
    },

    { title: "Faculty", type: "normal", href: "/faculty", icon: <MdMessage /> },
    {
      title: "Students",
      type: "normal",
      href: "/students",
      icon: <MdMessage />,
    },

    {
      title: "More",
      type: "LastDropdown",
      icon: <AiTwotoneFileExclamation />,
      items: [
        {
          title: "Faculties & Infrastructure",
          type: "normal",
          href: "/infrastructure",
          icon: <BsCartCheck />,
        },

        {
          title: "Library",
          type: "normal",
          href: "/library",
          icon: <BsCartCheck />,
        },
        {
          title: "Placements",
          type: "normal",
          href: "/placements",
          icon: <BsCartCheck />,
        },
        {
          title: "Alumini",
          type: "normal",
          href: "/alumini",
          icon: <AiTwotoneFileExclamation />,
        },
        {
          title: "Careers",
          type: "normal",
          href: "/careers",
          icon: <AiTwotoneFileExclamation />,
        },
        {
          title: "Notifications",
          type: "normal",
          href: "/notifications",
          icon: <AiTwotoneFileExclamation />,
        },
        {
          title: "About Us",
          type: "normal",
          href: "/about",
          icon: <AiTwotoneFileExclamation />,
        },
      ],
    },
    {
      name: "Login",
      type: "button",
      href: "/login",
      icon: <IoMdLogIn />,
    },
  ],
};

export default function Hero({ title, desc }) {
  return (
    <>
      <Header>
        <Navbar object={object} />
        <Content>
          <h1>{title}</h1>
          <P>{desc || "First State Autonomous University On IIT Model"}</P>
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
  height: 50vh;
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
