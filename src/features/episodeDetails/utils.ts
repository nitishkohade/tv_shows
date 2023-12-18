export const roundNumberDividedByTwo = (num: number | string) => {
  try {
    return Math.round(+num / 2);
  } catch (_) {
    return 0;
  }
};
