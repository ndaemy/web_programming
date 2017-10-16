var arrayLength;

function buildHeap(arr) {
    arrayLength = arr.length;

    for (var i = Math.floor(arrayLength / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {
    var left = i * 2 + 1;
    var right = i * 2 + 2;
    var largest = i;

    if (left < arrayLength && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < arrayLength && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

function heapSort(arr) {
  buildHeap(arr);

  for (var i = arr.length - 1; i > 0; i--) {
      swap(arr, 0, i);
      arrayLength--;
      heapify(arr, 0);
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


console.log("------- Heap Sort -------");
console_print(heapSort);
