function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(element, index, array) {
    sum += numberArray[index];
  });
  return sum;
}

sumArray([1, 2, 3, 4]);