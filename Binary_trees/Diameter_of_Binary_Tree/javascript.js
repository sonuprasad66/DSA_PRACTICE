// Sample Input 1
// 10
// 67
// 99
// 100
// 36
// 78
// 21
// 82
// 98
// 33
// 45

// Sample Output 1
// 8

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Complete the function below
let ans = 0;
function Height(root) {
  if (root === null) {
    return 0;
  }

  let left = Height(root.left);
  let right = Height(root.right);
  let path = left + right + 1;

  ans = Math.max(ans, path);
  return 1 + Math.max(left, right);
}
var diameterOfBinaryTree = function (root) {
  Height(root);
  return ans;
};
