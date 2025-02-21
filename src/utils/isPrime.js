export const isPrime = (num, divisor = 2) => {
  if (num < 2) return false;
  if (divisor > Math.sqrt(num)) return true;
  if (num % divisor === 0) return false;

  return isPrime(num, divisor + 1);
};
