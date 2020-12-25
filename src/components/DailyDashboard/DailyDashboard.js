import React from 'react';
import Card from '../Card/Card';

import {
  DailyDashboardStyled,
  ValueStyled,
  RowStyled,
  TextStyled
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
    recoveredPerOneMillion
  } = data;
  const updatedDate = new Date(updated);
  console.log("Data", data);

  const fr = (string) => { return string.toLocaleString() }

  return (
    <DailyDashboardStyled>
      <RowStyled>
        <Card title="Today Cases">
          <ValueStyled>{fr(todayCases)}</ValueStyled>
        </Card>
        <Card title="Today Recovered" >
          <ValueStyled>{todayRecovered.toLocaleString()}</ValueStyled>
        </Card>
        <Card title="Today Deaths" >
          <ValueStyled>{todayDeaths.toLocaleString()}</ValueStyled>
        </Card>
      </RowStyled>
      <RowStyled>
        <Card title="Cases">
          <ValueStyled>{cases.toLocaleString()}</ValueStyled>
        </Card>
        <Card title="Recovered" >
          <ValueStyled>{recovered.toLocaleString()}</ValueStyled>
        </Card>
        <Card title="Deaths" >
          <ValueStyled>{deaths.toLocaleString()}</ValueStyled>
        </Card>
      </RowStyled>
      <RowStyled>
        <Card title="Cases per million population">
          <ValueStyled>{casesPerOneMillion.toLocaleString()}</ValueStyled>
        </Card>
        <Card title="Recovered per million population" >
          <ValueStyled>{recoveredPerOneMillion.toLocaleString()}</ValueStyled>
        </Card>
        <Card title="Deaths per million population" >
          <ValueStyled>{deathsPerOneMillion.toLocaleString()}</ValueStyled>
        </Card>
      </RowStyled>
      <RowStyled>
        <Card>
          <TextStyled>Data updated: </TextStyled>
          <TextStyled bold>{updatedDate.toLocaleString()}</TextStyled>
        </Card>
      </RowStyled>
    </DailyDashboardStyled>
  )
}

export default DailyDashboard;

