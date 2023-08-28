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

const SelectedDiv = styled.div`
  display: flex;
  padding: 12px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #1b63a9;
  border: 3px solid #1b63a9;
  border-top: none;
  border-left: none;
  border-right: none;
`;

const MainMenuDiv = styled.div`
  display: flex;
  padding: 0px 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`;

const TableMenu = () => {
  return (
    <MainMenuDiv>
      <Div>
        <span>
          <HardDriveSVG />
        </span>
        <span>New Mismatches</span>
      </Div>
      <Div>
        <span>
          <ProcessedSvg />
        </span>
        <span>Processed</span>
      </Div>
      <SelectedDiv>
        <span>
          <UnCollectedSVG />
        </span>
        <span>UnCollected</span>
      </SelectedDiv>
      <Div>
        <span>
          <UnSubscribeSVG />
        </span>
        <span>UnSubscribed</span>
      </Div>
      <Div>
        <span>
          <MappedSVG />
        </span>
        <span>Mapped</span>
      </Div>
      <Div>
        <span>
          <ArchiveSVG />
        </span>
        <span>Archived</span>
      </Div>
      <Div>
        <span>
          <CorruptSVG />
        </span>
        <span>Corrupt</span>
      </Div>
      <Div>
        <span>
          <IgnoreSVG />
        </span>
        <span>Ignored</span>
      </Div>
      <Div>
        <span>
          <DuplicateSVG />
        </span>
        <span>Duplicate</span>
      </Div>
    </MainMenuDiv>
  );
};

export default TableMenu;
