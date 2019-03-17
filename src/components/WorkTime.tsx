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
`

const NotesLabel = styled.div`
    padding: 5px;
`

const Center = styled.div`
    justify-self: center;
    align-self: center;
`

const WorkTime = () => (
  <TimeEntry>
    <Center>
      <AvatarPicture
        src="https://johnwilliamson.io/images/avatar.jpg"
      />
    </Center>
    <Center><h4>John Williamson</h4></Center>
    <Center>0.5</Center>
    <Center>50</Center>
    <NotesLabel>
      Did this and that, I also decided to give old mate a clean way of entering
      time with formatting which is a nicer thing to do in general.
    </NotesLabel>
  </TimeEntry>
);

export default WorkTime;
