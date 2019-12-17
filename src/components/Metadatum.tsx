import React, { FC } from "react";
import styled from "@emotion/styled";

import { space } from "../styleConstants";

const Container = styled.div`
  display: grid;
  font-size: 0.75rem;

  ::before {
    content: attr(title);
    display: block;
    background: #0003;
    color: white;
    padding: ${space / 4}px ${space / 2}px;
  }
`;

const Content = styled.div`
  padding: ${space / 4}px ${space / 2}px;
`;

const Metadatum: FC<{ title: string }> = ({ title, children }) => (
  <Container title={title}>
    <Content>{children}</Content>
  </Container>
);

export default Metadatum;
