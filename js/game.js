// create a scene object and pass it "Game"
let gameScene = new Phaser.Scene('Game');

// Load assets
gameScene.preload = function(){
  // Load images,scene: background, players
  this.load.images('background', 'assets/block.png')
  this.load.images('enemy', 'assets/gorilla3.png')
};

// called once after preload ends
gameScene.create = function(){
  // create bg sprite
  this.add.sprite(0, 0, 'background')
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