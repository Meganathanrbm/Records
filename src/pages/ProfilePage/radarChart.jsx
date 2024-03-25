import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Chart } from "chart.js";
import { Radar } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const RadarChart = () => {
  return (
    <Radar
      data={{
        labels: [
          "Business",
          "Marketing",
          "Finance",
          "Development",
          "Design",
          "Sales",
        ],
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55],
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
