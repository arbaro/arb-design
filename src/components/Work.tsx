import React from "react";
import styled from "styled-components";
import WorkTime from "./WorkTime";

const workEntries = [
  {
    displayName: "John Williamson",
    avatarUrl: "https://johnwilliamson.io/images/avatar.jpg",
    decHours: 0.5,
    shares: 50,
    notes: `Did this and that, I also decided to give old mate a clean way of entering
      time with formatting which is a nicer thing to do in general.`
  },
  {
    displayName: "Dan Larimer",
    avatarUrl:
      "https://qdkzytxlh7-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/final_BLOCK_ONE_BB_DANIEL_LARIMER_171214_012_retouched-480x480.jpg",
    decHours: 4,
    shares: 5000,
    notes: "Fucked shit up"
  }
];

const Content = styled.div`grid-area: c;`;

const Info = styled.div`
  grid-area: i;
  padding: 10px;
`;

const Form = styled.div`grid-area: f;`;

const Work = () => (
  <React.Fragment>
    <Content>
      <div className="table">
        {workEntries.map(entry => <WorkTime {...entry} />)}
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
);

export default Work;
