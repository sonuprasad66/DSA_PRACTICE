var arr = [3, 0, 1, 5, 2];
var n = arr.length;

function selectionSort(n, arr) {
  for (var i = 0; i < n - 1; i++) {
    min = i;

    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, min, j);
  }
  console.log(arr);
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

selectionSort(n, arr);
