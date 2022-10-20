// Sample Input 1
// 13

// Sample Output 1
// Yes

let num = 13;

function identifyPrime(num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }

  if (count == 2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

identifyPrime(num);
