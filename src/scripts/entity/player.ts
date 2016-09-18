module amorphaser.Entity {
	export class Player extends Phaser.Sprite {
		game: Game;
		width: number;
		height: number;

		constructor(game: Phaser.Game, x: number, y: number) {
			super(game, x, y, 'player', 0);
			this.anchor.setTo(0.5, 0);
			this.game.physics.enable(this, Phaser.Physics.ARCADE);
			game.add.existing(this);
		}

		update() {
			if (this.game.input.mousePointer.isDown){
				this.body.velocity.setTo(0, 0);
			} else {
				// face the pointer
				this.rotation = this.game.physics.arcade.angleToPointer(this);

				let speed = 400;
				this.game.physics.arcade.moveToPointer(this, speed);

				// if it's overlapping the mouse, don't move any more
				if (Phaser.Rectangle.contains(this.body, this.game.input.x, this.game.input.y)){
					this.body.velocity.setTo(0, 0);
				}
			}
		}
	}
}
