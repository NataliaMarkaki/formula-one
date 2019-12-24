import { getDrivers } from "./index";

describe("api", () => {
  describe("getDrivers", () => {
    beforeAll(() => {
      console.error = jest.fn().mockImplementation(() => jest.fn());
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    afterAll(() => {
      console.error.unmock();
    });

    it("should return an empty array when fetch throws an error", async () => {
      let result;
      try {
        global.fetch = jest
          .fn()
          .mockImplementation(() => Promise.reject("Error fetching"));
        result = await getDrivers("2019");
      } catch (e) {
        expect(console.error).toHaveBeenCalledWith(
          "Error while fetching getDrivers: Error fetching"
        );
        expect(result).toEqual([]);
      }
    });

    it("should return an empty array when the response is not ok", async () => {
      global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ ok: false }));
      const result = await getDrivers("2019");
      expect(console.error).toHaveBeenCalledWith(
        "Wrong response from getDrivers"
      );
      expect(result).toEqual([]);
    });

    it("should return a response", async () => {
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ data: "correct" })
        })
      );
      const result = await getDrivers("2019");
      expect(console.error).not.toHaveBeenCalled();
      expect(result).toEqual({ data: "correct" });
    });
  });
});
