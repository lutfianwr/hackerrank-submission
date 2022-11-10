function utopianTree(n) {
  // Write your code here
  let result = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      result++;
    } else {
      result *= 2;
    }
  }
  return result;
}
