function mergeSort(arr) {
    if (arr.length < 2)
        return arr;

    var mid = parseInt(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

var arr1 = [6, 3, 2, 7, 8, 3, 1, 0, 9, 5];
var arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function console_print(func) {
  console.log(func(arr1));
  console.log(func(arr2));
  console.log(func(arr3));
}

console.log("------- Merge Sort -------");
console_print(mergeSort);
