module amorphaser.Entity {
	/**
	 *		game: Game;
	 *		blade: any;
	 *		isSwinging: boolean; :
	 *		swingDelay: number; : How long the player is stuck to the spot after swinging
	 *		swingArcDistance: number; : How far the sword swings around the player
	 */
	export class PatPlayer extends Entity.BaseEntity {
		game: Game;
		blade: any;
		isSwinging: boolean;
		swingDelay: number;
		swingArcDistance: number;

		constructor(game: Phaser.Game, x: number, y: number) {
			super(game, x, y, 'player');

			this.game = game;
			this.blade = this.addChild(game.add.sprite(0, 0, 'blade'));
			this.blade.rotation = -50;
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
						let bladeRotationTween = this.game.add.tween(this.blade)
						.to({ angle: +this.swingArcDistance },
							this.swingDelay,
							Phaser.Easing.Exponential.Out,
							true
						);

						//Tips from this source
						//http://www.html5gamedevs.com/topic/1651-tween-oncompletecallback/
						//Add callback when onComplete event triggers for bladeRotationTween
						bladeRotationTween.onComplete.add(() => {
							//Blade Rotation Finished;
							//Dunno what arguments this callback gets so printing it out just in case
							// console.log(arguments);
							this.blade.rotation -= this.swingArcDistance;
							this.isSwinging = false;
						}, this);
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
