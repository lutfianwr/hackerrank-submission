function beautifulDays(i, j, k) {
  // Write your code here
  let totalDays = 0;
  for (let number = i; number <= j; number++) {
    let reverseNumber = number.toString().split("").reverse().join("");
    if (((number - reverseNumber) / k) % 1 === 0) {
      totalDays++;
    }
  }
  return totalDays;
}
