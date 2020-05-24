import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

function LineChart({ data: { confirmed, recovered, deaths }, country }) {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  return dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Confirmed',
            borderColor: '#ff9800',
            backgroundColor: 'rgba(255,152,0,0.4)',
            borderWidth: 4,
            fill: true,
            pointRadius: 0,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: '#f44336',
            backgroundColor: 'rgba(244,67,54,0.8)',
            borderWidth: 4,
            fill: true,
            pointRadius: 0,
          },
        ],
      }}
      options={{
        responsive: true,
      }}
    />
  ) : null;
}

export default LineChart;
