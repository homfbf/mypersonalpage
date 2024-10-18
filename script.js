function rollDice() {
    // Генерація випадкових значень для обох гравців
    const player1Roll = Math.floor(Math.random() * 6) + 1;
    const player2Roll = Math.floor(Math.random() * 6) + 1;

    // Відображення значень кубиків
    document.getElementById("player1-dice").innerText = player1Roll;
    document.getElementById("player2-dice").innerText = player2Roll;

    // Визначення переможця
    let result;
    if (player1Roll > player2Roll) {
        result = "Гравець 1 виграв!";
    } else if (player1Roll < player2Roll) {
        result = "Гравець 2 виграв!";
    } else {
        result = "Нічия!";
    }
    
    // Вивід результату
    document.getElementById("result").innerText = result;
}

// Автоматичний кидок при завантаженні сторінки
window.onload = rollDice;
