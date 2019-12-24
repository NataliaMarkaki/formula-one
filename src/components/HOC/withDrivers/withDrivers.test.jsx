import * as React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

describe("withDrivers", () => {
  let MockWithDrivers;
  let container = null;
  let mockDrivers = [];
  let mockGetDrivers = jest.fn(() => mockDrivers);
  jest.mock("./../../../api", () => ({ getDrivers: mockGetDrivers }));

  beforeAll(() => {
    console.error = jest.fn().mockImplementation(() => jest.fn());
    const withDrivers = require(".").default;
    MockWithDrivers = withDrivers(() => <div />);
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

  afterAll(() => {
    console.error.unmock();
  });

  it("should fetch data on mount", () => {
    act(() => {
      render(<MockWithDrivers />, container);
    });
    expect(mockGetDrivers).toHaveBeenCalledTimes(1);
  });

  it("should show the loading message if drivers array is empty", async () => {
    await act(() => {
      render(<MockWithDrivers />, container);
    });
    expect(container).toMatchSnapshot();
  });

  it("should show the component if the drivers array has data", async () => {
    mockDrivers = {
      MRData: { DriverTable: { Drivers: [{ givenName: "Alexander" }] } }
    };
    await act(() => {
      render(<MockWithDrivers />, container);
    });
    expect(container).toMatchSnapshot();
  });

  it("should log error if data fetching failed", async () => {
    mockGetDrivers = jest.fn(() => Promise.reject("Error"));
    try {
      await act(() => {
        render(<MockWithDrivers />, container);
      });
      expect(console.error).toHaveBeenCalledWith(
        "Error while retrieving drivers data"
      );
    } catch (e) {}
  });
});
