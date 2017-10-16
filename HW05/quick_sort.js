function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var lt = [];  // less than
  var gt = [];  // greater than
  var sm = [];  // same
  var pivot = arr[parseInt(arr.length / 2)];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      gt.push(arr[i]);
    } else if (arr[i] < pivot) {
      lt.push(arr[i]);
    } else {
      sm.push(arr[i]);
    }
  }
  return quickSort(lt).concat(sm, quickSort(gt));
}

var arr1 = [6, 3, 2, 7, 8, 3, 1, 0, 9, 5];
var arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function console_print(func) {
  console.log(func(arr1));
  console.log(func(arr2));
  console.log(func(arr3));
}

console.log("------- Quick Sort -------");
console_print(quickSort);
