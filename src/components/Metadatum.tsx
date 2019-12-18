import React, { FC } from "react";
import styled from "@emotion/styled";

import { space } from "../styleConstants";

const Container = styled.div`
  display: grid;
  font-size: 0.75rem;

  ::before {
    content: attr(title);
    display: block;
    padding: ${space / 4}px ${space / 2}px;
    background: #555;
    color: white;
    @media (prefers-color-scheme: dark) {
      background: #0003;
    }
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
