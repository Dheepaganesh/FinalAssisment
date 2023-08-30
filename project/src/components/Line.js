import { Tabs } from "antd";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const ChartComp = () => {
  const [userData, setUserData] = useState({
    labels: [
      "01 Feb",
      "03 Feb",
      "06 Feb",
      "09 Feb",
      "12 Feb",
      "15 Feb",
      "18 Feb",
      "21 Feb",
      "24 Jan",
      "27 Jan",
      "Today",
    ],
    datasets: [
      {
        label: "datas graph2",
        data: [
          null,
          1000,
          1000,
          1200,
          1400,
          1800,
          2200,
          2600,
          3200,
          3800,
          5000,
        ],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Line Chart with Interpolation",
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  return (
    <div>
      <div>
        <div>Rank Overview</div>
      </div>
      <Line data={userData} options={options} />
    </div>
  );
};

export default ChartComp;
