import { styled } from "styled-components";
import HardDriveSVG from "../svg/HardDriveSVG";
import ProcessedSvg from "../svg/ProcessedSvg";
import UnCollectedSVG from "../svg/uncollectedSVG";
import UnSubscribeSVG from "../svg/UnSubscribeSVG";
import MappedSVG from "../svg/MappedSVG";
import ArchiveSVG from "../svg/ArchiveSVG";
import CorruptSVG from "../svg/CorruptSVG";
import IgnoreSVG from "../svg/IgnoreSVG";
import DuplicateSVG from "../svg/DuplicateSVG";
const Div = styled.div`
  display: flex;
  padding: 12px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #a3adb8;
`;

const DataOptions = styled.span`
color: var(--grey-t-50, #A3ADB8);
text-align: center;
font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px; 
`

const SelectedDiv = styled.div`
  width:133px;
  height:24px;
  display: flex;
  padding: 12px 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px;
  gap: 10px;
  color: #1b63a9;
  border: 3px solid #1b63a9;
  border-top: none;
  border-left: none;
  border-right: none;
`;

const MainMenuDiv = styled.div`
width:1160px;
height:50px;
  display: flex;
  padding: 0px 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
  background: #FFF;
`;

const TableMenu = () => {
  return (
    <MainMenuDiv>
      <Div>
        <span>
          <HardDriveSVG />
        </span>
        <DataOptions>New Mismatches</DataOptions>
      </Div>
      <Div>
        <span>
          <ProcessedSvg />
        </span>
        <DataOptions>Processed</DataOptions>
      </Div>
      <SelectedDiv>
        <span>
          <UnCollectedSVG />
        </span>
        <DataOptions>UnCollected</DataOptions>
      </SelectedDiv>
      <Div>
        <span>
          <UnSubscribeSVG />
        </span>
        <DataOptions>UnSubscribed</DataOptions>
      </Div>
      <Div>
        <span>
          <MappedSVG />
        </span>
        <DataOptions>Mapped</DataOptions>
      </Div>
      <Div>
        <span>
          <ArchiveSVG />
        </span>
        <DataOptions>Archived</DataOptions>
      </Div>
      <Div>
        <span>
          <CorruptSVG />
        </span>
        <DataOptions>Corrupt</DataOptions>
      </Div>
      <Div>
        <span>
          <IgnoreSVG />
        </span>
        <DataOptions>Ignored</DataOptions>
      </Div>
      <Div>
        <span>
          <DuplicateSVG />
        </span>
        <DataOptions>Duplicate</DataOptions>
      </Div>
    </MainMenuDiv>
  );
};

export default TableMenu;
