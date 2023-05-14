let player1 = "X";
let player2 = "O";
var activePlayer = player1;
var fields = ["+","+","+","+","+","+","+","+","+"];
    

function check(id) {
    document.getElementById(id).innerHTML = activePlayer;
    idSplit= id.split("_")
    number = idSplit[1];
    fields[number-1] = activePlayer;
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
            setTimeout(500)
            alert("Winner"+ activePlayer)
        } else {
            switchPlayer();
    }
}


function reset_game() {
    for (let index = 1; index < 10; index++) {
        element = `field_${index}`;
        document.getElementById(element).innerHTML = "+";
        fields[index-1] = "+";
    }
}




































