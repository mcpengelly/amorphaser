module amorphaser.Entity {
	/**
	 *		game: Game;
	 *		blade: any;
	 *		isSwinging: boolean; :
	 *		swingDelay: number; : How long the player is stuck to the spot after swinging
	 *		swingArcDistance: number; : How far the sword swings around the player
	 */

	//Check this out to fix this 2 level inheritance
	//https://stackoverflow.com/questions/16839146/extending-base-class-methods-with-multiple-levels-of-inheritance-typescript
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

			//this.blade.rotation = -90;
			//http://www.html5gamedevs.com/topic/6514-spriteangle-and-bodyrotation-questions/
			this.blade.angle = -90;
			this.isSwinging = false;
			this.swingDelay = 500;
			this.swingArcDistance = 90;

			//this.body.collideWorldBounds = true;

			//game.add.existing(this);

			this.body.velocity.setTo(300, 0);
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
							//this.blade.rotation -= this.swingArcDistance;
							this.blade.angle = -90;
							this.isSwinging = false;
						}, this);
					}
				}
				else {
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
