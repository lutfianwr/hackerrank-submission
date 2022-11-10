function squares(a, b) {
  // Write your code here
  let counter = 0;
  const lower = Math.ceil(Math.sqrt(a));
  const higher = Math.floor(Math.sqrt(b));

  for (let i = lower; i <= higher; i++) {
    if (lower <= i * i <= higher) {
      result++;
    }
  }
  return counter;
}
