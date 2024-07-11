"use client";
import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DonutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [10, 20, 30],
        backgroundColor: ["#e08600", "#f2df0b", "#FFCE56"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DonutChart;
