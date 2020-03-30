function fibonacci(num) {
  if (num === 1) {
    return [0, 1];
  }
  else{
    var seq = fibonacci(num - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
  }
}

console.log(fibonacci(7)); 