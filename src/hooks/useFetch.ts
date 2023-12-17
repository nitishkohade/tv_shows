import { useEffect, useState, useCallback } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { fetchApiData } from "src/helpers/dataProvider";

export const useFetch = <T>(url: string) => {
  const { showBoundary } = useErrorBoundary();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchApiData<T>(url);
      setData(response);
    } catch (error) {
      showBoundary(error);
    } finally {
      setLoading(false);
    }
  }, [url, showBoundary]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading };
};
