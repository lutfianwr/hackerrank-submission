function hurdleRace(k, height) {
  // Write your code here
  let max = Math.max(...height);
  if (k < max) {
    return max - k;
  } else return 0;
}
