import { Button } from "antd";
import SearchSVG from "../svg/SearchSVG";
import { styled } from "styled-components";
import ThreeDot from "../svg/ThreeDotSVG";

const Export = styled(Button)`
  background: #e4e7ea;
  width: 84px;
  height: 32px;
  font-size: 13px;
`;

const SubHead = () => {
  return (
    <div>
      <div>
        <SearchSVG />
      </div>
      <div>
        <Export>&#x2193; Download</Export>
      </div>
      <div>
        <ThreeDot />
      </div>
    </div>
  );
};

export default SubHead;
