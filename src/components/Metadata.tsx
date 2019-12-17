import styled from "@emotion/styled";

import { space, breakpoints } from "../styleConstants";

export const Metadata = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: 1fr 1fr;
  margin: 0 ${space * -1}px;

  @media (min-width: ${breakpoints.tablet}px) {
    gap: ${space}px;
    margin: ${space * -1}px;
    border-left: 1px solid #999;
    grid-template-columns: auto;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #2d2b2a;
  }
`;
