import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const ExampleLineChart = () => {
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const datasets = [
    Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1),
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Example Line Chart',
        data: datasets,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Y-axis Label',
        },
        display: true,
        beginAtZero: true,
        max: 100,
      },
      x: {
        title: {
          display: true,
          text: 'x-axis Label',
        },
        display: true,
      },
    },
  };

  return (
    <div style={{ width: '1000px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ExampleLineChart;
