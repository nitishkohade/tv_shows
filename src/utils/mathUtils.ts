export const roundHalf = (num: number | string) => {
  const parsedNum = Number(num);
  if (isNaN(parsedNum)) {
    return 0;
  }
  return Math.round(parsedNum / 2);
};
