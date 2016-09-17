module amorphaser.State {
	export class Game extends Phaser.State {
		img: Phaser.Sprite;
		player: Phaser.Sprite;

		create() {
			this.img = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaser-logo');
			this.img.anchor.x = 0.5;
			this.img.anchor.y = 0.5;

			// Center game canvas on page
			this.game.scale.pageAlignHorizontally = true;
			this.game.scale.pageAlignVertically = true;
			// Change background color
			this.game.stage.backgroundColor = '#87CEEB';

			this.player = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');

			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
		}

		update() {
			this.img.angle += 1;

			if (this.game.input.mousePointer.isDown){
				this.player.body.velocity.setTo(0, 0);
			} else {
				// face the pointer
				this.player.rotation = this.game.physics.arcade.angleToPointer(this.player);

				let playerSpeed = 400;
				this.game.physics.arcade.moveToPointer(this.player, playerSpeed);

				// if it's overlapping the mouse, don't move any more
				if (Phaser.Rectangle.contains(this.player.body, this.game.input.x, this.game.input.y)){
					this.player.body.velocity.setTo(0, 0);
				}
			}
		}

	}
}

	// // Center game canvas on page
	// game.scale.pageAlignHorizontally = true;
	// game.scale.pageAlignVertically = true;
	// // Change background color
	// game.stage.backgroundColor = '#87CEEB';
