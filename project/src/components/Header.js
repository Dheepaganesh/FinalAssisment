import { styled } from "styled-components";
import HambergerSVG from "../svg/Hamberger";
import BreadCrumbSVG from "../svg/BreadCrumb";
import { Button } from "antd";
import CompassSVG from "../svg/CompassSVG";
import BellSVG from "../svg/BellSVG";
import ProfilePhoto from "../Images/Profile.png";
import DropDown from "../svg/DropDown";
import DropDownSVG from "../svg/DropDown";

const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 0;
  box-shadow: 0.08px 0.08px #a3adb8;
  background-color: rgb(255, 255, 255);

  @media (max-width: 400px) {
    width: 100%;
    height: auto;
    flex-flow: column;
  }
`;

const Directory = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  gap: 20px;

  @media (max-width: 400px) {
    margin-left: 10px;
    gap: 10px;
  }
`;
const DirectoryMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin-top: 14px;
  margin-bottom: 13px;
`;

const MisMatch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MisMatchHeader = styled.span`
  color: var(--grey-s-10, #415367);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.18px;
  text-transform: capitalize;
`;
const LocationRoute = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const RouteMenu = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const Route = styled.span`
  color: var(--blue-t-15, #3d7ab6);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
`;

const CurrentRoute = styled.span`
  color: var(--grey-s-10, #415367);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
`;

const Options = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 17px;
  margin-bottom: 17px;
  margin-left: 446px;
  margin-right: 20px;

  @media (max-width: 400px) {
    margin-left: 0px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const DefaultButton = styled(Button)`
  border-radius: 2px;
  border: 1px solid var(--blue-t-65, #afc8e1);
  background: var(--blue-t-92, #edf3f8);
  color: #1b63a9;
  display: flex;
  padding: 5px 14px 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SVGBackground = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #f0f2f4;

  svg {
    margin-top: 7.87px;
    margin-left: 8.47px;
    margin-right: 7.53px;
    margin-bottom: 8.13px;
  }
`;
const LineDiv = styled.div`
  width: 1px;
  height: 20px;
  background: #d1d6dc;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
`;
const ProfileInfo = styled.div`
  width: 106px;
  display: flex;
`;
const ProfileRole = styled.div`
  margin-top: 3px;
  color: var(--grey-t-50, #a3adb8);
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
  text-transform: capitalize;
`;

const ProfileName = styled.span`
  color: var(--grey-100, #485c72);
  text-align: right;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
`;
const Profilename = styled.span`
  color: var(--grey-100, #485c72);
  text-align: right;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
  margin-left: 4px;
`;

const DownIconStyle = styled.span`
  margin-left: 10px;
`;

const HeadComponent = () => {
  return (
    <Header>
      <Directory>
        <HambergerSVG />
        <DirectoryMenu>
          <MisMatch>
            <MisMatchHeader>MisMatch</MisMatchHeader>
          </MisMatch>
          <LocationRoute>
            <RouteMenu>
              <Route>Organization</Route>
            </RouteMenu>
            <span>
              <BreadCrumbSVG />
            </span>
            <RouteMenu>
              <Route>Accounts</Route>
            </RouteMenu>
            <span>
              <BreadCrumbSVG />
            </span>
            <RouteMenu>
              <Route>Dashboard</Route>
            </RouteMenu>
            <span>
              <BreadCrumbSVG />
            </span>
            <RouteMenu>
              <CurrentRoute>Organization</CurrentRoute>
            </RouteMenu>
          </LocationRoute>
        </DirectoryMenu>
      </Directory>
      <Options>
        <DefaultButton>Default</DefaultButton>
        <SVGBackground>
          <CompassSVG />
        </SVGBackground>
        <SVGBackground>
          <BellSVG />
        </SVGBackground>{" "}
        <LineDiv></LineDiv>
        <Profile>
          <ProfileContainer>
            <img src={ProfilePhoto} alt="ProfilePhoto" />
          </ProfileContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "3px;",
            }}
          >
            <ProfileInfo>
              <ProfileName>Bessie</ProfileName>
              <Profilename>Copper</Profilename>
              <DownIconStyle>
                <DropDownSVG />
              </DownIconStyle>
            </ProfileInfo>
            <ProfileRole>Org Manger</ProfileRole>
          </div>
        </Profile>
      </Options>
    </Header>
  );
};

export default HeadComponent;
