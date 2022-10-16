// Sample Input 1
// 10 3
// 0 2 4 4 5 5 7 7 9 10

// Sample Output 1
// 2

let n = 10;
let k = 3;
let arr = [0, 2, 4, 4, 5, 5, 7, 7, 9, 10];

function UpperBound(n, k, arr) {
  let low = 0;
  let high = n - 1;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == k) {
      low = mid + 1;
    } else if (arr[mid] > k) {
      ans = mid;
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    }
  }
  return ans;
}

let x = UpperBound(n, k, arr);
console.log(x);
