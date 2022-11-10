function jumpingOnClouds(c) {
  // Write your code here
  let totalJump = 0;
  for (let i = 0; i < c.length - 1; i++) {
    if (c[i + 1] == 0) {
      if (c[i + 2] == 0) {
        totalJump++;
        i++;
      } else {
        totalJump++;
      }
    } else {
      totalJump++;
      i++;
    }
  }
  return totalJump;
}
