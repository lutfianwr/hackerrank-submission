function viralAdvertising(n) {
  // Write your code here
  let liked = 2;
  let shared = 5;
  let totalLikes = 2;
  for (let i = 0; i < n - 1; i++) {
    shared = liked * 3;
    liked = Math.floor(shared / 2);
    totalLikes += liked;
  }
  return totalLikes;
}
