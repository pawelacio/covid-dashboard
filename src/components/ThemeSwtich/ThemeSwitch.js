import React, {useContext, useEffect, useState} from 'react';
import Toggle from '../Toggle/Toggle';
import {ThemeContext, themes} from '../../ThemeContext';
import moonIcon from '../../assets/moon.svg';

import {
  ThemeSwitchStyled
} from './ThemeSwitchStyled';



const ThemeSwitch = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [value, setValue] = useState(false);

  useEffect(() => {
    if ( theme === themes.dark && value !== true)
      setValue(true);
  }, [theme, value]);


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