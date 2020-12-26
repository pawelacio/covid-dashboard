import React, {useContext} from 'react';
import Card from '../Card/Card';
import {ThemeContext} from '../../ThemeContext';

import {
  DailyDashboardStyled,
  ValueStyled,
  RowStyled,
  TextStyled,
  CountryFlag,
  CountryName
} from './DailyDashboardStyled';

const DailyDashboard = ({data}) => {
  const {
    active,
    cases,
    deaths,
    recovered,
    tests,
    todayCases,
    todayDeaths,
    todayRecovered,
    updated,
    casesPerOneMillion,
    deathsPerOneMillion,
    recoveredPerOneMillion,
    country,
    countryInfo: {
      flag,
    }
  } = data;

  const { theme } = useContext(ThemeContext);
  const updatedDate = new Date(updated);
  const fr = (string) => { return string.toLocaleString() }

  return (
    <DailyDashboardStyled>
      <RowStyled>
        <Card>
          <RowStyled>
            <CountryName theme={theme}>{country}</CountryName>
            <CountryFlag  theme={theme} src={flag} />
          </RowStyled>
        </Card>
      </RowStyled>
      <RowStyled>
        <Card title="Today Cases">
          <ValueStyled theme={theme}>{fr(todayCases)}</ValueStyled>
        </Card>
        <Card title="Today Recovered" >
          <ValueStyled theme={theme}>{todayRecovered.toLocaleString()}</ValueStyled>
        </Card>
        <Card title="Today Deaths" >
          <ValueStyled theme={theme}>{todayDeaths.toLocaleString()}</ValueStyled>
        </Card>
      </RowStyled>
      <RowStyled>
        <Card title="Cases">
          <ValueStyled theme={theme}>{cases.toLocaleString()}</ValueStyled>
        </Card>
        <Card title="Recovered" >
          <ValueStyled theme={theme}>{recovered.toLocaleString()}</ValueStyled>
        </Card>
        <Card title="Deaths" >
          <ValueStyled theme={theme}>{deaths.toLocaleString()}</ValueStyled>
        </Card>
      </RowStyled>
      <RowStyled>
        <Card title="Cases per million population">
          <ValueStyled theme={theme}>{casesPerOneMillion.toLocaleString()}</ValueStyled>
        </Card>
        <Card title="Recovered per million population" >
          <ValueStyled theme={theme}>{recoveredPerOneMillion.toLocaleString()}</ValueStyled>
        </Card>
        <Card title="Deaths per million population" >
          <ValueStyled theme={theme}>{deathsPerOneMillion.toLocaleString()}</ValueStyled>
        </Card>
      </RowStyled>
      <RowStyled>
        <Card>
          <TextStyled theme={theme}>Data updated: </TextStyled>
          <TextStyled  theme={theme} bold>{updatedDate.toLocaleString()}</TextStyled>
        </Card>
      </RowStyled>
    </DailyDashboardStyled>
  )
}

export default DailyDashboard;

