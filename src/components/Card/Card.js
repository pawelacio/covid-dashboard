import React, { useContext } from 'react';
import {ThemeContext} from '../../ThemeContext';


import {
  CardStyled,
  CardTitleStyled,
  CardContentStyled
} from './CardStyled';

const Card = ({title, children}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <CardStyled theme={theme}>
      { title && (
        <CardTitleStyled theme={theme}>{title}</CardTitleStyled>
      )}
      <CardContentStyled>
        {children}
      </CardContentStyled>
    </CardStyled>
  )
}

export default Card;