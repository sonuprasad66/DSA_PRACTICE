// Sample Input 1
// 5
// 2
// 5
// 6
// 4
// 7

// Sample Output 1
// 2 5 4 7 6

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
function PreorderTraversal(root) {
  if (root === null) {
    return;
  }
  ans.push(root.val);
  PreorderTraversal(root.left);
  PreorderTraversal(root.right);
  return ans;
}
