// Sample Input 1
// 3
// 1 2 3

// Sample Output 1
// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1

let n = 3;
let arr = [1, 2, 3];

let index = 0;
let ans = [];

GeneratePermutations(arr, index, ans);

ans.sort();

for (let i = 0; i < ans.length; i++) {
  console.log(ans[i].join(" "));
}

function GeneratePermutations(arr, index, ans) {
  if (index == arr.length - 1) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) temp.push(arr[i]);
    ans.push(temp);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    swap(arr, i, index);
    GeneratePermutations(arr, index + 1, ans);
    swap(arr, i, index);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
