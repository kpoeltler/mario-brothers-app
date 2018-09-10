// create a scene object and pass it "Game"
let gameScene = new Phaser.Scene('Game');
// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not Canvas API
  width: 640,
  height: 360,
  scene: gameScene
};

//create a new game object, pass the configuration
let game = new Phaser.Game(config);