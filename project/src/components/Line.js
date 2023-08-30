import { Table, Tabs } from "antd";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { UserData } from "./GraphComponent";
import { EmptyTable,GraphContainer } from "./StylePage/StyleComponent";

const ChartComp = () => {
  const [userData, setUserData] = useState({
    labels: [
      "",
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
    ],
    datasets: [
      {
        label: "",
        data: [
          250,250,250,238,228,213,200,180,110,150,70,70
        ],
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 2, 
        backgroundColor:(colorSet)=>{
          const bgColor = ["rgba(53, 162, 235,0.4)","rgba(53, 162, 235,0.01)","rgba(53, 162, 235,0)"];

          if(!colorSet.chart.chartArea){
            return;
          }
          console.log(colorSet.chart.chartArea)
          const {ctx,data,chartArea:{bottom,top,left}} = colorSet.chart;
          const gradientBG = ctx.createLinearGradient(300,top,0,bottom);
          gradientBG.addColorStop(0,bgColor[0])
          gradientBG.addColorStop(0.5,bgColor[1])
          gradientBG.addColorStop(1,bgColor[2])
          return gradientBG;
        } ,
        fill: true,
        tension: 0,
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
        grid: {
          display: false, 
        },
      },
      y: {
        beginAtZero: false,
        reverse: false,
        min: 50,
        max: 300,
        title: {
          display: true,
          text: "Value",
        },

        grid: {
          display: false, 
        }
      },
    },
  };

  return (
    <GraphContainer>
      <div>Record</div>
      <div>
        <Tabs>
          <Tabs.TabPane key={"Week"} tab={"Week"} >
          <div style={{ width: "600px", height: "600px" }}>
          <Line data={userData} options={options} />
          </div>
          </Tabs.TabPane>
          <Tabs.TabPane key={"Month"} tab={"Month"} >
          <EmptyTable/>
          </Tabs.TabPane>
          <Tabs.TabPane key={"Year"} tab={"Year"} >
          <EmptyTable/>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </GraphContainer>
  );
};

export default ChartComp;
