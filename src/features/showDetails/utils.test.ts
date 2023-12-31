import { formatDate, formatNumber } from "./utils";

describe("formatDate", () => {
  it("formats valid date strings correctly", () => {
    expect(formatDate("2023-01-01")).toBe("Jan 1, 2023");
  });

  it("returns an empty string for invalid dates", () => {
    expect(formatDate("invalid-date")).toBe("");
  });
});

describe("formatNumber", () => {
  it("converts numbers to a string with one decimal place", () => {
    expect(formatNumber(10)).toBe("10.0");
  });
});
