'use strict';

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

// Sample Arrays

var numArr = [1, 2, 3, 4];
var numArrTwo = [1, 2, 3, 4, 5, 6];

var arrArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var arrArraysTwo = [[3, 4, 3], [4, 8, 6], [1, 3, 9]];

// Functions (adding up arrays & sorting arrays)

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(val) {
    sum += val;
  });
  // console.log("sum = " + sum )
  return sum;
}

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a,b) {
    var x = sumArray(a);
    // console.log("x = " + x);
    var y = sumArray(b);
    // console.log("y = " + y);
    if (x > y) {
      return 1;
    } else {
      return -1;
    }
  });
  return arrayOfArrays;
}
console.log(sumSort(arrArraysTwo)); // This function call returns just the values (not as an array)?
console.log('----');

function deepEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.typeof !== arr2.typeof) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // console.log('Items did not match.');
      break;
    }
    // console.log('Items matched.');
  }
  return true;
}

// Assertions

// assert(sumSort(arrArrays) === [[1, 2, 3], [4, 5, 6], [7, 8, 9]], 'The array is still out of order.');
// assert(sumSort(arrArraysTwo) === [[3, 4, 3], [1, 3, 9], [4, 8, 6]], 'The array is still out of order.');

//

assert(deepEquals(sumSort(arrArrays), [[1, 2, 3], [4, 5, 6], [7, 8, 9]]) === true, 'The arrays are not equal to one another.');
assert(deepEquals(sumSort(arrArraysTwo), [[3, 4, 3], [1, 3, 9], [4, 8, 6]]) === true, 'The arrays are not equal to one another.');
