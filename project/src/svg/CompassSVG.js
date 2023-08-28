import { styled } from "styled-components";

const StyledSvg = styled.svg`
  width:16px;
  height:16px;
`


const CompassSVG = () => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <g clip-path="url(#clip0_4911_2294)">
        <path
          d="M8.47428 15.5377C12.1562 15.5377 15.141 12.5529 15.141 8.87101C15.141 5.18911 12.1562 2.20435 8.47428 2.20435C4.79239 2.20435 1.80762 5.18911 1.80762 8.87101C1.80762 12.5529 4.79239 15.5377 8.47428 15.5377Z"
          stroke="#637487"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.3008 6.04443L9.88746 10.2844L5.64746 11.6978L7.06079 7.45777L11.3008 6.04443Z"
          stroke="#637487"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4911_2294">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.474609 0.871094)"
          />
        </clipPath>
      </defs>
    </StyledSvg>
  );
};

export default CompassSVG;
