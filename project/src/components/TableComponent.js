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

const MainPage = styled.div`
  margin: 0%;
  padding: 0px;
  width: 1220px;
  height: 723px;
  font-family: "SF Pro Display", sans-serif;
  border: 1px solid #a3adb8;
  background-color: rgb(248, 248, 249);

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StyledTab = styled(Tabs)`
  width: 1181px;
  height: 46px;
  background: #fff;
  margin-left: 21px;
  margin-right: 21px;

  .ant-tabs-nav-list {
    padding-left: 10px;
  }
`;

const StyledTable = styled(Table)`
  width: 1181px;
  height: 553px;
  border: 0.01px solid black;
  margin-left: 21px;
  margin-right: 21px;
  border: none;
  border-radius: 0;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

  .ant-table-wrapper,
  .ant-table,
  .ant-table-thead > tr > th {
    border-radius: 0 !important;
  }

  .ant-table-thead th {
    border: none;
  }

  .ant-table-thead tr {
    padding: 12px 20px;
    align-items: flex-start;
    gap: 34px;
  }

  .ant-table-thead tr .ant-table-cell {
    padding: 12px 15px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #e4e7ea;
    border: none;
  }

  @media (max-width: 400px) {
    width: 100%;
    margin: 0;
    overflow: auto;
    max-height: 400px;

    .ant-table {
      width: 100%;
    }

    .ant-table-thead tr {
      padding: 12px 20px;
      width: 400px;
      align-items: flex-start;
      gap: 2px;
    }

    .ant-table-thead tr .ant-table-cell {
      padding: 12px 15px;
      justify-content: center;
      align-items: center;
      gap: 2px;
      background-color: #e4e7ea;
      border: none;
      font-size: 5px;
    }

    .ant-table-tbody {
      background-color: white;
    }
  }
`;

const CheckBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 400px) {
    gap: 5px;
  }
`;

const CustomerName = styled.div`
  color: var(--grey-s-20, #3a4a5b);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 400px) {
    font-size: 9px;
  }
`;

const CustomerMail = styled.div`
  color: var(--grey-t-35, #8895a3);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 400px) {
    font-size: 7px;
  }
`;

const ReSubscribeButton = styled(Button)`
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: #e4e7ea;

  @media (max-width: 400px) {
    display: flex;
    padding: 0.5px 1px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: #e4e7ea;
    font-size: 5px;
  }
`;

const NoContainer = styled.div`
  width: 16px;
  height: 16px;
  border: 1px white;
  background: white;
`;

const PlusContainer = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid var(--grey-grey-5, #d9d9d9);
  background: var(--grey-grey-1, #fff);

  svg {
    width: 10px;
    height: 10px;
    margin: 3px;
  }
`;

const Users = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const Info = styled.div`
  color: var(--grey-s-20, #3a4a5b);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 400px) {
    font-size: 6px;
    color: var(--grey-s-20, #3a4a5b);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
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

const data = [
  {
    key: "1",
    checkbox: <Checkbox />,
    agentInfo: (
      <CheckBoxStyle>
        <PlusContainer>
          <PlusSVG />
        </PlusContainer>
        <InfoContainer>
          <CustomerName>Chris John</CustomerName>
          <CustomerMail>chrisjohn@gmail.com</CustomerMail>
        </InfoContainer>
      </CheckBoxStyle>
    ),
    customerinfo: <Info>Multiple Customer</Info>,
    transactionid: <Info>Mulitple Transaction</Info>,
    date: <Info>Multiple Date</Info>,
    actions: <ReSubscribeButton>Resubscribe</ReSubscribeButton>,
  },
  {
    key: "2",
    checkbox: <Checkbox />,
    agentInfo: (
      <CheckBoxStyle>
        <PlusContainer>
          <PlusSVG />
        </PlusContainer>
        <InfoContainer>
          <CustomerName>Cameron White</CustomerName>
          <CustomerMail>cameronwhite@gmail.com</CustomerMail>
        </InfoContainer>
      </CheckBoxStyle>
    ),
    customerinfo: <Info>Multiple Customer</Info>,
    transactionid: <Info>Mulitple Transaction</Info>,
    date: <Info>Multiple Date</Info>,
    actions: <ReSubscribeButton>Resubscribe</ReSubscribeButton>,
  },
  {
    key: "3",
    checkbox: <Checkbox />,
    agentInfo: (
      <CheckBoxStyle>
        <NoContainer></NoContainer>
        <InfoContainer>
          <CustomerName>Helly Shaw</CustomerName>
          <CustomerMail>helly.shaw@gmail.com</CustomerMail>
        </InfoContainer>
      </CheckBoxStyle>
    ),
    customerinfo: (
      <Users>
        <Info>Adam Heaven</Info>
        <CustomerMail>adam@gmail.com</CustomerMail>
      </Users>
    ),
    transactionid: <Info>MD1-Z8Q-AC3</Info>,
    date: <Info>Dec 29, 2020</Info>,
    actions: <ReSubscribeButton>Resubscribe</ReSubscribeButton>,
  },
  {
    key: "4",
    checkbox: <Checkbox />,
    agentInfo: (
      <CheckBoxStyle>
        <NoContainer></NoContainer>
        <InfoContainer>
          <CustomerName>Kevin Peterson</CustomerName>
          <CustomerMail>kevin@example.com</CustomerMail>
        </InfoContainer>
      </CheckBoxStyle>
    ),
    customerinfo: (
      <Users>
        <Info>Misty Mayor</Info>
        <CustomerMail>mayor01@gmail.com</CustomerMail>
      </Users>
    ),
    transactionid: <Info>MD1-Z8Q-AC3</Info>,
    date: <Info>Dec 29, 2020</Info>,
    actions: <ReSubscribeButton>Resubscribe</ReSubscribeButton>,
  },
  {
    key: "5",
    checkbox: <Checkbox />,
    agentInfo: (
      <CheckBoxStyle>
        <PlusContainer>
          <PlusSVG />
        </PlusContainer>
        <InfoContainer>
          <CustomerName>Brooklyn Simmons</CustomerName>
          <CustomerMail>simmons@example.com</CustomerMail>
        </InfoContainer>
      </CheckBoxStyle>
    ),
    customerinfo: <Info>Multiple Customer</Info>,
    transactionid: <Info>Mulitple Transaction</Info>,
    date: <Info>Multiple Date</Info>,
    actions: <ReSubscribeButton>Resubscribe</ReSubscribeButton>,
  },
  {
    key: "6",
    checkbox: <Checkbox />,
    agentInfo: (
      <CheckBoxStyle>
        <PlusContainer>
          <PlusSVG />
        </PlusContainer>
        <InfoContainer>
          <CustomerName>Hezal Shane</CustomerName>
          <CustomerMail>hezal.shane@example.com</CustomerMail>
        </InfoContainer>
      </CheckBoxStyle>
    ),
    customerinfo: <Info>Multiple Customer</Info>,
    transactionid: <Info>Mulitple Transaction</Info>,
    date: <Info>Multiple Date</Info>,
    actions: <ReSubscribeButton>Resubscribe</ReSubscribeButton>,
  },
];

const items = [
  {
    key: "1",
    label: "New Mismatched",
    columns: [],
    tableData: [],
    content: false,
  },
  {
    key: "2",
    label: "Processed",
    columns: [],
    tableData: [],
  },
  {
    key: "3",
    label: "UnCollected",
    columns: columns,
    tableData: data,
  },
  {
    key: "4",
    label: "UnSubscribed",
    columns: [],
    tableData: [],
  },
  {
    key: "5",
    label: "Mapped",
    columns: [],
    tableData: [],
  },
  {
    key: "6",
    label: "Archived",
    columns: [],
    tableData: [],
  },
  {
    key: "7",
    label: "Corrupt",
    columns: [],
    tableData: [],
  },
  {
    key: "8",
    label: "Ignored",
    columns: [],
    tableData: [],
  },
  {
    key: "9",
    label: "Duplicate",
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
    <MainPage>
      {/* <HeadComponent />
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
      </StyledTab> */}
      {/* <ChartComponent /> */}
      <ChartComp />
    </MainPage>
  );
};

export default TableComponent;
