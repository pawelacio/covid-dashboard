import axios from 'axios';

const API_URL = 'https://corona.lmao.ninja/v2/historical';

export const getCovidTimeline = async (country = 'poland', lastdays = 'all') => {
  const URL = `${API_URL}/${country}`;
  const params = {
    lastdays
  }
  
  return await axios.get(URL, { params })
  .then(resp => {
    const data = Object.entries(resp.data.timeline.cases);
    const returnData = data.map(item => {
      const date = item[0];
      const cases = resp.data.timeline.cases[date];
      const deaths = resp.data.timeline.deaths[date];
      const recovered = resp.data.timeline.recovered[date];
      return { date, cases, deaths, recovered };
    })

    return returnData
  })
  .catch(err => {
    console.error(err);
  });
}