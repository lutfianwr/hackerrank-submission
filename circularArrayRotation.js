function circularArrayRotation(a, k, queries) {
  // Write your code here
  let result = [];
  for (let i = 0; i < k; i++) {
    a.unshift(a[a.length - 1]);
    a.pop();
  }
  for (let j = 0; j < queries.length; j++) {
    result.push(a[queries[j]]);
  }
  return result;
}
