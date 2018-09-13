// Initialize the game instance

// window.myGame = window.myGame || {};

// create a scene object and pass it "Game"
let gameScene = new Phaser.Scene("Game");
console.log(Phaser);
// Load assets
gameScene.preload = function() {
  // Load images,scene: background, players
  this.load.image("background", "assets/background.png");
  this.load.image("player2", "assets/mushroom.png");
  this.load.image("enemy", "assets/boo.png");
  this.load.image("player1", 'assets/mario.png');

};

// called once after preload ends
gameScene.create = function() {
  // create bg sprite
  let bg = this.add.sprite(0, 0, "background"); // set this to a variable so that you can change the origin

  //change the origin to the top left corner, use the method setOrigin(0, 0)
  bg.setOrigin(0, 0);

  //change the background scale
  bg.setScale(1);

  //create the player sprites
  let player2 = this.add.sprite(70, 250, "player2");
  let player1 = this.add.sprite(120, 80, "player1");
  // this.player1.displayWidth = 100;
  // this.player1.displayHeight = 150;

  //change player position
  // this.player2.setScale(0.2);
  // this.player1.setScale(0.01);

  //create the enemy sprite
  let enemy = this.add.sprite(200, 190, 'enemy');
  this.enemy.setScale(3)
  this.enemy.displayWidth = 50;
  this.enemy.displayHeight = 70;

  //change angle of sprites
  // player2.setAngle();

  // center the sprite
  // one way to do it is
  bg.setPosition(640/2, 360/2);

  // another way to center the sprite is
  let gameWidth = this.sys.game.config.width; // this. refers to our gameScene object, sys. refers to Phaser's system, game. our object, config. is an object that includes everything, and dot width or dot height
  let gameHeight = this.sys.game.config.height;
  console.log(gameWidth, gameHeight, "gameWidth and gameHeight");
  console.log(bg, "background image");
  console.log(this, "gameScene");
};

//this is called up to 60 times per second
gameScene.update = function(){
  //this.enemy.x += 1;
  //this.enemy.angle += 1;

//I want the enemy1 to grow over time till it gets to its original dimensions
this.enemy.scaleX += 0.01;
this.enemy.scaleY += 0.01;

};
// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not Canvas API
  width: 640,
  height: 360,
  scene: gameScene
};

//create a new game object, pass the configuration
let game = new Phaser.Game(config);
