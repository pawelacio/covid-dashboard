import React, {useContext, useState} from 'react';
import Toggle from '../Toggle/Toggle';
import {ThemeContext, themes} from '../../ThemeContext';
import moonIcon from './moon.svg';

import {
  ThemeSwitchStyled
} from './ThemeSwitchStyled';



const ThemeSwitch = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [value, setValue] = useState(false);


  return (
    <ThemeSwitchStyled
      theme
    >
      <Toggle onClick={
        () => {
          toggleTheme();
          setValue(!value);
      }} 
      value={value}
      icon={moonIcon}
      />
    </ThemeSwitchStyled>
  )
}

export default ThemeSwitch;