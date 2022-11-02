// Sample Input 1
// thisracecarisgood

// Sample Output 1
// 7

let str = "thisracecarisgood";

function MasaiPalindromicSubstring(str) {
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let substring = "";
    for (let j = i; j < str.length; j++) {
      substring = substring + str[j] + "";
      if (CheckPalindrome(substring)) {
        if (substring.length > max) {
          max = substring.length;
        }
      }
    }
  }
  console.log(max);
}

function CheckPalindrome(str) {
  let reversestr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversestr += str[i];
  }
  if (str === reversestr) {
    return true;
  } else {
    return false;
  }
}

MasaiPalindromicSubstring(str);
