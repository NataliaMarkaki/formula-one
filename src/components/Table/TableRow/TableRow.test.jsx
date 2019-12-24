import * as React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

describe("TableRow", () => {
  let TableRow;
  let container = null;

  beforeAll(() => {
    TableRow = require(".").default;
  });

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    jest.clearAllMocks();
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should not render as an odd row", () => {
    act(() => {
      render(
        <TableRow
          name='Alexander'
          permanentNumber='23'
          nationality='Thai'
          DOB='1996-03-23'
          isOdd={false}
        />,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });

  it("should render as an odd row", () => {
    act(() => {
      render(
        <TableRow
          name='Alexander'
          permanentNumber='23'
          nationality='Thai'
          DOB='1996-03-23'
          isOdd={true}
        />,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
});
