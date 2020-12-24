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
    updated
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
        <Card title="Today Death" >
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
        <Card title="Death" >
          <ValueStyled>{deaths.toLocaleString()}</ValueStyled>
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

