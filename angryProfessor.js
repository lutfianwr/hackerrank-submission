function angryProfessor(k, a) {
  // Write your code here
  let result = 0;
  a.forEach((element) => {
    if (element <= 0) {
      result++;
    }
  });
  if (result >= k) {
    return `NO`;
  } else {
    return `YES`;
  }
}
