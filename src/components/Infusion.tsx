import React, { FC, useMemo } from "react";
import styled from "@emotion/styled";
import { FormattedDate, FormattedTime, useIntl } from "react-intl";

import { Query } from "../generated/graphql";
import { space, breakpoints } from "../styleConstants";
import Metadatum from "./Metadatum";
import { getTwoDaysAgo } from "../util/getTwoDaysAgo";
import { DateContainer } from "./DateContainer";
import { DateElement } from "./DateElement";
import { Time } from "./Time";
import { Metadata } from "./Metadata";

type InfusionProps = {} & Query["Infusion"];

const Container = styled.div`
  padding: ${space}px;
  padding-bottom: 0;
  box-shadow: 0 2px 10px #0002;
  border: 1px solid #0002;
  display: grid;
  gap: ${space}px;
  border-radius: 2px;

  :last-of-type {
    margin-bottom: ${space}px;
  }

  @media (min-width: ${breakpoints.tablet}px) {
    grid-template-columns: auto 40%;
    padding-bottom: ${space}px;
  }
  @media (prefers-color-scheme: dark) {
    border-color: #2d2b2a;
    color: white;
  }
`;

const Infusion: FC<InfusionProps> = ({ infusedAt, units, serialNumber }) => {
  const { formatMessage } = useIntl();
  const isRecent = useMemo(() => new Date(infusedAt).getTime() > getTwoDaysAgo(), [infusedAt]);
  return (
    <Container>
      <DateContainer>
        <DateElement isRecent={isRecent}>
          <FormattedDate month="long" year="numeric" day="numeric" value={infusedAt} />
        </DateElement>
        <Time>
          <FormattedTime hour12={false} hour="2-digit" minute="numeric" second="numeric" value={infusedAt} />
        </Time>
      </DateContainer>
      <Metadata>
        <Metadatum title={formatMessage({ id: "units" })}>{units}</Metadatum>
        <Metadatum title={formatMessage({ id: "serialNumber" })}>{serialNumber}</Metadatum>
      </Metadata>
    </Container>
  );
};

export default Infusion;
