var regArr = [1, 2, 3, 4];

var arrs = [[4, 5, 6], [1, 2, 3], [7, 8, 9]];

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(val) {
    sum += val;
  });
  console.log("sum = " + sum )
  return sum;
}
//console.log(sumArray(regArr));
//console.log("----")

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a,b) {
    var x = sumArray(a);
    console.log("x = " + x);
    var y = sumArray(b);
    console.log("y = " + y);
    if (x > y) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log(arrayOfArrays);
  return arrayOfArrays;
}
console.log("sumSort = " + sumSort(arrs));

// TODO: implement me using sumArray
//  order the arrays based on the sum of the numbers
//  inside each array