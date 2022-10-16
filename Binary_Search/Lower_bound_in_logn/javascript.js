// Sample Input 1
// 5 2
// 1 1 2 2 5

let n = 5;
let k = 2;
let arr = [1, 1, 2, 2, 5];

function LowerBound(n, k, arr) {
  let low = 0;
  let high = n - 1;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
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

let x = LowerBound(n, k, arr);
console.log(x);
