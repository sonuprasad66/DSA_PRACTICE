// Sample Input 1
// 6
// 1 2 3 5 7 12

// Sample Output 1
// 45

let n = 6;
let arr = [1, 2, 3, 5, 7, 12];
function SumofSpecialPairs(n, arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (CheckPrimeNo(j - i) && i < j) {
        let diff = Math.abs(arr[i] - arr[j]);
        sum += diff;
      }
    }
  }
  console.log(sum);
}

function CheckPrimeNo(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

SumofSpecialPairs(n, arr);
