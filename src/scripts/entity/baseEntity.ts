module amorphaser.Entity {
	/**
	 *		game: Game;
	 *		blade: any;
	 *		isSwinging: boolean; :
	 *		swingDelay: number; : How long the player is stuck to the spot after swinging
	 *		swingArcDistance: number; : How far the sword swings around the player
	 */
	export class BaseEntity extends Phaser.Sprite {
		game: Game;

		constructor(game: Phaser.Game, x: number, y: number, key: string) {
			super(game, x, y, key, 0);
			this.anchor.setTo(0.5, 0.5);
			//
			//this.game.physics.enable(this, Phaser.Physics.ARCADE);
			//
			//  Enable if for physics. This creates a default rectangular body.
			//
			// This does create the physics body but debug doesn't show
			// game.physics.p2.enable(this, true);
			// this.body.setZeroDamping();

			this.game.add.existing(this);
		}


	}
}
