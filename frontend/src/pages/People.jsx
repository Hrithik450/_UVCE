import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";

const People = () => {
  return (
    <Wrapper>
      <Hero title={"People"} />
      <div className="people">People</div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default People;
