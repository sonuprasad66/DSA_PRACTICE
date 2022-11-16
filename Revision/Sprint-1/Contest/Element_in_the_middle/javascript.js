// Sample Input 1
// 5
// 4 3 6 7 8

// Sample Output 1
// 6

let n = 5;
let arr = [4, 3, 6, 7, 8];

function Elementinthemiddle(n, arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  if (n % 2 == 0) {
    console.log(-1);
  } else {
    let midd = Math.floor(n / 2);
    console.log(arr[midd]);
  }
}
Elementinthemiddle(n, arr);
