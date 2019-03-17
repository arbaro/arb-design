import React from 'react';
import styled from 'styled-components';
import Work from './Work'

const Wrapper = styled.div`
      display: grid;
  grid-template-columns: 2fr 2fr 8fr 2fr 2fr;
  grid-template-areas: 
    ". . h . ."
    ". m c i ."
    ". m c f .";
`

const Header = styled.div`
  justify-self: center;
  align-self: center;
    grid-area: h
`

const Menu = styled.div`
    grid-area: m;
`

const Content = styled.div`
    grid-area: c;
`

const Info = styled.div`
    grid-area: i;
`

const Form = styled.div`
    grid-area: f;
`

const Company = () => (
    <Wrapper>
        <Header>
            <h1>Contoso</h1>
        </Header>
        <Menu>
            <ul>
                <li>Home</li>
                <li>Work</li>
                <li>Team</li>
            </ul>
        </Menu>
        <Work />
    </Wrapper>
)

export default Company;