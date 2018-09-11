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

  //change player position
  player2.setScale(0.2);
  player1.setScale(.03);

  //create the enemy sprite
  let enemy = this.add.sprite(200, 190, 'enemy');
  enemy.displayWidth = 120;
  enemy.displayHeight = 180;

  // center the sprite
  // one way to do it is
  // bg.setPosition(640/2, 360/2);

  // another way to center the sprite is
  let gameWidth = this.sys.game.config.width; // this. refers to our gameScene object, sys. refers to Phaser's system, game. our object, config. is an object that includes everything, and dot width or dot height
  let gameHeight = this.sys.game.config.height;
  console.log(gameWidth, gameHeight);
  console.log(bg, "background image");
  console.log(this, "gameScene");
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
