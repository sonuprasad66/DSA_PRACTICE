// Sample Input 1
// 4
// abcd

// Sample Output 1

// a
// ab
// abc
// abcd
// abd
// ac
// acd
// ad
// b
// bc
// bcd
// bd
// c
// cd
// d

let n = 4;
let str = "abcd";
let index = 0;
let new_str = [];

function GenerateAllSubsequence(n, str, index, new_str) {
  if (new_str.length != 0) {
    console.log(new_str.join(""));
  }

  if (index > n) {
    return;
  }

  for (let i = index; i < str.length; i++) {
    new_str.push(str[i]);
    GenerateAllSubsequence(n, str, i + 1, new_str);
    new_str.pop();
  }
}

GenerateAllSubsequence(n, str, index, new_str);
