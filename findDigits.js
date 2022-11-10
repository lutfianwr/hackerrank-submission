function findDigits(n) {
  // Write your code here
  const number = n.toString().split("");
  let count = 0;
  number.forEach((num) => {
    if (n % num === 0) {
      count++;
    }
  });
  return count;
}
