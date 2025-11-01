function divide(dividend: number, divisor: number): number {
  const INT_MAX = 2 ** 31 - 1; 
  const INT_MIN = -(2 ** 31);  

  if (divisor === 0) return INT_MAX;

  if (dividend === INT_MIN && divisor === -1) return INT_MAX;

  const negative = (dividend > 0) !== (divisor > 0);

  let a = BigInt(Math.abs(dividend));
  const b = BigInt(Math.abs(divisor));

  let result = 0n;

  for (let i = 31; i >= 0; i--) {
    const shift = BigInt(i);
    if ((b << shift) <= a) {
      a -= (b << shift);
      result += (1n << shift);
    }
  }

  let signed = negative ? -result : result;

  let final = Number(signed);

  if (final > INT_MAX) return INT_MAX;
  if (final < INT_MIN) return INT_MIN;
  return final;
}
