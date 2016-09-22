module amorphaser.Entity {
	/**
	 *		game: Game;
	 *		blade: any;
	 *		isSwinging: boolean; :
	 *		swingDelay: number; : How long the player is stuck to the spot after swinging
	 *		swingArcDistance: number; : How far the sword swings around the player
	 */
	export class Enemy extends Entity.BaseEntity {
		game: Game;
		constructor(game: Phaser.Game, x: number, y: number) {
			super(game, x, y, 'enemy');
			this.game = game;
			game.add.existing(this);

			//this.body.collideWorldBounds = true;
		}

		update() {
			this.body.velocity.setTo(-300, 0);
		}


	}
}
