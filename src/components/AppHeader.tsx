import React from "react";
import styled from "styled-components";
import { Button, Text } from "@aragon/ui";


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 8fr 2fr 2fr;
  grid-template-areas: ". b s p .";
`;

const Back = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: b;
`;

const Title = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: s;
`;

const Scatter = styled.div`
  align-self: center;
  justify-self; center;
  grid-area: p;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const Center = styled.div`
  justify-self: center;
  align-self: center;
`;

const AvatarPicture = styled.img`
  border-radius: 50%;
  width: 45px;
`;


const AppHeader = () => (
  <Wrapper>
    <Back>
      <Button mode="compact">Top</Button>
    </Back>
    <Title>
      <h3>Arbaro v0.1</h3>
    </Title>
    <Scatter>
      <Center>
        <AvatarPicture src="https://johnwilliamson.io/images/avatar.jpg" />
      </Center>
      <Center>
        <div>John Williamson</div>
        <div>Sign out</div>
      </Center>
    </Scatter>
  </Wrapper>
);

export default AppHeader;
