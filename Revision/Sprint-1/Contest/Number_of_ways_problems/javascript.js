// Sample Input 1
// 4

// Sample Output 1
// 7

let n = 4;
function Numberofwaysproblems(n) {
  function ways(n) {
    if (n == 0) {
      return 1;
    }
    if (n < 1) {
      return 0;
    } else {
      return ways(n - 1) + ways(n - 2) + ways(n - 3);
    }
  }
  console.log(ways(n));
}

Numberofwaysproblems(n);
