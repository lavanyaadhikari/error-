/*var ball;
var connection;
var positions;
var pos;

function setup(){
    createCanvas(1000,500);
    //connecting 
    connection = firebase.database();
    // referring to our database
    positions = connection.ref('myBall/positions');
    //on function works like a listener
    positions.on("value",readPositionFromDatabase,ifAnyError);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPositionFromDatabase(valueComingFromDatabase){
// x and y value of the database is in pos
pos = valueComingFromDatabase.val();
//the value of pos will go in ball
ball.x = pos.x;
ball.y = pos.y;
}

function ifAnyError(){
    console.log("there is some error");
}

function changePosition(x,y){
    //set is used to write the new values in database or update the database
   connection.ref('myBall/positions').set({
       'x': pos.x+x,
       'y':pos.y+y
   });
}
*/

var canvas;
var gameState = 0;
var PlayerCount;

var database;
 var form, player, game;

 function setup(){
     canvas = createCanvas(400,400);
     database = firebase.database();
     game = new Game();
     game.getState();
     game.start();


 }
function draw(){
//game.display();
}














