import { fetchApiData, UNKNOWN_ERROR_MESSAGE } from "./dataProvider";
import fetchMock from "jest-fetch-mock";

describe("API Error Handling", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should handle successful response", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "success" }));

    const result = await fetchApiData("test");
    expect(result).toEqual({ data: "success" });
  });

  it("should throw error with message from response", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ message: "Custom error message" }),
      { status: 400 },
    );

    await expect(fetchApiData("test")).rejects.toThrow("Custom error message");
  });

  it("should throw UNKNOWN_ERROR_MESSAGE when response has no message", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 400 });

    await expect(fetchApiData("test")).rejects.toThrow(UNKNOWN_ERROR_MESSAGE);
  });
});
