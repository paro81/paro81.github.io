const canvas = document.getElementById('gameOfLife');
const ctx = canvas.getContext('2d');

const rows = 60;
const cols = 60;
const cellSize = 10;
let grid = createGrid(rows, cols);
let nextGrid = createGrid(rows, cols);

function createGrid(rows, cols) {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
}

function drawGrid(grid) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            ctx.beginPath();
            ctx.rect(col * cellSize, row * cellSize, cellSize, cellSize);
            ctx.fillStyle = grid[row][col] ? 'black' : 'white';
            ctx.fill();
            ctx.stroke();
        }
    }
}

function updateGrid() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = grid[row][col];
            const neighbors = countNeighbors(grid, row, col);

            if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
                nextGrid[row][col] = 0;
            } else if (cell === 0 && neighbors === 3) {
                nextGrid[row][col] = 1;
            } else {
                nextGrid[row][col] = cell;
            }
        }
    }

    [grid, nextGrid] = [nextGrid, grid];
}

function countNeighbors(grid, x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const row = (x + i + rows) % rows;
            const col = (y + j + cols) % cols;
            count += grid[row][col];
        }
    }
    return count;
}

function gameLoop() {
    drawGrid(grid);
    updateGrid();
    requestAnimationFrame(gameLoop);
}

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / cellSize);
    const y = Math.floor((event.clientY - rect.top) / cellSize);
    grid[y][x] = grid[y][x] ? 0 : 1;
    drawGrid(grid);
});

requestAnimationFrame(gameLoop);
