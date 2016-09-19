module amorphaser.Entity {
	/**
	 *		game: Game;
	 *		blade: any;
	 *		isSwinging: boolean; :
	 *		swingDelay: number; : How long the player is stuck to the spot after swinging
	 *		swingArcDistance: number; : How far the sword swings around the player
	 */
	export class Player extends Phaser.Sprite {
		game: Game;
		blade: any;
		isSwinging: boolean;
		swingDelay: number;
		swingArcDistance: number;

		constructor(game: Phaser.Game, x: number, y: number) {
			super(game, x, y, 'player', 0);
			this.anchor.setTo(0.5, 0);
			this.game.physics.enable(this, Phaser.Physics.ARCADE);
			this.blade = this.addChild(game.add.sprite(0, 0, 'blade'));
			this.blade.rotation = -40;
			this.isSwinging = false;
			this.swingDelay = 500;
			this.swingArcDistance = 90;
			game.add.existing(this);
		}

		update() {
			if(this.isSwinging){
				this.body.velocity.setTo(0, 0);
			} else {
				if (this.game.input.mousePointer.isDown){
					if(!this.isSwinging){
						this.isSwinging = true;

						//blade rotation tween
						this.game.add.tween(this.blade)
						.to({ angle: +this.swingArcDistance },
							this.swingDelay-10, //hacky.. tween and setTimeout race to finish otherwise though.
							Phaser.Easing.Exponential.Out,
							true
						);

						// reset swing after some time passes
						setTimeout(() => {
							this.blade.rotation -= this.swingArcDistance;
							this.isSwinging = false;
						}, this.swingDelay);
					}
				} else {
					// face the pointer
					this.rotation = this.game.physics.arcade.angleToPointer(this);

					let moveSpeed = 400;
					this.game.physics.arcade.moveToPointer(this, moveSpeed);

					// if it's overlapping the mouse, don't move any more
					if (Phaser.Rectangle.contains(this.body, this.game.input.x, this.game.input.y)){
						this.body.velocity.setTo(0, 0);
					}
				}
			}
		}

	}
}
