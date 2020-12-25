import axios from 'axios';

const API_URL = 'https://corona.lmao.ninja/v2/countries';

export const getCountries = async () => {
  const URL = API_URL;
  
  return await axios.get(URL)
  .then(resp => {
    const data = resp.data;
    const returnData = data.map((item) => {
      const { country, countryInfo: { flag, iso2 } } = item;
      return { country, flag, iso2 };
    });

    return returnData;
  })
  .catch(err => {
    console.error(err);
  });
}