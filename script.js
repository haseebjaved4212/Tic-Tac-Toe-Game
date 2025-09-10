const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const status = document.getElementById('status');
const restartButton = document.getElementById('restartButton');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');

let isXTurn = true;
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    themeIcon.textContent = document.body.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
});

// Initialize game
function initGame() {
    cells.forEach(cell => {
        cell.classList.remove('x', 'o', 'winning-cell');
        cell.addEventListener('click', handleCellClick, { once: true });
    });
    gameState = ['', '', '', '', '', '', '', '', ''];
    isXTurn = true;
    gameActive = true;
    status.textContent = "Player X's turn";
}

// Handle cell click
function handleCellClick(e) {
    const cell = e.target;
    const index = Array.from(cells).indexOf(cell);
    
    if (!gameActive || gameState[index] !== '') return;
    
    const currentPlayer = isXTurn ? 'x' : 'o';
    placeMark(cell, currentPlayer);
    gameState[index] = currentPlayer;
    
    if (checkWin(currentPlayer)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
    }
}

// Place mark on cell
function placeMark(cell, currentPlayer) {
    cell.classList.add(currentPlayer);
}

// Check for win
function checkWin(currentPlayer) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
}

// Check for draw
function isDraw() {
    return gameState.every(cell => cell !== '');
}

// End game
function endGame(draw) {
    gameActive = false;
    if (draw) {
        status.textContent = "Game ended in a draw!";
    } else {
        const winner = isXTurn ? 'X' : 'O';
        status.textContent = `Player ${winner} wins!`;
        highlightWinningCells();
    }
}

// Highlight winning cells
function highlightWinningCells() {
    const currentPlayer = isXTurn ? 'x' : 'o';
    winningCombinations.forEach(combination => {
        if (combination.every(index => gameState[index] === currentPlayer)) {
            combination.forEach(index => {
                cells[index].classList.add('winning-cell');
            });
        }
    });
}

// Swap turns
function swapTurns() {
    isXTurn = !isXTurn;
    status.textContent = `Player ${isXTurn ? 'X' : 'O'}'s turn`;
}

// Restart game
restartButton.addEventListener('click', initGame);

// Initialize game on load
initGame(); 