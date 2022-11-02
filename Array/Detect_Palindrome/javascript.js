// Sample Input 1
// 1221

// Sample Output 1
// Yes

let num = 1221;

detectPalindrome(num);

function detectPalindrome(num) {
  let bag1 = "";
  for (let i = 0; i < num.length; i++) {
    bag1 += num[i] + "";
  }
  let bag2 = "";
  for (let i = num.length - 1; i >= 0; i--) {
    bag2 += num[i] + "";
  }

  if (bag1 == bag2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
