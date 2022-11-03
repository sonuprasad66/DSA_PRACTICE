// Sample Input 1
// 5
// 2
// 5
// 6
// 4
// 7

// Sample Output 1
// 4 7 5 6 2

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
function postorderTraversal(root) {
  if (root === null) {
    return;
  }
  postorderTraversal(root.left);
  postorderTraversal(root.right);
  ans.push(root.val);
  return ans;
}
