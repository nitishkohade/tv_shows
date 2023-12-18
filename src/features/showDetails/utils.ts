import { format } from "date-fns";

export const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return format(date, "MMM d, yyyy");
  } catch (_) {
    return "";
  }
};

export const convertNumberToFloat = (num: number) => {
  try {
    return parseInt(String(num)).toFixed(1);
  } catch (_) {
    return 0.0;
  }
};
