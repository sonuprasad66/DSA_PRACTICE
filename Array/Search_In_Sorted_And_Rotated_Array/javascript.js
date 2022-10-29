// Sample Input 1
// 5 1
// 3 4 5 1 2

// Sample Output 1
// 3

// Sample Input 2
// 6 6
// 3 4 7 9 1 2

// Sample Output 2
// -1

let n = 5;
let k = 1;
let arr = [3, 4, 5, 1, 2];

const output = SearchInSortedAndRotatedArray(n, k, arr);

console.log(output);

function SearchInSortedAndRotatedArray(n, k, arr) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    var mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == k) {
      return mid;
    } else if (arr[mid] <= arr[high]) {
      if (arr[mid] < k && arr[high] >= k) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else if (arr[mid] >= arr[high]) {
      if (arr[low] <= k && k < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}
