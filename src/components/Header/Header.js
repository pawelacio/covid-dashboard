import React from 'react'
import ThemeSwitch from '../ThemeSwtich/ThemeSwitch';

import {
  HeaderStyled,
  LogoStyled,
} from './HeaderStyled'

const Header = ({theme}) => {
  return (
    <HeaderStyled theme={theme}>
      <LogoStyled/>
      <ThemeSwitch/>
    </HeaderStyled>
  )
}

export default Header