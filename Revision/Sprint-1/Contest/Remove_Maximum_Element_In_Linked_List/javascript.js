// Sample Input 1
// 5
// 1 2 3 4 5

// Sample Output 1
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// -1

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var removeMaximum = function (head) {
  let max = head;
  let cur = head;
  let temp = null;

  while (cur != null) {
    if (cur.next != null && cur.next.data >= max.data) {
      max = cur.next;
      temp = cur;
    }
    cur = cur.next;
  }

  if (max != head) {
    temp.next = max.next;
  } else {
    head = head.next;
  }
  return head;
};
