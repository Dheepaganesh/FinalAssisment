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
const Data = styled.div`
  display: flex;
  padding: 12px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #a3adb8;

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

const DataOptions = styled.div`
  display: flex;
  color: var(--grey-t-50, #a3adb8);
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

const SelectedOption = styled.span`
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

const SelectedMenu = styled.div`
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
  color: #1b63a9;
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

const MainMenu = styled.div`
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

const TableMenu = () => {
  return (
    <MainMenu>
      <Data>
        <span>
          <HardDriveSVG />
        </span>
        <DataOptions>
          <span>New</span>
          <span>Mismatches</span>
        </DataOptions>
      </Data>
      <Data>
        <span>
          <ProcessedSvg />
        </span>
        <DataOptions>Processed</DataOptions>
      </Data>
      <SelectedMenu>
        <span>
          <UnCollectedSVG />
        </span>
        <SelectedOption>UnCollected</SelectedOption>
      </SelectedMenu>
      <Data>
        <span>
          <UnSubscribeSVG />
        </span>
        <DataOptions>UnSubscribed</DataOptions>
      </Data>
      <Data>
        <span>
          <MappedSVG />
        </span>
        <DataOptions>Mapped</DataOptions>
      </Data>
      <Data>
        <span>
          <ArchiveSVG />
        </span>
        <DataOptions>Archived</DataOptions>
      </Data>
      <Data>
        <span>
          <CorruptSVG />
        </span>
        <DataOptions>Corrupt</DataOptions>
      </Data>
      <Data>
        <span>
          <IgnoreSVG />
        </span>
        <DataOptions>Ignored</DataOptions>
      </Data>
      <Data>
        <span>
          <DuplicateSVG />
        </span>
        <DataOptions>Duplicate</DataOptions>
      </Data>
    </MainMenu>
  );
};

export default TableMenu;
