var board = [ //buffer spaces around edge of entire board
 			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0],
			[0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0],
			[0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		];

var tickBoard = [ //all changes to be made simultaneously
 			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0],
			[0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0],
			[0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		];

function newCells () {
	    for (var a = 1; a < 20; a++){
		    for (var b = 1; b < 20; b++) {
		    	checkAround(a,b);
		    }
	    }
    if (!_.isEqual(board, tickBoard)){
    } else {
        stagnant = true;
    }
}

function checkAround (x,i){
//if dead and 3 lives around, make live. if alive and less than two, make dead.
//if alive and 2/3 then still live. if alive and more than 3, make dead.
	var liveAround = 0;
	if (board[x][i-1] === 1) {liveAround++};// left
	if (board[x-1][i-1] === 1) {liveAround++};// up-left
	if (board[x-1][i] === 1) {liveAround++};//above
	if (board[x-1][i+1] === 1) {liveAround++}// up-right
	if (board[x][i+1] === 1) {liveAround++};// right
	if (board[x+1][i+1] === 1) {liveAround++};//down-right
	if (board[x+1][i] === 1) {liveAround++};//below
	if (board[x+1][i-1] === 1) {liveAround++};//down-left
	if (liveAround <= 1) {tickBoard[x][i] = 0;};
	if (liveAround === 3) {tickBoard[x][i] = 1;};
	if (liveAround > 3 && board[x][i] === 1) {tickBoard[x][i] = 0;};
};

var stagnant = false;

function tick (){
		for (var y = 1; y < 20; y++){
			for (var z = 1; z < 20; z++) {
				board[y][z] = tickBoard[y][z]
				if (tickBoard[y][z] == 1){
					$("#" + y + "-" + z).animate({ backgroundColor: "#000000" }, 700);
				} else {
					$("#" + y + "-" + z).animate({ backgroundColor: "#FFFFFF" }, 700);
				}
		    }
        }
}

function cellsAlive(){
    var alive = 0
    for (var f = 1; f < 20; f++){
        for (var g = 1; g < 20; g++) {
            if (board[f][g] == 1){
                alive++;
            }
        }
    }
    if (alive > 0){
        return true;
    } else {
        return false;
    }
}



$(document).ready( function(){
	tick();
	$( "#begin" ).click(function() {
        for (var t = 1; t <= 10; t++) {
            if (!cellsAlive() || stagnant) {
                break;
            }
            newCells();
            tick();
          };
	});

	$("#step").click(function(){

            newCells();
    		tick();
	});

	$("#clear").click(function(){
		for (var f = 1; f < 20; f++){
			for (var g = 1; g < 20; g++) {
				board[f][g] = 0;
				tickBoard[f][g] = 0;
			}
		}
		tick();
	});

	$(".col").click(function(){
        stagnant = false;
		var clicked = event.target.id;
		var cell = clicked.split("-");
		var row = cell[0];
		var column = cell[1];
		if (board[row][column] === 1)
			{
				board[row][column] = 0;
				tickBoard[row][column] = 0;
				$("#"+ row + "-" + column).animate({ backgroundColor: "#FFFFFF" }, 1);

			}
		else {
				board[row][column] = 1;
				tickBoard[row][column] = 1;
				$("#"+ row + "-" + column).animate({ backgroundColor: "#000000" }, 1);
			};
	});

});
