// create a scene object and pass it "Game"
let gameScene = new Phaser.Scene('Game');

// Load assets
gameScene.preload = function() {
  // Load images,scene: background, players
  this.load.image('background', 'assets/block.png');
  this.load.image('player', 'assets/mushroom.png');
};

// called once after preload ends
gameScene.create = function(){
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background'); // set this to a variable so that you can change the origin

  //change the origin to the top left corner, use the method setOrigin(0, 0)
   bg.setOrigin(0, 0,);

   //create the player
   let player = this.add.sprite(50, 180, 'player');
  
  // center the sprite
  // one way to do it is
  bg.setPosition(640/2, 360/2);
  

  // another way to center the sprite is
  let gameWidth = this.sys.game.config.width // this. refers to our gameScene object, sys. refers to Phaser's system, game. our object, config. is an object that includes everything, and dot width or dot height
  let gameHeight = this.sys.game.config.height
  console.log(gameWidth, gameHeight);
  console.log(bg, "background image");
  console.log(this, 'gameScene');
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