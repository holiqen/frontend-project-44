const findGCD = (dividend, divisor) => {
  if (divisor === 0) return Math.abs(dividend);
  return findGCD(divisor, dividend % divisor);
};

export default findGCD;
