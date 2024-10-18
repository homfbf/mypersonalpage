const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let board = Array(9).fill(null);

// Функція для перевірки на перемогу
function checkWinner(board) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // горизонтально
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // вертикально
        [0, 4, 8], [2, 4, 6]             // діагоналі
    ];
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

// Хід комп'ютера (випадкова клітинка)
function computerMove() {
    let emptyCells = board.map((cell, index) => cell === null ? index : null).filter(val => val !== null);
    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let cellIndex = emptyCells[randomIndex];
    board[cellIndex] = 'O';
    cells[cellIndex].textContent = 'O';
    if (checkWinner(board)) {
        setTimeout(() => alert('Комп\'ютер переміг!'), 100);
    }
}

// Обробка кліку
function handleClick(event) {
    const cellIndex = event.target.getAttribute('data-index');
    if (!board[cellIndex]) {
        board[cellIndex] = 'X';
        event.target.textContent = 'X';
        if (checkWinner(board)) {
            setTimeout(() => alert('Ви перемогли!'), 100);
        } else {
            setTimeout(computerMove, 500);
        }
    }
}

// Додаємо обробники подій на кожну клітинку
cells.forEach(cell => cell.addEventListener('click', handleClick));
