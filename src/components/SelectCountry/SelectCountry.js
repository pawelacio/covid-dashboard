import React, {useContext} from 'react';
import { ThemeContext } from '../../ThemeContext';

import {
  SelectCountryStyled,
  CountryItemStyled,
  CountryNameStyled,
  CountryFlagStyled
} from './SelectCountryStyled';

const SelectCountry = ({countries, selectCountry}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SelectCountryStyled theme={theme}>
      {countries.map(item => (
        <CountryItemStyled key={item.country} onClick={() => selectCountry(item.country)}>
          <CountryNameStyled>{item.country}</CountryNameStyled>
          <CountryFlagStyled src={item.flag}/>
        </CountryItemStyled>
      ))}
    </SelectCountryStyled>
  )
}

export default SelectCountry;