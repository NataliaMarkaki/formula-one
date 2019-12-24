import * as React from "react";
import styled from "styled-components";
import * as colors from "./../../colors";
import Row from "./TableRow";

const StyledTable = styled.div`
  margin: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: ${colors.night};
  box-shadow: 0 0 2px ${colors.rain};
`;

const Table = ({ drivers }) => (
  <StyledTable>
    {drivers.map((driver, idx) => (
      <Row
        name={`${driver.givenName} ${driver.familyName}`}
        permanentNumber={driver.permanentNumber}
        nationality={driver.nationality}
        DOB={driver.dateOfBirth}
        isOdd={idx % 2 === 0}
        key={idx}
      />
    ))}
  </StyledTable>
);

export default Table;
