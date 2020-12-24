import React, {useContext} from 'react';
import {ThemeContext, themes} from '../../ThemeContext';

import {
  ThemeSwitchStyled
} from './ThemeSwitchStyled';

const ThemeSwitch = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <ThemeSwitchStyled
      theme
      onClick={() => toggleTheme()}
    >
      Turn {theme === themes.light ? themes.light : themes.dark} mode
    </ThemeSwitchStyled>
  )
}

export default ThemeSwitch;