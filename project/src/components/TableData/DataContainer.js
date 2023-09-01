import Checkbox from "antd/es/checkbox/Checkbox";
import PlusSVG from "../../svg/plusSVG";
import { CheckBoxStyle,PlusContainer,InfoContainer,CustomerMail,CustomerName,Info,ReSubscribeButton,NoContainer,Users } from "../StylePage/StyleComponent";

export const data = [
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