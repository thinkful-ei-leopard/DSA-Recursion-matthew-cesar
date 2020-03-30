function triangle(n){
  if (n===1) {
    return n;
  }
  return n + triangle(n-1);
}

console.log(triangle(1));
console.log(triangle(2));
console.log(triangle(10));