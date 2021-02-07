import React, {useState,useEffect} from 'react'
import CovidLineChart from './components/CovidLineChart/CovidLineChart'
import Header from './components/Header/Header'
import Loader from './components/Loader/Loader';
import DailyDashboard from './components/DailyDashboard/DailyDashboard';
import Card from './components/Card/Card';
import SelectCountry from './components/SelectCountry/SelectCountry';

import GlobalStyle from './styles/globalStyle';

import {ThemeContext, themes} from './ThemeContext';
import {PopupContext} from './PopupContext';

import {getCovidTimeline} from './api/getCovidTimeline';
import {getCovidDaily} from './api/getCovidDaily';
import {getCountries} from './api/getCountries';


import { AppStyled, AppContentStyled, RowStyled, TextStyled } from './AppStyled'
import Popup from './components/Popup/Popup';

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const [isLoading, setLoading] = useState(true);
  const [historicalData, setHistoricalData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [availableCountries, setAvailableCountries] = useState(null);
  const [country, setCountry] = useState('Poland');
  const [popupVisibility, setPopupVisibility] = useState(false);


  useEffect(() => {
    setLoading(true);

    const historicalDataReq = getCovidTimeline(country)
    .then((data) => {
        setHistoricalData(data);
    });

    const dailyDataReq = getCovidDaily(country)
    .then((data) => {
        setDailyData(data);
    });

    const countriesDataReq = getCountries()
    .then((data) => {
        setAvailableCountries(data);
    })

    Promise.all([historicalDataReq, dailyDataReq, countriesDataReq]).then(() => {
      setLoading(false);
    });
  }, [country]);

  const toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  const openPopup = () => {
    setPopupVisibility(true);
  }

  const closePopup = () => {
    setPopupVisibility(false);
  }

  const selectCountry = (newCountry) => {
    closePopup();
    setCountry(newCountry);
  }

  const returnDateString = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <PopupContext.Provider value={{popupVisibility, openPopup, closePopup}}>
      <GlobalStyle />
      <AppStyled theme={theme}>
        {isLoading ? (
          <Loader/>
          ) : (
          <>
            <Header theme={theme}/>
            <AppContentStyled>
              <DailyDashboard data={dailyData}/>
              <RowStyled>
                <Card title={`Covid history in ${country}`}>
                  <CovidLineChart data={historicalData} />
                </Card>
              </RowStyled>
              <RowStyled>
                <Card>
                  <TextStyled theme={theme}>Data updated: </TextStyled>
                  <TextStyled  theme={theme} bold>{returnDateString(dailyData.updated)}</TextStyled>
                </Card>
              </RowStyled>
              

              { popupVisibility && (
                <Popup title="Select country">
                  <SelectCountry countries={availableCountries} selectCountry={selectCountry}/>
                </Popup>
              )}
            </AppContentStyled>
          </>
          )}
      </AppStyled>
      </PopupContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
