import axios from 'axios';

const API_URL = 'https://corona.lmao.ninja/v2/countries';

export const getCovidDaily = async (country = 'poland') => {
  const URL = `${API_URL}/${country}`;
  
  return await axios.get(URL)
  .then(resp => {
    // const data = Object.entries(resp.data.timeline.cases);
    const returnData = resp.data;

    return returnData
  })
  .catch(err => {
    console.error(err);
  });
}