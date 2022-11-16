// Sample Input 1
// 8
// 1 2 3 4 5 6 7 8

// Sample Output 1
// 50

let n = 8;
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function ArrayPartsofFour(n, arr) {
  let s1 = 0;
  let s2 = 0;
  let s3 = 0;
  let s4 = 0;
  let c1 = n / 4;
  let c2 = n / 2;
  let c3 = c2 + c1;

  for (let i = 0; i < c1; i++) {
    s1 += arr[i];
  }
  for (let i = c1; i < c2; i++) {
    s2 += arr[i];
  }
  for (let i = c2; i < c3; i++) {
    s3 += arr[i];
  }
  for (let i = c3; i < n; i++) {
    s4 += arr[i];
  }

  let out = 2 * s1 + s2 + 2 * s3 + s4;
  console.log(out);
}

ArrayPartsofFour(n, arr);
