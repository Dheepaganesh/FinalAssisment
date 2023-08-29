import HeadComponent from "./Header";
import { Button, Switch, Table, Checkbox } from "antd";
import SubHead from "./SubHead";
import TableMenu from "./MenuTable";
import { styled } from "styled-components";
import PlusSVG from "../svg/plusSVG";

const MainPage = styled.div`
  margin: 0%;
  padding: 0px;
  width: 1220px;
  height: auto;
  font-family: "SF Pro Display", sans-serif;
  border: 1px solid #a3adb8;
  background-color: rgb(248, 248, 249);

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StyledTable = styled(Table)`
  width: 1181px;
  border: 0.01px solid black;
  margin: 0 auto;
  border: none;
  border-radius: 0;

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
`;

const CheckBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CustomerName = styled.div`
  color: var(--grey-s-20, #3a4a5b);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CustomerMail = styled.div`
  color: var(--grey-t-35, #8895a3);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ReSubscribeButton = styled(Button)`
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: #e4e7ea;
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

const TableComponent = () => {
  return (
    <MainPage>
      <HeadComponent />
      <SubHead />
      <TableMenu />
      <StyledTable columns={columns} dataSource={data} />
    </MainPage>
  );
};

export default TableComponent;
