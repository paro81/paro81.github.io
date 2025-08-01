const grid = document.getElementById('tetris-grid');
const scoreDisplay = document.getElementById('score');
const width = 10;
let score = 0;
let timerId;
let currentPosition = 4;
let currentRotation = 0;

const gridCells = [];

// Create grid
for (let i = 0; i < 200; i++) {
  const cell = document.createElement('div');
  grid.appendChild(cell);
  gridCells.push(cell);
}
// Add bottom row to simulate "floor"
for (let i = 0; i < width; i++) {
  const cell = document.createElement('div');
  cell.classList.add('taken');
  grid.appendChild(cell);
  gridCells.push(cell);
}

// Tetrominoes (with rotations)
const lTetromino = [
  [1, width + 1, width * 2 + 1, 2],
  [width, width + 1, width + 2, width * 2 + 2],
  [1, width + 1, width * 2 + 1, width * 2],
  [width, width * 2, width * 2 + 1, width * 2 + 2]
];

const oTetromino = [
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1]
];

const tTetromino = [
  [1, width, width + 1, width + 2],
  [1, width + 1, width + 2, width * 2 + 1],
  [width, width + 1, width + 2, width * 2 + 1],
  [1, width, width + 1, width * 2 + 1]
];

const jTetromino = [
  [1, width + 1, width * 2 + 1, width * 2],
  [width, width + 1, width + 2, width * 2 + 2],
  [1, width + 1, width * 2 + 1, 2],
  [width, width + 1, width + 2, width * 2]
];

const zTetromino = [
  [0, 1, width + 1, width + 2],
  [2, width + 1, width + 2, width * 2 + 1],
  [0, 1, width + 1, width + 2],
  [2, width + 1, width + 2, width * 2 + 1]
];

const theTetrominoes = [
  lTetromino,
  oTetromino,
  tTetromino,
  jTetromino,
  zTetromino
];

const shapeClasses = ['tetromino', 'o-shape', 't-shape', 'j-shape', 'z-shape'];

let random = Math.floor(Math.random() * theTetrominoes.length);
let currentShape = theTetrominoes[random];
let current = currentShape[currentRotation];
let shapeClass = shapeClasses[random];

function draw() {
  current.forEach(index => {
    gridCells[currentPosition + index].classList.add('tetromino', shapeClass);
  });
}

function undraw() {
  current.forEach(index => {
    gridCells[currentPosition + index].classList.remove('tetromino', shapeClass);
  });
}

function moveDown() {
  undraw();
  currentPosition += width;
  draw();
  freeze();
}

function freeze() {
  if (current.some(index =>
    gridCells[currentPosition + index + width].classList.contains('taken'))
  ) {
    current.forEach(index =>
      gridCells[currentPosition + index].classList.add('taken')
    );

    // Spawn new tetromino
    random = Math.floor(Math.random() * theTetrominoes.length);
    currentShape = theTetrominoes[random];
    shapeClass = shapeClasses[random];
    currentRotation = 0;
    current = currentShape[currentRotation];
    currentPosition = 4;
    draw();
    addScore();
    checkGameOver();
  }
}

function moveLeft() {
  undraw();
  const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
  if (!isAtLeftEdge) currentPosition -= 1;
  if (current.some(index => gridCells[currentPosition + index].classList.contains('taken'))) {
    currentPosition += 1;
  }
  draw();
}

function moveRight() {
  undraw();
  const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1);
  if (!isAtRightEdge) currentPosition += 1;
  if (current.some(index => gridCells[currentPosition + index].classList.contains('taken'))) {
    currentPosition -= 1;
  }
  draw();
}

function rotate() {
  undraw();
  currentRotation = (currentRotation + 1) % 4;
  current = currentShape[currentRotation];

  // Prevent out-of-bound rotation
  const outOfRight = current.some(index => (currentPosition + index) % width === 0);
  const outOfLeft = current.some(index => (currentPosition + index) % width === width - 1);
  if (outOfRight || outOfLeft) currentRotation = (currentRotation + 3) % 4;

  draw();
}

function control(e) {
  if (e.keyCode === 37) moveLeft();
  else if (e.keyCode === 39) moveRight();
  else if (e.keyCode === 40) moveDown();
  else if (e.keyCode === 38) rotate();
}

document.addEventListener('keydown', control);

// Score + Line Clear
function addScore() {
  for (let i = 0; i < 199; i += width) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(i + j);
    }

    if (row.every(index => gridCells[index].classList.contains('taken'))) {
      score += 10;
      scoreDisplay.innerText = score;
      row.forEach(index => {
        gridCells[index].classList.remove('taken', 'tetromino', ...shapeClasses);
      });

      const removed = gridCells.splice(i, width);
      gridCells.unshift(...removed);
      gridCells.forEach(cell => grid.appendChild(cell));
    }
  }
}

function checkGameOver() {
  if (current.some(index => gridCells[currentPosition + index].classList.contains('taken'))) {
    clearInterval(timerId);
    alert('Game Over! Final Score: ' + score);
  }
}

draw();
timerId = setInterval(moveDown, 1000);
