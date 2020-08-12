import React from 'react';
import styled from 'styled-components';
import UserIcon from './UserIcon';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome, 
  faPaperPlane, 
  faCompass, 
  faHeart,
 } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(
  faPaperPlane,
  faHome,
  faCompass
)

export default function Navigation() {
  return (
    <div>
      <Nav>
        <div>
          <Title>Instagram</Title>
        </div>
        <SearchDiv>
          <form>
            <Input placeholder='Search'></Input>
          </form>
        </SearchDiv>
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faPaperPlane} />
      <FontAwesomeIcon icon={faCompass} />
      <FontAwesomeIcon icon={faHeart} />
      <UserIcon  />
      </Nav>
    </div>
  )
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 54px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
  -webkit-box-align: center;
`;

const Title = styled.h2`
  font-family: 'Lobster', cursive;
  font-size: 1.5em;
  color: #2a263a;
  
`;

const Input = styled.input`
  border: 1px solid rgba(var(--b6a,219,219,219),1);
  background: rgba(var(--b3f,250,250,250),1);
  border-radius: 3px;
  justify-content: center;
  
`
const SearchDiv = styled.div`
  display: flex;
  
  flex: 0 1 auto;
  min-width: 125px;
  width: 215px;
  align-items: stretch;
  flex-direction: column;
  margin: 0;
  padding: 0;
  position: relative;
  border: 0 solid #000;
`