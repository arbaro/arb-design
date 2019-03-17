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
`;

const AppHeader = () => (
  <Wrapper>
    <Back>
      <Button mode="compact">Top</Button>
    </Back>
    <Title>
      <Text size="large">Arbaro v0.1</Text>
    </Title>
    <Scatter>John Williamson</Scatter>
  </Wrapper>
);

export default AppHeader;
