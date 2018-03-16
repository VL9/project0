console.log('test');

$('h1').funText(100, 'reverseCandy');

/*to win you need the following positions filled.
game positions = ["0", "1","2",
                  "3", "4", "5",
                  "6", "7", "8"];
0, 1, 2,   winning combos
3, 4, 5,
6, 7, 8,
0, 3, 6,
1, 4, 7,
2, 5, 8,
0, 4, 8,
2, 4, 6,
*/

let game  = document.querySelectorAll('div.gameboard'); //select all the divs on the board with class boardgame
let rematch = document.getElementById('rematch'); //rematch - reset the game
rematch.onclick = function() {
  for(let i=0; i<game.length; i++) {
      game[i].innerHTML = "";
    	turn = 0;
      $(".result").html("");
	}
}

//setting up turns betweens players to alternate between X and O and to stop repeat clicks changing the square from X to O etc
let turn = 0;
for(let i=0; i<game.length; i++) {
  game[i].onclick = function() {
    if (this.innerHTML != ""){
      alert("pick another box");
      return;
    } else if(turn % 2 === 0 ) {     //alternate turns between players
      this.innerHTML = "X"; // &#128034;
    } else if(turn % 2 !== 0) {
      this.innerHTML = "O";    //	&#128007;
    }
    turn++;
    checkWinner();
  }
  }
//game logic - all combinations for X and 0 to win in IF statements.
//once turn counter hits 9 and there is no winner, alert draw
const checkWinner = function() {
  if(
      (game[0].innerText === "X" && game[1].innerText === "X" && game[2].innerText === "X") ||
    	(game[3].innerText === "X" && game[4].innerText === "X" && game[5].innerText === "X") ||
     	(game[6].innerText === "X" && game[7].innerText === "X" && game[8].innerText === "X") ||
    	(game[0].innerText === "X" && game[3].innerText === "X" && game[6].innerText === "X") ||
    	(game[1].innerText === "X" && game[4].innerText === "X" && game[7].innerText === "X") ||
    	(game[2].innerText === "X" && game[5].innerText === "X" && game[8].innerText === "X") ||
    	(game[0].innerText === "X" && game[4].innerText === "X" && game[8].innerText === "X") ||
      (game[2].innerText === "X" && game[4].innerText === "X" && game[6].innerText === "X") ) {
        //$('.gameboard').attr("onClick", "").unbind("click");
        $(".result").html("X WINS!&#128526;");
        return;
  } else if(
      (game[0].innerText === "O" && game[1].innerText === "O" && game[2].innerText === "O") ||
    	(game[3].innerText === "O" && game[4].innerText === "O" && game[5].innerText === "O") ||
     	(game[6].innerText === "O" && game[7].innerText === "O" && game[8].innerText === "O") ||
    	(game[0].innerText === "O" && game[3].innerText === "O" && game[6].innerText === "O") ||
    	(game[1].innerText === "O" && game[4].innerText === "O" && game[7].innerText === "O") ||
    	(game[2].innerText === "O" && game[5].innerText === "O" && game[8].innerText === "O") ||
    	(game[0].innerText === "O" && game[4].innerText === "O" && game[8].innerText === "O") ||
      (game[2].innerText === "O" && game[4].innerText === "O" && game[6].innerText === "O") ) {
    		$(".result").html("O WINS!&#128526;");
        return;
  } else if (turn === 9) {
        $(".result").html("NOBODY WINS&#9785;");
  }
}
$('.gameboard').addClass('animated bounceInLeft');
$('.result').addClass('animated infinite bounce');
