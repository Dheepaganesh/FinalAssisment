import { styled } from "styled-components";
import { Tabs,Table,Button } from "antd";
import { Line } from "react-chartjs-2";
export const MainPage = styled.div`
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

export const StyledTab = styled(Tabs)`
  width: 1181px;
  height: 70px;
  background: #fff;
  margin-left: 21px;
  margin-right: 21px;

  .ant-tabs-nav-list {
    padding-left: 10px;
  }
`;

export const StyledTable = styled(Table)`
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

export const CheckBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 400px) {
    gap: 5px;
  }
`;

export const CustomerName = styled.div`
  color: var(--grey-s-20, #3a4a5b);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 400px) {
    font-size: 9px;
  }
`;

export const CustomerMail = styled.div`
  color: var(--grey-t-35, #8895a3);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 400px) {
    font-size: 7px;
  }
`;

export const ReSubscribeButton = styled(Button)`
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

export const NoContainer = styled.div`
  width: 16px;
  height: 16px;
  border: 1px white;
  background: white;
`;

export const PlusContainer = styled.div`
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

export const Users = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const Info = styled.div`
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


export const Data = styled.div`
  display: flex;
  padding: 12px 15px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media (max-width: 400px) {
    padding: 7px 9px;
    width: 45px;
    gap: 3px;
    color: var(--grey-t-50, #a3adb8);

    svg {
      width: 10px;
      height: 10px;
    }
  }
`;

export const DataOptions = styled.div`
  display: flex;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  gap: 5px;

  @media (max-width: 400px) {
    font-size: 8px;
    gap: 2px;
    font-weight: 600;
    color: var(--grey-t-50, #a3adb8);
  }
`;

export const SelectedOption = styled.span`
  color: #1b63a9;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: 400px) {
    padding-top: 1px;
    font-size: 8px;
    font-weight: 600;
    color: #1b63a9;
  }
`;

export const SelectedMenu = styled.div`
  width: 133px;
  height: 24px;
  display: flex;
  padding: 12px 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  gap: 10px;
  border: 3px solid #1b63a9;
  border-top: none;
  border-left: none;
  border-right: none;

  @media (max-width: 400px) {
    padding: 7px 9px;
    width: 45px;
    gap: 3px;
    color: var(--grey-t-50, #a3adb8);

    svg {
      margin-top: 8px;
      width: 10px;
      height: 10px;
    }
  }
`;

export const MainMenu = styled.div`
  width: 1160px;
  height: 50px;
  margin-left: 21px;
  margin-right: 21px;
  display: flex;
  padding: 0px 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
  background: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

  @media (max-width: 400px) {
    width: 97%;
    margin: 0;
    height: auto;
    padding: 0px 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const StyledTabs = styled(Tabs)`
  width: 1160px;
  height:70px;
  background: #fff;

  .ant-tabs{
    height:70px; 
  }

  .ant-tabs .ant-tabs-tab+.ant-tabs-tab{
    margin: 0 0 0 10px;
  }

  .ant-tabs-content .ant-tabs-content-top{
    margin-top:-12px;
  }
`;

export const GraphStyle = styled(Line)`
  width:500px;
`
export const EmptyTable = styled(Table)`
width:600px;
height:800px;
`
export const GraphContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;

`