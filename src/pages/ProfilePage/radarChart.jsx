import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Chart } from "chart.js";
import { Radar } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const RadarChart = ({ percentages }) => {
  console.log(Object.values(percentages));
  return (
    <Radar
      data={{
        labels: Object.keys(percentages),
        datasets: [
          {
            data: Object.values(percentages),
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          r: {
            pointLabels: {
              fontSize: 14,
              color: "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)",
              font: {
                weight: "bold",
              },
            },
            suggestedMin: 0,
            suggestedMax: 100,
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
            },
            angleLines: {
              color: "rgba(0, 0, 0, 0.1)",
            },
          },
        },
      }}
    />
  );
};

export default RadarChart;
