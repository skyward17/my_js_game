// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    var time = new Date().getTime() * 0.001; //Speed of movement
    var x = Math.sin(time) * 96 + 128; //Moves back and forth on the x axis
    //Enemy Movement
    context.fillStyle = 'images/enemy-bug.png';
    context.beginPath();
    //context.createPattern(image,"repeat|repeat-x|repeat-y|no-repeat");
    context.arc( x, 100, 20, 0, Math.PI * 2, true ); //Changed y from y to 100.
    context.closePath();
    context.fill();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function() {
    this.player = PlayersCharacter;  //Loads the character the player selected.
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Select Player modal with Images.
/*
update()
render()
handleInput() //this x++ y++  based on keyboard input.
*/
    this.plyrBoy = 'images/char-boy.png';
    this.plyrCatGirl = 'images/char-cat-girl.png';
    this.plyrHornGirl = 'images/char-horn-girl.png';
    this.plyrPinkGirl = 'images/char-pink-girl.png';
    this.plyrPrincessGirl = 'images/char-princess-girl.png';
    this.plyrSEAL = 'images/char-seal-boy.png';
};


// Draw the Player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = ["sprite"];

var player = Player;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
//Event listener keys that will incrementally move x or y ++ -- etc. x left and right   y up and down
//Will have to define handleInput() method.

checkCollisions();
