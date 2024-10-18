let buttonColors = ["red", "blue", "yellow", "green"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

// Початок гри при натисканні будь-якої клавіші
$(document).keydown(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Обробка натискання на кольорові кнопки
$(".box").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

// Перевірка відповіді користувача
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

// Генерація наступної послідовності і автоматичне повторення кольорів
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // Автоматичне повторення всієї послідовності перед кожним рівнем
    let i = 0;
    const interval = setInterval(function() {
        $("#" + gamePattern[i]).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(gamePattern[i]);
        i++;
        if (i >= gamePattern.length) {
            clearInterval(interval);
        }
    }, 600);
}

// Відтворення звуку для кожного кольору
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Анімація натискання на кольорову кнопку
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Перезапуск гри
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
