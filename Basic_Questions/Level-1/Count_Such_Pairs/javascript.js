// Sample Input 1
// 5 9
// 3 0 6 2 7

// Sample Output 1
// 2

let n = 5;
let k = 9;
let arr = [3, 0, 6, 2, 7];

Countsuchpairs(n, k, arr);

function Countsuchpairs(n, k, arr) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (arr[i] + arr[j] == k && j !== i) {
        count++;
      }
    }
  }
  console.log(count);
}
