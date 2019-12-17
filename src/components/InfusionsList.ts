import styled from "@emotion/styled";

import { space } from "../styleConstants";

const InfusionsList = styled.div`
  display: grid;
  align-content: flex-start;
  gap: ${space * 2}px;
  overflow: auto;
`;

export default InfusionsList;
