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
// 5

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var maxDepth = function (root) {
  if (root == null) {
    return 0;
  } else {
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
};
