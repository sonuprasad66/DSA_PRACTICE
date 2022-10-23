// Sample Input 1
// 4

// Sample Output 1
// 2

let n = 4;
var count = 0;
let board = [];
for (let i = 0; i < n; i++) {
  board[i] = new Array(n).fill(0);
}

nQueens(board, n, 0);
console.log(count);

function nQueens(Board, N, row) {
  if (row === N) {
    count++;
    return;
  }

  for (let i = 0; i < Board.length; i++) {
    if (checkSafe(Board, row, i)) {
      Board[row][i] = 1;
      nQueens(Board, N, row + 1);
      Board[row][i] = 0;
    }
  }
}

function checkSafe(chessBoard, row, col) {
  for (let i = row - 1; i >= 0; i--) {
    if (chessBoard[i][col] === 1) return false;
  }

  for (
    let i = row - 1, j = col + 1;
    i >= 0 && j < chessBoard.length;
    i--, j++
  ) {
    if (chessBoard[i][j] === 1) return false;
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chessBoard[i][j] === 1) return false;
  }

  return true;
}
