import React from 'react';

import {
  CardStyled,
  CardTitleStyled,
  CardContentStyled
} from './CardStyled';

const Card = ({title, children}) => {
  return (
    <CardStyled>
      { title && (
        <CardTitleStyled>{title}</CardTitleStyled>
      )}
      <CardContentStyled>
        {children}
      </CardContentStyled>
    </CardStyled>
  )
}

export default Card;