function reverse(x: number): number {
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let result = 0;

  while (x !== 0) {
    const digit = x % 10;
    result = result * 10 + digit;
    x = Math.floor(x / 10);
  }

  result *= sign;

  if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
    return 0;
  }

  return result;
}
