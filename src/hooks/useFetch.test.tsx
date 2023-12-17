import { renderHook, act } from "@testing-library/react-hooks";
import { useErrorBoundary } from "react-error-boundary";
import { fetchApiData } from "src/helpers/dataProvider";
import { useFetch } from "./useFetch";

// Mocking the external modules
jest.mock("react-error-boundary", () => ({
  useErrorBoundary: jest.fn(),
}));

jest.mock("src/helpers/dataProvider", () => ({
  fetchApiData: jest.fn(),
}));

describe("useFetch", () => {
  const mockUrl = "https://example.com/data";
  const mockData = { id: 1, name: "data" };
  let mockShowBoundary: (error: Error) => void;

  beforeEach(() => {
    mockShowBoundary = jest.fn();
    (useErrorBoundary as jest.Mock).mockReturnValue({
      showBoundary: mockShowBoundary,
    });
    (fetchApiData as jest.Mock).mockClear();
  });

  it("should fetch data successfully", async () => {
    (fetchApiData as jest.Mock).mockResolvedValue(mockData);
    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockUrl));

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(mockShowBoundary).not.toHaveBeenCalled();
  });

  it("should handle an error", async () => {
    const mockError = new Error("Failed to fetch");
    (fetchApiData as jest.Mock).mockRejectedValue(mockError);
    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockUrl));

    await waitForNextUpdate();

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(mockShowBoundary).toHaveBeenCalledWith(mockError);
  });
});
