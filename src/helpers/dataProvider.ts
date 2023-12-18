export const API_BASE_URL = "https://api.tvmaze.com";
export const UNKNOWN_ERROR_MESSAGE = "Something went wrong";

const handleApiError = async (response: Response) => {
  if (!response.ok) {
    let backendErrorMessage = UNKNOWN_ERROR_MESSAGE;

    try {
      // Should parse the backend error message from the response body
      const errorData = await response.json();
      if (errorData?.message) {
        backendErrorMessage = errorData.message;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        backendErrorMessage = error?.message;
      }
    }

    throw new Error(backendErrorMessage);
  }
};

export const fetchApiData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${url}`);
    await handleApiError(response);
    return await response.json();
  } catch (err: unknown) {
    throw new Error(err instanceof Error ? err.message : UNKNOWN_ERROR_MESSAGE);
  }
};
