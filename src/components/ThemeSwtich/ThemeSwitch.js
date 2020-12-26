import React, {useContext, useState} from 'react';
import {ThemeContext, themes} from '../../ThemeContext';
import moonIcon from './moon.svg';

import {
  ThemeSwitchStyled,
  ToogleWrapperStyled,
  ToggleDot,
  ToggleInput,
  ToggleIcon
} from './ThemeSwitchStyled';

export const Toggle = ({
    value,
    onClick,
    disabled,
    icon
  }) => {

  return (
    <ToogleWrapperStyled onClick={() => onClick()} value={value}>
      <ToggleDot>
        { icon && (
          <ToggleIcon src={icon}/>
        )}
      </ToggleDot>
      <ToggleInput />
    </ToogleWrapperStyled>
  )
}

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