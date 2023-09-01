import { styled } from "styled-components";

const SvgStyle = styled.svg`
  width: 1.5px;
  height: 1.5px;
  flex-shrink: 0;
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 1.5px;
  padding-right: 1.5px;
`;

const ThreeDot = () => {
  return (
    <SvgStyle
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
    >
      <path
        d="M1.75 2.5C2.16421 2.5 2.5 2.16421 2.5 1.75C2.5 1.33579 2.16421 1 1.75 1C1.33579 1 1 1.33579 1 1.75C1 2.16421 1.33579 2.5 1.75 2.5Z"
        stroke="#637487"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgStyle>
  );
};

export default ThreeDot;
