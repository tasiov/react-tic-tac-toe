function checkVertical(index, state, size, turn) {
  const col = index % size;
  const player = turn % 2 + 1;
  for (let i = 0; i < size; i++) {
    if (state[col + i * size] !== player) return false;
  }
  return true;
}

function checkHorizontal(index, state, size, turn) {
  const row = Math.floor(index / size);
  const player = turn % 2 + 1;
  for (let i = 0; i < size; i++) {
    if (state[row * size + i] !== player) return false;
  }
  return true;
}

function checkMajorDiag(index, state, size, turn) {
  const player = turn % 2 + 1;
  for (let i = 0; i < size; i++) {
    if (state[i * size + i] !== player) return false;
  }
  return true;
}

function checkMinorDiag(index, state, size, turn) {
  const player = turn % 2 + 1;
  for (let i = 1; i <= size; i++) {
    if (state[(i * size) - i] !== player) return false;
  }
  return true;
}

const isGameOver = function(cellIdx, boardState, size, turn) {
  if (checkVertical(cellIdx, boardState, size, turn)) return true;
  if (checkHorizontal(cellIdx, boardState, size, turn)) return true;
  if (checkMajorDiag(cellIdx, boardState, size, turn)) return true;
  return checkMinorDiag(cellIdx, boardState, size, turn);
}

export default isGameOver;
