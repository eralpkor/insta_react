import React from "react";
import styled from "styled-components";
import UserIcon from "./UserIcon";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faSearch,
  faHeath as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPaperPlane,
  faCompass,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faPaperPlane, faHome, faCompass, faHeart, faSearch);

export default function Navigation() {
  return (
    <div>
      <Nav>
        <InnerDiv>
          <TitleDiv>
            <Title>Instagram</Title>
          </TitleDiv>
          <SearchDiv>
            <span icon={faSearch}></span>
            <form>
              <Input placeholder="Search"></Input>
            </form>
          </SearchDiv>
          <Icons>
            <IconsInner>
              <FontAwesomeIcon icon={faHome} size="lg" />
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />
              <FontAwesomeIcon icon={faCompass} size="lg" />
              <FontAwesomeIcon icon={faHeart} size="lg" />
              <UserIcon />
            </IconsInner>
          </Icons>
        </InnerDiv>
      </Nav>
    </div>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid rgb(219, 219, 219);
  -webkit-box-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  transition: height 0.2s ease-in-out;
  background-color: rgba(255, 255, 255);
`;
const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  max-width: 975px
  position: relative;
  padding: 0 20px;
`;
const TitleDiv = styled.div`
  flex: 1 9999 0%;
  min-width: 40px;
`;
const Title = styled.h2`
  font-family: "Lobster", cursive;
  font-size: 1.5em;
  color: #2a263a;
`;

const Input = styled.input`
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  background: rgba(var(--b3f, 250, 250, 250), 1);
  border-radius: 3px;
  justify-content: center;
  text-align: center;
  color: rgb(142, 142, 142);
  height: 20px;
  width: 200px;
  &:focus {
    outline: none;
  }
`;
const SearchDiv = styled.div`
  text-align: center;
  display: flex;
  height: 15px;
  flex: 0 1 auto;
  min-width: 125px;
  width: 215px;
  align-items: stretch;
  flex-direction: column;
  margin: 0;
  padding: 0;
  position: relative;
  border: 0 solid #000;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex: 1 0 0%;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 0;
  padding-left: 24px;
  white-space: nowrap;
`;
const IconsInner = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 24px;
  white-space: nowrap;
  align-items: stretch;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  justify-content: space-between;
  width: 150px;
`;
// justify-content: space-between;
