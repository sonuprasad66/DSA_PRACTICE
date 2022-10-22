// Sample Input 1
// abcab

// Sample Output 1
// 7

let str = "abcab";
Substringundercondition(str);

function Substringundercondition(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let subs = "";
    for (let j = i; j < str.length; j++) {
      subs = subs + str[j];
      if (subs[0] == subs[subs.length - 1]) {
        count++;
      }
    }
  }
  console.log(count);
}
