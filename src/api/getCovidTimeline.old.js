import axios from 'axios';

const URL = 'https://covidti.com/api/public/world/timeseries/poland';

export const getCovidTimeline = async () => {
  return await axios.get(URL)
  .then(resp => {
    const data = Object.entries(resp.data.response.timeSeriesData);
    const returnData = data.map(item => {
      const date = item[0];
      const { cases, deaths, recovered } = item[1];
      return { date, cases, deaths, recovered };
    })
    return returnData
  })
  .catch(err => {
    console.error(err);
  });
}