console.log('test');

$('h1').funText(100, 'reverseCandy');

//testing appending images to the squares for when player picks

/*$(".gameboard#a").click(function() {
  console.log("TEST");
  $(".gameboard#a").append('<img src="images/150x150.jpg">');
});*/
/*let gameArray = ["_", "_","_",
            "_", "_", "_",
            "_", "_", "_"];*/
//2 variables => x and o are the players.
//alternate turns => x == even and o == odd?

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

let game  = document.querySelectorAll('div.gameboard');
let rematch = document.getElementById('rematch');

//rematch button
rematch.onclick = function() {
  for(var i=0; i<game.length; i++) {
      game[i].innerHTML = "";
      game[i].removeAttribute('disabled');
    	turn = 0;
	}
}

let turn = 0;

for(let i=0; i<game.length; i++) {
  game[i].onclick = function() {
    if(turn % 2 == 0 ) {     //alternate turns between players
      this.innerHTML = "X"; // &#128034;
      //$( "div.demo-container" ).html() doing via jquery. how to set image?
    } if(turn % 2 != 0) {
      this.innerHTML = "O";    //	&#128007;
    }
    this.setAttribute('disabled', 'disabled');
    turn++;
    checkWinner();
  }
  }

function checkWinner() {
  if(
      (game[0].innerText == "X" && game[1].innerText == "X" && game[2].innerText == "X") ||
    	(game[3].innerText == "X" && game[4].innerText == "X" && game[5].innerText == "X") ||
     	(game[6].innerText == "X" && game[7].innerText == "X" && game[8].innerText == "X") ||
    	(game[0].innerText == "X" && game[3].innerText == "X" && game[6].innerText == "X") ||
    	(game[1].innerText == "X" && game[4].innerText == "X" && game[7].innerText == "X") ||
    	(game[2].innerText == "X" && game[5].innerText == "X" && game[8].innerText == "X") ||
    	(game[0].innerText == "X" && game[4].innerText == "X" && game[8].innerText == "X") ||
      (game[2].innerText == "X" && game[4].innerText == "X" && game[6].innerText == "X") ) {
    		alert("X wins");
        
  } if(
      (game[0].innerText == "O" && game[1].innerText == "O" && game[2].innerText == "O") ||
    	(game[3].innerText == "O" && game[4].innerText == "O" && game[5].innerText == "O") ||
     	(game[6].innerText == "O" && game[7].innerText == "O" && game[8].innerText == "O") ||
    	(game[0].innerText == "O" && game[3].innerText == "O" && game[6].innerText == "O") ||
    	(game[1].innerText == "O" && game[4].innerText == "O" && game[7].innerText == "O") ||
    	(game[2].innerText == "O" && game[5].innerText == "O" && game[8].innerText == "O") ||
    	(game[0].innerText == "O" && game[4].innerText == "O" && game[8].innerText == "O") ||
      (game[2].innerText == "O" && game[4].innerText == "O" && game[6].innerText == "O") ) {
    		alert("O wins");

  } if(turn == 9) {
        alert("draw");
  }
}


$('.gameboard').addClass('animated bounceInLeft');
