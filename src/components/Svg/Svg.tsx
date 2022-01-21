import styled, { css, keyframes } from "styled-components";
import { SvgProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinStyle = css`
  animation: ${rotate} 2s linear infinite;
`;

/* fill: ${({ theme, color }) => getThemeValue(`colors.${color}`, color)(theme)}; */
const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  
  flex-shrink: 0;
  ${({ spin }) => spin && spinStyle}
  ${'10px'/* space */}
`;

Svg.defaultProps = {
  color: "text",
  width: "20px",
  xmlns: "http://www.w3.org/2000/svg",
  spin: false,
};

export default Svg;
