function icecreamParlor(m, arr) {
  // Write your code here
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1 + i; j < arr.length; j++) {
      if (arr[i] + arr[j] == m) {
        result.push(i + 1, j + 1);
      }
    }
  }
  return result;
}
