function dayOfProgrammer(year) {
  // Write your code here
  let day = ``,
    month = `09`;
  if (year < 1920) {
    //julian
    if (year % 4 == 0) {
      day += `12`;
    } else if (year == 1918) {
      day += `26`;
    } else {
      day += `13`;
    }
  } else {
    //gregorian
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      //leap
      day += `12`;
    } else {
      day += `13`;
    }
  }
  return `${day}.${month}.${year}`;
}
