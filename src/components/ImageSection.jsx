import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import UserImages from './UserImages';

import UserIcon from './UserIcon'


export default function ImageSection(props) {
  


  const fontStyles = {
    color: 'red',
    fontSize: '20px',
  }

  return (
    <UserBox>
      <Header >
        <UserIcon />
        <Span>Eralp</Span>
      </Header>
      <UserImages  />
      <FeedBack>
        <Section>
          <FontAwesomeIcon icon={ faHeart } style={fontStyles}/>
          <p>Hi</p>
        </Section>
      </FeedBack>
    </UserBox>
  )
}

const UserBox = styled.article`
  padding: 0;
  border: 1px solid rgba(var(--b6a,219,219,219),1);
  margin-bottom: 60px;
  width: 640px;
`
const Header = styled.header`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Span = styled.span`
  margin-left: 15px;
  font-size: 0.8em;
  font-weight: bold;
`
const FeedBack = styled.div`
  
`
const Section = styled.section`
  padding: 0 16px 0 16px;
  
`