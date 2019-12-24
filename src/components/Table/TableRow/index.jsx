import * as React from "react";
import styled from "styled-components";
import * as colors from "./../../../colors";

const StyledRow = styled.div`
  display: flex;
  padding-left: 20px;
  border-top: 1px solid ${colors.cloud};
  ${({ isOdd }) => isOdd && `background-color: ${colors.snow};`}
`;

const StyledCell = styled.div`
  padding: 0.75em 0.75em 0.5em 0px;
  margin-left: 0px;
  width: 34%;
  vertical-align: top;
`;

const TableRow = ({ name, permanentNumber, nationality, DOB, isOdd }) => (
  <StyledRow isOdd={isOdd}>
    <StyledCell>{name}</StyledCell>
    <StyledCell>{permanentNumber}</StyledCell>
    <StyledCell>{nationality}</StyledCell>
    <StyledCell>{DOB}</StyledCell>
  </StyledRow>
);

export default TableRow;
