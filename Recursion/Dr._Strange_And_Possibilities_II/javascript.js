// Sample Input 1
// 3
// 1 2 2

// Sample Output 1

// 1
// 1 2
// 1 2 2
// 2
// 2 2

var n = 3;
var obj = {};
var str = [1, 2, 2].sort((x, y) => {
  return x - y;
});
var newstr = [];

genereate(n, str, 0, newstr);

function genereate(n, str, index, newstr) {
  if (newstr.length >= 0) {
    if (obj[newstr] === undefined) {
      obj[newstr] = 1;

      console.log(newstr.join(" "));
    }
  }

  if (index == str.length) {
    return;
  }

  for (var i = index; i < str.length; i++) {
    newstr.push(str[i]);

    genereate(n, str, i + 1, newstr);

    newstr.pop();
  }
}
