import React from 'react';
import styled from 'styled-components'
import WorkTime from './WorkTime'

const Content = styled.div`
    grid-area: c;
`

const Info = styled.div`
    grid-area: i;
`

const Form = styled.div`
    grid-area: f;
`

const Work = () => (
    <React.Fragment>
        <Content>
            <div className="table">
                <WorkTime />
            </div>
        </Content>
        <Info>
            <h3>Work</h3>
            <p>This plugin allows one to enter time against thing.</p>
            <p>Engages the smart contract and mints tokens for team members</p>
        </Info>
        <Form>
            <h3>Enter time</h3>
            <p>Dec hours</p>
            <input type="text" />
            <p>Notes</p>
            <input type="text" />
            <button>Submit</button>
        </Form>
        </React.Fragment>
)

export default Work;