let player1 = "X";
let player2 = "O";
var activePlayer = player1;
var fields = ["+","+","+","+","+","+","+","+","+"];
var winsPlayer1 = 0;
var winsPlayer2 = 0;
    

function check(id) {
    document.getElementById(id).innerHTML = activePlayer;
    idSplit= id.split("_")
    number = idSplit[1];
    fields[number-1] = activePlayer;
    console.log(fields)
    checkWinner();
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


function next_round() {
    for (let index = 1; index < 10; index++) {
        element = `field_${index}`;
        document.getElementById(element).innerHTML = "+";
        fields[index-1] = "+";
    }
}


function reset_game() {
    next_round();
    document.getElementById('score1') = 0;
    document.getElementById('score2') = 0;
}

function scoreUp() {
    if (activePlayer === "X") {
        winsPlayer1++;
        document.getElementById('score1').innerHTML = winsPlayer1;
    } else {
        winsPlayer2++;
        document.getElementById('score2').innerHTML = winsPlayer2;
    }
}




































