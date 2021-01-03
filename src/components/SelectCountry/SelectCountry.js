import React from 'react';

import {
  SelectCountryStyled,
  CountryItemStyled,
  CountryNameStyled,
  CountryFlagStyled
} from './SelectCountryStyled';

const SelectCountry = ({countries, selectCountry}) => {
  console.log(countries);
  return (
    <SelectCountryStyled>
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