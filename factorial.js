function factorial(num) {
  if(num === 0) {
    return num;
  }
  return num * factorial(num - 1);
}

console.log(factorial(10));