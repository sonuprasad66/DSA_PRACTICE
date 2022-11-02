// Sample Input 1
// 1
// 3 1
// 1 2 3
// Sample Output 1
// 3 1 2

let n = 3;
let k = 1;
let arr = [1, 2, 3];

function RotationOfArray(arr, left, right) {
  while (left < right) {
    swap(arr, left, right);
    left++;
    right--;
  }
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

k = k % n;
RotationOfArray(arr, 0, n - 1);
RotationOfArray(arr, 0, k - 1);
RotationOfArray(arr, k, n - 1);

console.log(arr.join(" "))
