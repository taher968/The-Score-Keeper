var scorePlayer1 = 0;
var scorePlayer2 = 0;
var game = true;

var button1 = document.querySelector("#player-1");
var button2 = document.querySelector("#player-2");
var reset = document.querySelector("#reset");
var result = document.querySelector(".result");

var score1 = document.querySelector("#score-1");
var score2 = document.querySelector("#score-2");
var maxScore = document.querySelector("#play-number");
var input = document.querySelector("input");

function reset1() {
    score1.style.color = "black";
    score2.style.color = "black";
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    game = true;
    result.textContent = "";
}

button1.addEventListener("click",function() {
    if(game) {
        scorePlayer1++;
        score1.textContent = scorePlayer1;
        if(scorePlayer1 == maxScore.textContent) {
            score1.style.color = "green";
            console.log("The Game is over");
            game = false;
            result.textContent = "Player 1 wins";
        }
    }

});

button2.addEventListener("click",function() {
    if(game) {
        scorePlayer2++;
        score2.textContent = scorePlayer2;
        if(scorePlayer2 == maxScore.textContent) {
            score2.style.color = "green";
            console.log("The Game is over");
            result.textContent = "Player 2 wins"
            game = false;
    
        }
    }



});

input.addEventListener("change",function() {
    maxScore.textContent = input.value;
    reset1();
})

reset.addEventListener("click",function() {
    reset1();
})
