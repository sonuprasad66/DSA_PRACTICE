// Sample Input 1
// 5
// 2
// 5
// 6
// 4
// 7

// Sample Output 1
// 4 5 7 2 6

// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below
let ans = [];
function inorderTraversal(root) {
  if (root === null) {
    return;
  }

  inorderTraversal(root.left);
  ans.push(root.val);
  inorderTraversal(root.right);
  return ans;
}
