import { Button } from "antd";
import SearchSVG from "../svg/SearchSVG";
import { styled } from "styled-components";
import ThreeDot from "../svg/ThreeDotSVG";
import DownloadSVG from "../svg/DownloadSVG";

const SubLayout = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`

const Export = styled(Button)`
  background: #e4e7ea;
  width: 84px;
  height: 32px;
  font-size: 13px;
  border-radius:3px;
  gap:9px;

  svg{
    width: 10.871px;
    height: 14px;
    margin-right:9px;
  }
`;

const SearchContainer = styled.div`
width: 32px;
height: 32px;
border-radius:16px;
background-color:#F0F2F4;

svg{
  padding-top:8px;
  margin-bottom:8px;
  margin-left:8px;
  margin-right:8px;
}
`

const SideOption = styled.div`
display:flex;
gap:15px;`

const SubHead = () => {
  return (
    <SubLayout>
      <SearchContainer>
        <SearchSVG />
      </SearchContainer>
      <SideOption>
        <Export><DownloadSVG/><span>Export</span></Export>
        <SearchContainer><ThreeDot/></SearchContainer>
      </SideOption>
    </SubLayout>
  );
};

export default SubHead;
