// Sample Input 1
// 1
// 3
// 1
// 2
// 3
// -1

// Sample Output 1
// false

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var hasCycle = function (head) {
  var cur = head;
  var temp = head;
  if (head === null && head.next === null) {
    return false;
  }
  while (cur && cur.next) {
    cur = cur.next.next;
    temp = temp.next;
    if (cur == temp) {
      return true;
    }
  }
  return false;
};
