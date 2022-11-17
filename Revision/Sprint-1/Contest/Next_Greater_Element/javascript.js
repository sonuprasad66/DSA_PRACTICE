// Sample Input 1
// 1
// 4
// 1 3 2 4

// Sample Output 1
// 3 4 4 -1

let n = 4;
let arr = [1, 3, 2, 4];

function NextGreaterElement(n, arr) {
  let right = [];
  let st = [];
  for (let i = n - 1; i >= 0; i--) {
    while (st.length !== 0 && st[st.length - 1] <= arr[i]) {
      st.pop();
    }

    if (st.length === 0) {
      right.push(-1);
    } else {
      right.push(st[st.length - 1]);
    }

    st.push(arr[i]);
  }
  right.reverse();
  console.log(right.join(" "));
}

NextGreaterElement(n, arr);
