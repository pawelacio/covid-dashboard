import React, {useState,useEffect} from 'react'
import CovidLineChart from './components/CovidLineChart/CovidLineChart'
import Header from './components/Header/Header'
import Loader from './components/Loader/Loader';
import DailyDashboard from './components/DailyDashboard/DailyDashboard';
import Card from './components/Card/Card';
import GlobalStyle from './styles/globalStyle';

import {ThemeContext, themes} from './ThemeContext';

import {getCovidTimeline} from './api/getCovidTimeline';
import {getCovidDaily} from './api/getCovidDaily';
import {getCountries} from './api/getCountries';


import { AppStyled, AppContentStyled } from './AppStyled'

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const [isLoading, setLoading] = useState(true);
  const [historicalData, setHistoricalData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [availableCountries, setAvailableCountries] = useState(null);
  const [country, setCountry] = useState('Poland');
  // const [popupVisibility, setPopupVisibility] = useState(false);


  useEffect(() => {
    console.log('App - useEffect');

    const historicalDataReq = getCovidTimeline(country)
    .then((data) => {
      if (!historicalData)
        setHistoricalData(data);
    });

    const dailyDataReq = getCovidDaily(country)
    .then((data) => {
      if (!dailyData)
        setDailyData(data);
    });

    const countriesDataReq = getCountries()
    .then((data) => {
      if (!availableCountries)
        setAvailableCountries(data);
    })

    Promise.all([historicalDataReq, dailyDataReq, countriesDataReq]).then(() => {
      setLoading(false);
    });
  }, []);

  const toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <GlobalStyle />
      <AppStyled theme={theme}>
        {isLoading ? (
          <Loader/>
          ) : (
          <>
            <Header theme={theme}/>
            <AppContentStyled>
              <DailyDashboard data={dailyData}/>
              {/* <Card title="Covid-19 chart">
                <CovidLineChart data={historicalData} />
              </Card> */}
              {/* { popupVisibility && (
                <div>ddsa</div>
              )} */}
            </AppContentStyled>
          </>
          )}
      </AppStyled>
    </ThemeContext.Provider>
  );
}

export default App;
