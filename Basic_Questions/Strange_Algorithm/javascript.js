// Sample Input 1
// 3

// Sample Output 1
// 3 10 5 16 8 4 2 1

let n = 3;

StrangeAlgorithm(n);
function StrangeAlgorithm(n) {
  var ans = [];
  ans.push(n);
  while (n != 1) {
    if (n % 2 == 0) {
      n = n / 2;
      ans.push(n);
    } else {
      n = n * 3 + 1;
      ans.push(n);
    }
  }
  console.log(ans.join(" "));
}
