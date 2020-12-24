import React from 'react'
import ThemeSwitch from '../ThemeSwtich/ThemeSwitch';

import {
  HeaderStyled,
  LogoStyled,
} from './HeaderStyled'

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled/>
      <ThemeSwitch/>
    </HeaderStyled>
  )
}

export default Header