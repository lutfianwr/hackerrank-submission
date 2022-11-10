function birthday(s, d, m) {
  // Write your code here
  let long = s.length;
  let result = 0;
  for (let i = 0; i <= long - m; i++) {
    let temp = 0;
    for (let j = i; j < i + m; j++) {
      temp += s[j];
    }
    if (temp == d) {
      result++;
    }
  }
  return result;
}
