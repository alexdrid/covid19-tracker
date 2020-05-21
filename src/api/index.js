import axios from 'axios';

const baseUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let url = baseUrl;

  if(country){
    url = `${baseUrl}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const filteredData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    
    return filteredData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/daily`);
    const filteredData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return filteredData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${baseUrl}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
