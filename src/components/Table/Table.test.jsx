import * as React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

describe("Table", () => {
  let Table;
  let container = null;
  const mockDrivers = [
    {
      givenName: "Alexander",
      familyName: "Albon",
      permanentNumber: "23",
      nationality: "Thai",
      dateOfBirth: "1996-03-23"
    }
  ];
  jest.mock("./TableRow", () => props => <div>{JSON.stringify(props)}</div>);

  beforeAll(() => {
    Table = require(".").default;
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

  it("should render drivers table", () => {
    act(() => {
      render(<Table drivers={mockDrivers} />, container);
    });
    expect(container).toMatchSnapshot();
  });
});
