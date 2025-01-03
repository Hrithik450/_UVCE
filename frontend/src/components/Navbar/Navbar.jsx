import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa6";
import MenuBar from "./Menubar";
import { NavLink } from "react-router-dom";

const Navbar = ({ object }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <>
      <Wrapper>
        <NavContainer>
          <Logo>
            <Bars onClick={() => setIsOpen(!isOpen)} />
            {object.title}
          </Logo>

          <NavItemContainer>
            {object.NavItems &&
              object.NavItems.map((nav, idx) =>
                nav.type === "button" ? (
                  <a href={nav.href} key={`${nav}-${idx}`}>
                    <Button>{nav.name}</Button>
                  </a>
                ) : nav.type === "dropdown" ? (
                  <DropNavItem key={`${nav}-${idx}`}>
                    <Category>
                      <MenuBar
                        type={nav.type}
                        object={object}
                        categories={nav.items}
                        name={nav.title}
                      />
                    </Category>
                  </DropNavItem>
                ) : nav.type === "LastDropdown" ? (
                  <DropNavItem key={`${nav}-${idx}`}>
                    <Category>
                      <MenuBar
                        type={nav.type}
                        object={object}
                        categories={nav.items}
                        name={nav.title}
                      />
                    </Category>
                  </DropNavItem>
                ) : (
                  <NavItem
                    key={`${nav}-${idx}`}
                    to={nav.href}
                    $isactive={currentPath === nav.href ? "true" : "false"}
                  >
                    {nav.title}
                  </NavItem>
                )
              )}
          </NavItemContainer>
        </NavContainer>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} object={object} />
      </Wrapper>
    </>
  );
};

const Animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = styled.section`
  * {
    font-family: "Times New Roman", Times, serif;
  }

  position: absolute;
  top: 0%;
  max-width: 100%;
  margin: auto;
  height: auto;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
`;

const NavContainer = styled.nav`
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  justify-content: space-between;
  background-color: transparent;
  color: white;

  @media (max-width: 450px) {
    padding: 1rem 1rem;
  }
`;

const Standard = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-basis: 20%;
`;

const Bars = styled(FaBars)`
  font-size: 1.5rem;

  @media (min-width: 1270px) {
    display: none;
  }
`;

const Logo = styled(Standard)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-basis: 50%;
  font-size: 3rem;
  color: white;
  animation: ${Animation} 1s ease-in-out;

  .bars {
    width: 30px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const NavItemContainer = styled.div`
  flex-basis: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1280px) {
    .active {
      border-bottom: 3px solid white;
    }
  }

  @media (max-width: 1280px) {
    gap: 1rem;
  }
`;

const Category = styled(Standard)`
  @media (max-width: 1180px) {
    display: none;
  }

  color: black;
  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;

const DropNavItem = styled.div`
  animation: ${Animation} 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
  text-align: center;
  width: max-content;
  font-size: 1.3rem;

  @media (max-width: 1180px) {
    display: none;
  }

  &:hover {
    border-bottom: 3px solid white;
  }

  @media (max-width: 1280px) {
    font-size: 1.2rem;
  }
`;

const NavItem = styled(NavLink)`
  animation: ${Animation} 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-decoration: none;
  color: white;
  cursor: pointer;
  text-align: center;
  width: max-content;
  font-size: 1.3rem;

  @media (max-width: 1180px) {
    display: none;
  }

  &:hover {
    border-bottom: 3px solid white;
  }

  @media (max-width: 1280px) {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  animation: ${Animation} 1s ease-in-out;
  background-color: transparent;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  border: 2px solid white;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1180px) {
    display: none;
  }
`;

export default Navbar;
