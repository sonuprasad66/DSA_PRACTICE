// Sample Input 1
// 6 3
// 2 3 3 3 6 9

// Sample Output 1
// 3

let n = 6;
let k = 3;
let arr = [2, 3, 3, 3, 6, 9];

function lowerbond(n, k, arr) {
  var low = 0;
  var high = arr.length - 1;
  var ans = -1;
  while (low <= high) {
    var mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == k) {
      ans = mid;
      high = mid - 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    }
  }
  return ans;
}

function upperbond(n, k, arr) {
  var low = 0;
  var high = arr.length - 1;
  var ans = -1;
  while (low <= high) {
    var mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == k) {
      ans = mid;
      low = mid + 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    }
  }
  return ans;
}

function frequency(n, k, arr) {
  var lower = lowerbond(n, k, arr);
  var upper = upperbond(n, k, arr);

  if (lower == -1) {
    return 0;
  }
  var ans1 = upper - lower + 1;
  return ans1;
}

var ans1 = frequency(n, k, arr);
console.log(ans1);
