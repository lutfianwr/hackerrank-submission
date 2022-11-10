function migratoryBirds(arr) {
  // Write your code here
  let newArr = arr.sort();
  let result = [];
  let type1 = 0,
    type2 = 0,
    type3 = 0,
    type4 = 0,
    type5 = 0;
  newArr.forEach((bird) => {
    switch (bird) {
      case 1:
        type1++;
        break;
      case 2:
        type2++;
        break;
      case 3:
        type3++;
        break;
      case 4:
        type4 += 1;
        break;
      case 5:
        type5 += 1;
        break;
    }
  });
  result.push(type1, type2, type3, type4, type5);
  console.log(Math.max(...result) + 1);
  let final = Math.max(...result);
  return result.indexOf(final) + 1;
}
