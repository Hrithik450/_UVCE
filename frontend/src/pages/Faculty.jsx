import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Profile from "./Faculty/Profile";
import styled from "styled-components";

const Faculty = () => {
  return (
    <>
      <Hero title={"Faculty"} />
      <ProfileSection>
        <Profile />
      </ProfileSection>
      <Footer />
    </>
  );
};

export default Faculty;

const ProfileSection = styled.section``;
