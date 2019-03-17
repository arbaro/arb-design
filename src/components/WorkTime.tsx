import React from "react";
import styled from "styled-components";

const TimeEntry = styled.div`
  display: grid;
  min-height: 70px;
  padding: 5px;
  grid-template-columns: 1fr 4fr 2fr 2fr 3fr;
  margin-bottom: 10px;
`;

const AvatarPicture = styled.img`
  border-radius: 50%;
  width: 45px;
`;

const NotesLabel = styled.div`padding: 5px;`;

const Center = styled.div`
  justify-self: center;
  align-self: center;
`;

const DisplayName = styled.h4`
    align-self: center;
`

const WorkTime = ({ displayName, avatarUrl, decHours, shares, notes }: any) => (
  <TimeEntry>
    <Center>
      <AvatarPicture src={avatarUrl} />
    </Center>

    <DisplayName>{displayName}</DisplayName>

    <Center>{decHours}</Center>
    <Center>{shares}</Center>
    <NotesLabel>{notes}</NotesLabel>
  </TimeEntry>
);

export default WorkTime;
