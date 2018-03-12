console.log('test');

$('h1').funText(100, 'reverseCandy');

//testing appending images to the squares for when player picks

/*$(".gameboard#a").click(function() {
  console.log("TEST");
  $(".gameboard#a").append('<img src="images/150x150.jpg">');
});*/

let gameArray = ["_", "_","_",
            "_", "_", "_",
            "_", "_", "_"];

//2 variables => x and o are the players.
//alternate turns => x == even and o == odd?


/*to win you need the following positions filled.
game positions = ["a", "b","c",
                  "d", "e", "f",
                  "g", "h", "i"];
a, b, c,
d, e, f,
g, h, i,
a, d, g,
b, e, h,
c, f, i,
a, e, i,
c, e, g,

*/
