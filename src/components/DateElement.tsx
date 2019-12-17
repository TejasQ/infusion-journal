import styled from "@emotion/styled";

import { colors } from "../styleConstants";

export const DateElement = styled.div<{
  isRecent: boolean;
}>`
  font-size: 1.3rem;
  color: ${({ isRecent }) => (isRecent ? colors.success : "inherit")};
`;
