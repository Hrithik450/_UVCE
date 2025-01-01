// components/AvatarGroup.js
import styled from "styled-components";

const AvatarGroupContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: -15px;

  &:first-child {
    margin-left: 0;
  }
`;

const Avatars = ({ avatars }) => {
  return (
    <AvatarGroupContainer>
      {avatars.map((avatar, index) => (
        <Avatar key={index} style={{ backgroundImage: `url(${avatar})` }} />
      ))}
    </AvatarGroupContainer>
  );
};

export default Avatars;
