# mario-brothers-app
This is a mario brothers style game using phaser3


//create the player
  let player = this.add.sprite(50, 180, 'player');
  //use depth method to place player on top of the background even though player is being loaded first.
  player.depth = 1;
  console.log(player);
  