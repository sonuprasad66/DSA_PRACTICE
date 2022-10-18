// Sample Input 1 ;
// 5
// 1 2 3 4 5

// Sample Output 1;
// 5 4 3 2 1

let n = 5;
let arr = [1, 2, 3, 4, 5];

function ReverseArrConstantSC(n, arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    swap(arr, left, right);
    left++;
    right--;
  }
  console.log(arr.join(" "));
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

ReverseArrConstantSC(n, arr);
