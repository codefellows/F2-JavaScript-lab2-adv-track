// var arrArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// function flatten(arr) {
//   return arr.reduce(function(flat, arr) {
//       return flat.concat(Array.isArray(arr) ? flatten(arr) : arr);
//   }, []);
// };
// var sums = arrArrays.map(function(arr) {
//   return flatten(arr).reduce(function(sum, item) {
//       return sum + item;
//   });
// });

var regArr = [1, 2, 3, 4];

var arrs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(val) {
    sum += val;
  });
  return sum;
}
console.log(sumArray(regArr));
console.log("----")

function sumSort(arrayOfArrays) {
  // var a = sumArray(arrayOfArrays[i]);
  // console.log(a);
  // var b = sumArray(arrayOfArrays[i + 1]);
  // console.log(b);
  arrayOfArrays.sort(function(a,b) {
    var x = sumArray(a);
    // console.log(x);
    var y = sumArray(b);
    console.log(b);
    return y - x;
  });
}
console.log(sumSort(arrs));

// TODO: implement me using sumArray
//  order the arrays based on the sum of the numbers
//  inside each array