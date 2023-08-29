import { Button } from "antd";
import SearchSVG from "../svg/SearchSVG";
import { styled } from "styled-components";
import ThreeDot from "../svg/ThreeDotSVG";
import DownloadSVG from "../svg/DownloadSVG";

const SubLayout = styled.div`
  width: 1220px;
  height: 70px;
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 400px) {
    width: 400px;
  }
`;

const Export = styled(Button)`
  display: flex;
  background: #e4e7ea;
  padding: 0px;
  width: 84px;
  height: 32px;
  font-size: 13px;
  border-radius: 3px;
  gap: 9px;
`;

const ButtonValue = styled.div`
  margin-top: 7px;
  margin-bottom: 9px;
  margin-right: 10.6px;
  color: #242e39;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SearchContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #f0f2f4;
  margin-left: 20px;

  svg {
    padding-top: 8px;
    margin-bottom: 8px;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const SettingsContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #f0f2f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const SideOption = styled.div`
  display: flex;
  gap: 4px;
  margin-right: 20px;
  gap: 15px;
`;

const SubHead = () => {
  return (
    <SubLayout>
      <SearchContainer>
        <SearchSVG />
      </SearchContainer>
      <SideOption>
        <Export>
          <div>
            <DownloadSVG />
          </div>
          <ButtonValue>Export</ButtonValue>
        </Export>
        <SettingsContainer>
          <ThreeDot />
          <ThreeDot />
          <ThreeDot />
        </SettingsContainer>
      </SideOption>
    </SubLayout>
  );
};

export default SubHead;
