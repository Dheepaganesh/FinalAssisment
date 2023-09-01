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
import { MainMenu,Data,DataOptions,SelectedOption,SelectedMenu } from "./StylePage/StyleComponent";

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
