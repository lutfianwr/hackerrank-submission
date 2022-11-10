function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  if (y1 - y2 > 0) {
    return 10000;
  } else if (y1 - y2 < 0) {
    return 0;
  }
  if (m1 - m2 > 0) {
    return (m1 - m2) * 500;
  } else if (m1 - m2 < 0) {
    return 0;
  }
  if (d1 - d2 > 0) {
    return (d1 - d2) * 15;
  } else if (d1 - d2 < 0) {
    return 0;
  } else {
    return 0;
  }
}
