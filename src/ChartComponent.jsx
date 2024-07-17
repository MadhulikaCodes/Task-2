import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  annotationPlugin
);

const ChartComponent = ({dataval}) => {
 
  const averagePrice =
    dataval.reduce((a, b) => a + b, 0) / dataval.length;

  const data = {
    labels: Array(dataval.length).fill(""),
    datasets: [
      {
        label: "Price",
        data: dataval,
        borderColor: "#6366F1", // Line color
        backgroundColor: "rgba(99, 102, 241, 0.1)", // Background fill color under the line
        pointBackgroundColor: "#6366F1", // Point fill color
        pointBorderColor: "#6366F1", // Point border color
        pointHoverBackgroundColor: "#FF5733", // Point hover fill color
        pointHoverBorderColor: "#FF5733", // Point hover border color
        fill: true, // Ensure the background color fills under the line
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: false,
        },
      },
      y: {
        display: true,
        title: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: function (context) {
          return context.dataIndex === context.chart.data.labels.length - 1; // Only display the label for the last point
        },
        align: "left",
        anchor: "end",
        backgroundColor: "#6366F1",
        borderRadius: 4,
        color: "white",
        font: {
          weight: "bold",
        },
        formatter: function (value) {
          return value.toFixed(2);
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yMin: averagePrice,
            yMax: averagePrice,
            borderColor: "#212509",
            borderWidth: 1,
            borderDash: [6, 6], // This makes the line dotted
            label: {
              display: true,
              content: `${averagePrice.toFixed(2)}`,
              backgroundColor: "#212529",
              color: "white",
              align: "left",
              anchor: "end",
           
            },
          },
        },
      },
    },
  };

  return (
    <div className="w-11/12 mx-auto mt-6">
      <Line data={data} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default ChartComponent;