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

			this.player = new Phaser.BitmapData(game, 'player', this.width, this.height);
			this.playerImg = game.add.sprite(game.world.centerX - centreX, (game.height * 0.9) - this.height, this.player);
			// this.playerImg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
		}
		// update() {
		// 	this.img.angle += 1;

		// 	if (this.game.input.mousePointer.isDown){
		// 		this.player.body.velocity.setTo(0, 0);
		// 	} else {
		// 		// face the pointer
		// 		this.player.rotation = this.game.physics.arcade.angleToPointer(this.player);

		// 		let playerSpeed = 400;
		// 		this.game.physics.arcade.moveToPointer(this.player, playerSpeed);

		// 		// if it's overlapping the mouse, don't move any more
		// 		if (Phaser.Rectangle.contains(this.player.body, this.game.input.x, this.game.input.y)){
		// 			this.player.body.velocity.setTo(0, 0);
		// 		}
		// 	}
		// }
	}
}
