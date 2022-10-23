// Sample Input 1
// 3

// Sample Output 1

// 1
// 1 2
// 1 2 3
// 1 3
// 2
// 2 3
// 3

let n = 3;
let new_arr = [];
DrStrangeandPossibilities(n, new_arr, 1);

function DrStrangeandPossibilities(n, new_arr, index) {
  console.log(new_arr.join(" "));
  if (index > n) {
    return;
  }

  for (let i = index; i <= n; i++) {
    new_arr.push(i);
    DrStrangeandPossibilities(n, new_arr, i + 1);
    new_arr.pop();
  }
}
