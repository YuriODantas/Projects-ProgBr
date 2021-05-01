document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

let players = document.querySelector('.main-points');
let player1 = 0;
let player2 = 0;

function updatePoints() {
    if (playerTime == 0) {
        player1++
    } else if (playerTime == 1) {
        player2++
    }

    players.innerHTML = `<h2 class="player1">Player1: ${player1}</h2>
    <h2 class="player2">Player2: ${player2}</h2>`
}
function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            updatePoints();
        }, 10);
    };
    updateSquare(position);
};

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
};