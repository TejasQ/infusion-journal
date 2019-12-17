import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from "@emotion/styled";
import { DateRangePicker } from "react-date-range";
import { FormattedMessage } from "react-intl";

import Infusion from "./Infusion";
import { Query } from "../generated/graphql";
import Header from "./Header";
import { space, headerHeight, breakpoints } from "../styleConstants";
import Spinner from "./Spinner";
import InfusionsList from "./InfusionsList";
import { getLastWeek } from "../util/getLastWeek";

const Container = styled.div`
  display: grid;
  align-content: flex-start;
  gap: ${space}px;
  grid-template-rows: auto auto;
  width: 100%;
  margin: 0 auto;
  padding: ${space}px;
  padding-bottom: 0;
  height: 100vh;
  max-width: 1120px;
  padding-top: ${headerHeight.mobile}px;

  @media (min-width: ${breakpoints.desktop}px) {
    padding-top: ${headerHeight.default}px;
    grid-template-columns: 400px auto;
    grid-template-rows: auto;
    gap: ${space * 2}px;
  }
`;

const App = () => {
  const [ranges, setRanges] = useState({
    startDate: getLastWeek(),
    endDate: new Date(),
    key: "selection",
  });

  const { data, loading, error } = useQuery<Query>(
    gql`
      query infusionsByDate($startDate: DateTime!, $endDate: DateTime!) {
        allInfusions(filter: { infusedAt_gte: $startDate, infusedAt_lte: $endDate }, orderBy: infusedAt_DESC) {
          id
          infusedAt
          serialNumber
          units
        }
      }
    `,
    {
      variables: {
        startDate: ranges.startDate,
        endDate: ranges.endDate,
      },
    },
  );

  return (
    <Container>
      <Header>
        <FormattedMessage id="title"></FormattedMessage>
      </Header>
      <DateRangePicker
        ranges={[ranges]}
        // The library pwnd me.
        onChange={a => setRanges(((a as unknown) as { selection: typeof ranges }).selection)}
      />
      <InfusionsList>
        {error ? (
          <h1>{error}</h1>
        ) : loading ? (
          <Spinner />
        ) : data?.allInfusions.length ? (
          data.allInfusions.map(i => <Infusion key={i.id} {...i} />)
        ) : (
          <FormattedMessage id="noInfusions"></FormattedMessage>
        )}
      </InfusionsList>
    </Container>
  );
};

export default App;
