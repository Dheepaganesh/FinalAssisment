import { Table, Tabs } from "antd";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { UserData } from "./GraphComponent";
import { EmptyTable, GraphContainer } from "./StylePage/StyleComponent";
import { styled } from "styled-components";
import { AiFillStar } from "react-icons/ai";
import StarSVG from "../svg/StarSVG";
export const Record = styled.div`
  width: 742.042px;
  height: 507px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 570px;
  border-radius: 4px;
  border: 1px solid #e4e7ea;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);
`;

export const RecordHeader = styled.div`
  width: 742.042px;
  height: 66px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 20px;
  border: 0.02px solid #e4e7ea;
  border-top: none;
  border-left: none;
  border-right: none;
`;

export const HeaderTitle = styled.div`
  color: #324050;
  margin-top: 20px;
  margin-bottom: 22px;
  margin-left: 18.6px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Headermenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  color: #1b63a9;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MenuBars = styled.div`
  padding-top: 30px;
  padding-bottom: 15px;
  padding-right: 17px;
`;

export const Star = styled(AiFillStar)`
  color: rgb(45, 179, 222);
  width: 27px;
  height: 27px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const StarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgb(204, 243, 253);
  margin-top: 16px;
  margin-left: 29.37px;
`;

export const RatingView = styled.div`
  width: 742px;
  height: 115px;
  border: 1px solid #e4e7ea;
  display: flex;
  background-color: white;
  border-bottom: none;
  border-left: none;
  border-right: none;
  flex-direction: row;
  gap: 14px;
`;

export const RatingContent = styled.div`
  display: flex;
  width: 481.642px;
  height: 86px;
  background-color: pastel;
`;

export const CustomerCount = styled.div`
  color: #0d3155;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Opinion = styled.div`
  width: 418.011px;
  margin-top: 10px;
  height: 86px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const RatingInfo = styled.div`
  color: #415367;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.28px;
`;

export const GraphDiv = styled.div`
  width: 704.842px;
  height: 340px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
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
        //[100,100,100,112,122,127,140,160,190,230,270]
        data: [100, 100, 100, 112, 122, 127, 140, 160, 190, 230, 270],
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 2,
        backgroundColor: (colorSet) => {
          const bgColor = [
            "rgba(53, 162, 235,0.4)",
            "rgba(53, 162, 235,0.01)",
            "rgba(53, 162, 235,0)",
          ];

          if (!colorSet.chart.chartArea) {
            return;
          }
          const {
            ctx,
            data,
            chartArea: { bottom, top, left },
          } = colorSet.chart;
          const gradientBG = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBG.addColorStop(0, bgColor[0]);
          gradientBG.addColorStop(1, bgColor[1]);
          gradientBG.addColorStop(1, bgColor[2]);
          return gradientBG;
        },
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
        text: "",
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
          display: true,
        },
      },
    },
  };

  return (
    <Record>
      <RecordHeader>
        <HeaderTitle>Rank Overview</HeaderTitle>
        <Headermenu>
          <MenuBars>Week</MenuBars>
          <MenuBars>Home</MenuBars>
          <MenuBars>Week</MenuBars>
          <MenuBars>Year</MenuBars>
        </Headermenu>
      </RecordHeader>
      <GraphDiv>
        <Line data={userData} options={options} height={200} width={420} />
      </GraphDiv>
      {/* <div style={{ width: "800px", height: "400px", margin: "0 auto" }}>

        </div> */}
      <RatingView>
        {/* <StarContainer>
          <Star />
        </StarContainer> */}
        <RatingContent>
          <StarSVG />
          <Opinion>
            <CustomerCount>156</CustomerCount>
            <RatingInfo>
              You are in top <span>5%</span>
            </RatingInfo>
            <RatingInfo>You are ranked 156 of 2,612</RatingInfo>
          </Opinion>
        </RatingContent>
      </RatingView>
    </Record>
  );
};

export default ChartComp;
