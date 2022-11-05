// Sample Input 1
// 5
// 5
// 6
// 4
// 7
// 2

// Sample Output 1
// 5
// 6 4
// 7 2

// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

var levelOrder = function (root) {
  let ans = [];
  if (root == null) {
    return ans;
  }
  let queue = [];
  queue.push(root);
  while (queue.length != 0) {
    let size = queue.length;
    let list = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      list.push(node.val);
      if (node.left != null) queue.push(node.left);
      if (node.right != null) queue.push(node.right);
    }
    ans.push(list);
  }
  return ans;
};
