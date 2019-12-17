import styled from "@emotion/styled";

import { colors, headerHeight, breakpoints } from "../styleConstants";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${colors.primary};
  font-weight: bold;
  text-align: center;
  background: #fffc;
  backdrop-filter: blur(10px);
  z-index: 10000000000;
  height: ${headerHeight.mobile}px;

  @media (prefers-color-scheme: dark) {
    background: #111c;
  }

  @media (min-width: ${breakpoints.tablet}px) {
    height: ${headerHeight.default}px;
    font-size: 2rem;
  }
`;

export default Header;
