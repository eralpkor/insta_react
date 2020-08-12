import React from 'react';
import styled from 'styled-components';
import norman from '../img/norman.png'

export default function UserIcon(params) {
  return (
    <Image>
      <Span role='link'>
        <StockPhoto src={norman} alt='norman the cat' />
      </Span>
    </Image>
  )
};

const Image = styled.div`
  margin-left: 20px;
`
const Span = styled.span`
  width: 22px;
  height: 22px;
  cursor: pointer;
  display: block;
  border-radius: 50%;
`

const StockPhoto = styled.img`
  width: 20px;
  border-radius: 50%;
`