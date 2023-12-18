import { format } from "date-fns";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "";
  }
  return format(date, "MMM d, yyyy");
};

export function formatNumber(num: number) {
  const parsedNumber = parseFloat(String(num));
  if (isNaN(parsedNumber)) {
    return "0.0";
  }
  return parsedNumber.toFixed(1);
}
