let player1 = "X";
let player2 = "O";
var activePlayer = player1;
var fields = ["+","+","+","+","+","+","+","+","+"];
var winsPlayer1 = 0;
var winsPlayer2 = 0;
    

function check(id) {
    pushArray(id);
    updateGameField();
    checkWinner();
}

//save gamefield in a array
function pushArray(id) {
    idSplit= id.split("_")
    number = idSplit[1];
    fields[number-1] = activePlayer;
}

// swich players
function switchPlayer() {
    if (activePlayer == player1) {
        activePlayer = player2;
    } else {
        activePlayer = player1;
    }
}

// check the fields for 3 in a row. end game or next player
function checkWinner() {
    if (
        /*Wagerecht */
        fields[0]!=='+' && fields[0]=== fields[1] && fields[1]=== fields[2] ||
        fields[3]!=='+' && fields[3]=== fields[4] && fields[4]=== fields[5] ||
        fields[6]!=='+' && fields[6]=== fields[7] && fields[7]=== fields[8] ||
        /*Senkrecht */
        fields[0]!=='+' && fields[0]=== fields[3] && fields[3]=== fields[6] ||
        fields[1]!=='+' && fields[1]=== fields[4] && fields[4]=== fields[7] ||
        fields[2]!=='+' && fields[2]=== fields[5] && fields[5]=== fields[8] ||
        /*Cross */
        fields[0]!=='+' && fields[0]=== fields[4] && fields[4]=== fields[8] ||
        fields[2]!=='+' && fields[2]=== fields[4] && fields[4]=== fields[6]
        ){
            scoreUp();
            setTimeout(function() {
                alert("winner is " + activePlayer)
            }, 1000);
        } else {
            switchPlayer();
    }
}

function isDraw() {
    for (let i = 0; i < fields.length; i++) {
        const element = fields[i];
        
    }
}

//clear the gamefield
function next_round() {
    for (let index = 1; index < 10; index++) {
        fields[index-1] = "+";
    }
    updateGameField();
}

//reset gamefield and scores to zero
function reset_game() {
    next_round();
    document.getElementById('score1').innerHTML = 0;
    document.getElementById('score2').innerHTML = 0;
}

// set the score +1 for the winner
function scoreUp() {
    if (activePlayer === "X") {
        winsPlayer1++;
        document.getElementById('score1').innerHTML = winsPlayer1;
    } else {
        winsPlayer2++;
        document.getElementById('score2').innerHTML = winsPlayer2;
    }
}

// render the array data to playfield
function updateGameField() {
    for (let i = 0; i < fields.length; i++) {
        const element = fields[i];
        field = "field_"+ (i+1);
        document.getElementById(field).innerHTML = element;
    }
}