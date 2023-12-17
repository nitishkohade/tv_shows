import { useEffect, useState, useCallback } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { fetchApiData } from "src/helpers/dataProvider";

export const useFetch = <T>(url: string, shouldFetch: boolean = true) => {
  const { showBoundary } = useErrorBoundary();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    if (!shouldFetch) return;

    setLoading(true);
    try {
      const response = await fetchApiData<T>(url);
      setData(response);
    } catch (error) {
      showBoundary(error);
    } finally {
      setLoading(false);
    }
  }, [url, showBoundary, shouldFetch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading };
};
