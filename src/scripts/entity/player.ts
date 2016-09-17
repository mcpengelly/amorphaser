module amorphaser.Entity {
	export class Player {
		game: Game;
		width: number;
		height: number;
		playerImg: Phaser.Sprite;

		constructor(game) {
			this.game = game;
			this.width = game.width * 0.5;
			this.height = 40;

			var centreX = this.width / 2;

			this.playerImg = game.add.sprite(game.world.centerX - centreX, (game.height * 0.9) - this.height);
		}
	}
}

// // Create a new Phaser game object with a single state that has 3 functions
// var game = new Phaser.Game(500, 500, Phaser.AUTO, 'area', {
// 		preload: preload,
// 		create: create,
// 		update: update
// });

// // Called first
// function preload() {
// 	game.load.image('playerOne', 'img/player_1.png');
// }

// // Called after preload
// function create() {
// 	// Center game canvas on page
// 	game.scale.pageAlignHorizontally = true;
// 	game.scale.pageAlignVertically = true;
// 	// Change background color
// 	game.stage.backgroundColor = '#87CEEB';

// 	// Add the player to the middle of the game area
// 	playerOne = game.add.sprite(game.world.centerX, game.world.centerY, 'playerOne');
// 	playerOne.anchor.set(0.5, 0.5);

// 	game.physics.enable(playerOne, Phaser.Physics.ARCADE);
// }

// // Called once every frame, ideally 60 times per second
// function update() {
// 	if (game.input.mousePointer.isDown){
// 		playerOne.body.velocity.setTo(0, 0);
// 	} else {
// 		//face the pointer
// 		playerOne.rotation = game.physics.arcade.angleToPointer(playerOne);

// 		var playerSpeed = 400;
// 		game.physics.arcade.moveToPointer(playerOne, playerSpeed);

// 		//  if it's overlapping the mouse, don't move any more
// 		if (Phaser.Rectangle.contains(playerOne.body, game.input.x, game.input.y)){
// 			playerOne.body.velocity.setTo(0, 0);
// 		}
// 	}
// }
