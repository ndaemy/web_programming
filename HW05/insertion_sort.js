function insertionSort(arr) {
  var i, j, remember;
  for (i = 1; i < arr.length; i++) {
    remember = arr[i];
    for (j = i - 1; j >= 0 && (arr[j] > remember); j--) {
      arr[j + 1] = arr[j];
    }
    arr[j+1] = remember;
  }
  return arr;
}

var arr1 = [6, 3, 2, 7, 8, 3, 1, 0, 9, 5];
var arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function console_print(func) {
  console.log(func(arr1));
  console.log(func(arr2));
  console.log(func(arr3));
}

console.log("------- Insertion Sort -------");
console_print(insertionSort);
