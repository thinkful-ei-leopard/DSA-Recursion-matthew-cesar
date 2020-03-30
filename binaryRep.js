function binaryRep(num) {
  if(num === 0) {
    return '';
  }

  let binary = num % 2;
  return binaryRep(Math.floor(num/2)) + binary;
}

console.log(binaryRep(10));