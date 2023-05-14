let player1 = "X";
let player2 = "O";
var activePlayer = player1;

var fields = ["+","+","+","+","+","+","+","+","+"]
    

function check(id) {
    document.getElementById(id).innerHTML = activePlayer;
    idSplit= id.split("_")
    number = idSplit[1];
    fields[number-1] = activePlayer;
    checkWinner();
    switchPlayer();
    console.log(fields)
}

function switchPlayer() {
    if (activePlayer == player1) {
        activePlayer = player2;
    } else {
        activePlayer = player1;
    }
}

function checkWinner() {
    if (
        fields[0]!=='+' && fields[0]=== fields[1] && fields[1]=== fields[2]
        ){
        /* hier muss dann ne reaktion rein */
    }
}