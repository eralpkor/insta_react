import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserIcon from "./UserIcon";

// import API from "../utils/API";

// import UserImages from "./UserImages";

export default function Suggestions(props) {
  const [state, setstate] = useState({
    isLoading: true,
    name: null,
    avatar: null,
    email: null,
  });

  

  // section styles
  const section = {
    display: "flex",
    // alignItems: "center",
    height: "100vh",
    width: "200px",
    background: "rgb(250, 250, 250)",
    margin: "50px 0 0 0",
    position: "fixed",
    marginLeft: "850px",

    // delete later
    border: "1px solid black",
  };

  return (
    <div style={section}>
      <Wrapper>
        <UserInfo>
          <UserIcon />

          <a href="/">Hello</a>
        </UserInfo>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 141px;
  background-color: rgb(250, 250, 250);
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;
const NameSection = styled.div`
  display: flex;

  a {
    color: red;
  }
`;
