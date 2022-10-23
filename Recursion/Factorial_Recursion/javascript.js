// Sample Input 1
// 5

// Sample Output 1
// 120

let n = 5;
let index = 0;

console.log(FactorialRecursion(n, index));

function FactorialRecursion(n, index) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * FactorialRecursion(n - 1);
}
