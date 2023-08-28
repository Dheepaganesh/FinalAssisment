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
`;

const TableMenu = () => {
  return (
    <div>
      <div>
        <span>
          <HardDriveSVG />
        </span>
        <span>New Mismatches</span>
      </div>
      <div>
        <span>
          <ProcessedSvg />
        </span>
        <span>Processed</span>
      </div>
      <div>
        <span>
          <UnCollectedSVG />
        </span>
        <span>UnCollected</span>
      </div>
      <div>
        <span>
          <UnSubscribeSVG />
        </span>
        <span>UnSubscribed</span>
      </div>
      <div>
        <span>
          <MappedSVG />
        </span>
        <span>Mapped</span>
      </div>
      <div>
        <span>
          <ArchiveSVG />
        </span>
        <span>Archived</span>
      </div>
      <div>
        <span>
          <CorruptSVG />
        </span>
        <span>Corrupt</span>
      </div>
      <div>
        <span>
          <IgnoreSVG />
        </span>
        <span>Ignored</span>
      </div>
      <div>
        <span>
          <DuplicateSVG />
        </span>
        <span>Duplicate</span>
      </div>
    </div>
  );
};

export default TableMenu;
