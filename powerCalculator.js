
function powerCalculator(base, exp) {
  if (exp < 0) {
    return 'exponent should be >= 0';
  }

  if (exp === 1) {
    return base;
  }

  if (exp === 0) {
    return 1;
  }
  
  return base * powerCalculator(base, exp - 1);

}

console.log (powerCalculator(10, 2));
console.log(powerCalculator(10, -2));
console.log(powerCalculator(10,5));
console.log(powerCalculator(10, 1));
console.log(powerCalculator(10, 0));