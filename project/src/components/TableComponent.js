import HeadComponent from "./Header";
import { Button, Table, Checkbox, Tabs } from "antd";
import SubHead from "./SubHead";
import TableMenu from "./MenuTable";
import { styled } from "styled-components";
import PlusSVG from "../svg/plusSVG";
import TabComponent from "./TabComponent";
import { useState } from "react";
import LineGraph from "./GraphData";
import ChartComponent from "./GraphData";
import ChartComp from "./Line";
import { MainPage } from "./StylePage/StyleComponent";
import { data } from "./TableData/DataContainer";
import { Data, DataOptions, StyledTab } from "./StylePage/StyleComponent";
import HardDriveSVG from "../svg/HardDriveSVG";
import ProcessedSvg from "../svg/ProcessedSvg";
import UnCollectedSVG from "../svg/uncollectedSVG";
import UnSubscribeSVG from "../svg/UnSubscribeSVG";
import MappedSVG from "../svg/MappedSVG";
import ArchiveSVG from "../svg/ArchiveSVG";
import CorruptSVG from "../svg/CorruptSVG";
import IgnoreSVG from "../svg/IgnoreSVG";
import DuplicateSVG from "../svg/DuplicateSVG";
import GetData from "./GetData";

const columns = [
  {
    title: <Checkbox />,
    dataIndex: "checkbox",
    key: "checkbox",
  },
  {
    title: "AgentInfo",
    dataIndex: "agentInfo",
    key: "agentInfo",
  },
  {
    title: "CustomerInfo",
    dataIndex: "customerinfo",
    key: "customerinfo",
  },
  {
    title: "Transaction ID",
    dataIndex: "transactionid",
    key: "transactionid",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];

const items = [
  {
    key: "1",
    label: (
      <Data>
        <span>
          <HardDriveSVG />
        </span>
        <span>Mis matches</span>
      </Data>
    ),
    columns: [],
    tableData: [],
    content: false,
  },
  {
    key: "2",
    label: (
      <Data>
        <span>
          <ProcessedSvg />
        </span>
        <DataOptions>Processed</DataOptions>
      </Data>
    ),
    columns: [],
    tableData: [],
  },
  {
    key: "3",
    label: (
      <Data>
        <span>
          <UnCollectedSVG />
        </span>
        <DataOptions>Uncollected</DataOptions>
      </Data>
    ),
    columns: columns,
    tableData: data,
  },
  {
    key: "4",
    label: (
      <Data>
        <span>
          <UnSubscribeSVG />
        </span>
        <DataOptions>Unsubscribed</DataOptions>
      </Data>
    ),
    columns: [],
    tableData: [],
  },
  {
    key: "5",
    label: (
      <Data>
        <span>
          <MappedSVG />
        </span>
        <DataOptions>Mapped</DataOptions>
      </Data>
    ),
    columns: [],
    tableData: [],
  },
  {
    key: "6",
    label: (
      <Data>
        <span>
          <ArchiveSVG />
        </span>
        <DataOptions>Archived</DataOptions>
      </Data>
    ),
    columns: [],
    tableData: [],
  },
  {
    key: "7",
    label: (
      <Data>
        <span>
          <CorruptSVG />
        </span>
        <DataOptions>Corrupt</DataOptions>
      </Data>
    ),
    columns: [],
    tableData: [],
  },
  {
    key: "8",
    label: (
      <Data>
        <span>
          <IgnoreSVG />
        </span>
        <DataOptions>Ignored</DataOptions>
      </Data>
    ),
    columns: [],
    tableData: [],
  },
  {
    key: "9",
    label: (
      <Data>
        <span>
          <DuplicateSVG />
        </span>
        <DataOptions>Duplicate</DataOptions>
      </Data>
    ),
    columns: [],
    tableData: [],
  },
];

const TableComponent = () => {
  const [activeKey, setActiveKey] = useState(items[0].key);

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const activeItem = items.find((item) => item.key === activeKey);

  return (
    <div>
      <MainPage>
        <HeadComponent />
        <SubHead />
        <StyledTab defaultActiveKey={activeKey} onChange={handleTabChange}>
          {items.map((item) => (
            <StyledTab.TabPane tab={item.label} key={item.key}>
              <Table
                dataSource={item.tableData}
                columns={[
                  { title: <Checkbox />, dataIndex: "checkbox" },
                  { title: "AgentInfo", dataIndex: "agentInfo" },
                  { title: "CustomerInfo", dataIndex: "customerinfo" },
                  { title: "Date", dataIndex: "date" },
                  { title: "Transaction ID", dataIndex: "transactionid" },
                  { title: "Date", dataIndex: "date" },
                  { title: "Actions", dataIndex: "actions" },
                ]}
              />
            </StyledTab.TabPane>
          ))}
        </StyledTab>
        <ChartComp />
        <GetData />
      </MainPage>
    </div>
  );
};

export default TableComponent;
