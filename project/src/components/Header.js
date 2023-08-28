import { styled } from "styled-components";
import HambergerSVG from "../svg/Hamberger";
import BreadCrumbSVG from "../svg/BreadCrumb";
import { Button } from "antd";
import CompassSVG from "../svg/CompassSVG";
import BellSVG from "../svg/BellSVG";
import ProfilePhoto from "../Images/Profile.png";

const Header = styled.div`
  width: 1219px;
  height: 70px;
  background: #fff;
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 328px;
  height: 42px;
`;

const Para = styled.p`
  color: var(--grey-s-10, #415367);
  font-family: SF Pro Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.18px;
  text-transform: capitalize;
`;

const Menu1 = styled.div`
  display: flex;
`;

const Para1 = styled.p`
  color: var(--blue-t-15, #3d7ab6);
  font-family: SF Pro Display;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  display: flex;
  padding: 5px 14px 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 2px;
  border: 1px solid var(--blue-t-65, #afc8e1);
  background: var(--blue-t-92, #edf3f8);
  color: #1b63a9;
  margin-right: 15px;
`;

const LineDiv = styled.div`
  width: 1px;
  height: 20px;
  background-color: rgb(209, 214, 220);
`;

const HeadComponent = () => {
  return (
    <Header>
      <div>
        <div>
          <HambergerSVG />
        </div>
        <Menu>
          <div>
            <Para>Mismatches</Para>
          </div>
          <Menu1>
            <Para1>Organization</Para1>
            <BreadCrumbSVG />
            <Para1>Accounts</Para1>
            <BreadCrumbSVG />
            <Para1>DashBoard</Para1>
            <BreadCrumbSVG />
            <Para1>MisMatches</Para1>
          </Menu1>
        </Menu>
      </div>
      <div style={{ display: "flex" }}>
        <StyledButton>DEFAULT</StyledButton>
        <CompassSVG />
        <BellSVG />
        <LineDiv></LineDiv>
        <div>
          <div>
            <img src={ProfilePhoto} alt="Profile" />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Header>
  );
};

export default HeadComponent;
