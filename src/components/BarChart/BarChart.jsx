import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart({ data: { confirmed, recovered, deaths }, country }) {
  return confirmed ? (
    <Bar
      data={{
        labels: ['Confirmed', 'Deaths', 'Recovered'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['#ff9800', '#f44336', '#4caf50'],
            data: [confirmed.value, deaths.value, recovered.value],
          },
        ],
      }}
      options={{
        responsive: true,
        legend: {
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        },
      }}
    />
  ) : null;
}

export default BarChart;
