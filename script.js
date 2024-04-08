let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let moves = 0;
let resultDiv = document.getElementById('result');

function playerMove(cellIndex) {
  if (board[cellIndex] === '' && !checkWinner()) {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    moves++;
    if (checkWinner()) {
      resultDiv.innerText = `Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`;
    } else if (moves === 9) {
      resultDiv.innerText = 'It\'s a draw!';
    }
  }
}

function checkWinner() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let condition of winningConditions) {
    if (
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]] &&
      board[condition[0]] !== ''
    ) {
      return true;
    }
  }
  return false;
}
