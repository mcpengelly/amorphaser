module amorphaser.Entity {
	/**
	 *		game: Game;
	 *		blade: any;
	 *		isSwinging: boolean; :
	 *		swingDelay: number; : How long the player is stuck to the spot after swinging
	 *		swingArcDistance: number; : How far the sword swings around the player
	 */

	//Typescript subclass of a subclass info:
	//https://stackoverflow.com/questions/16839146/extending-base-class-methods-with-multiple-levels-of-inheritance-typescript
	export class PatPlayer extends Entity.BaseEntity {
		game: Game;
		blade: Phaser.Sprite;
		isSwinging: boolean;
		swingDelay: number;
		swingArcDistance: number;

		constructor(game: Phaser.Game, x: number, y: number) {
			super(game, x, y, 'player');
			this.game = game;
			this.game.physics.p2.enable(this, true);
			this.body.setZeroDamping();

			this.blade = this.game.add.sprite(0, 0, 'blade');
			// let playerCollisionGroup = game.physics.p2.createCollisionGroup();
			// this.body.setCollisionGroup(playerCollisionGroup);

			// this.addChild(this.blade); // doesnt work correctly with p2??

			this.game.physics.p2.enable(this.blade, true);
			this.blade.body.kinematic = true; //we only move the blade using a tween, no need for forces
			// this.blade.body.setCollisionGroup(playerCollisionGroup);

			// this.blade.body.angle = -90;
			this.isSwinging = false;
			this.swingDelay = 500;
			this.swingArcDistance = 90;
		}

		zeroVelocity() {
			this.body.velocity.x = 0;
			this.body.velocity.y = 0;
		}

		update() {
			/*
				HACK: shouldnt handle positioning this way but only way
				i know to work around addChild w/ p2
			*/
			this.blade.body.x = this.body.x;
			this.blade.body.y = this.body.y;
			//remove if possible

			if(this.isSwinging){
				this.zeroVelocity();
			} else {
				if (this.game.input.mousePointer.isDown){
					if(!this.isSwinging){
						this.isSwinging = true;

						//blade rotation tween (now uses this.blade.body.angle instead)
						let bladeRotationTween = this.game.add.tween(this.blade.body)
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
							this.blade.body.angle = -90;
							this.isSwinging = false;
						}, this);
					}
				}
				else {
					// face the pointer
					//this.rotation = this.game.physics.arcade.angleToPointer(this);
					//
					//http://www.html5gamedevs.com/topic/5987-force-sprite-to-rotate-with-p2-physics-body/
					//Adapted simple solution from ^^^
					//Prettier solution allows adjusting rotation speed towards pointer
					this.body.rotation = this.game.physics.arcade.angleToPointer(this) + Math.PI/2;


					let moveSpeed = 400;
					//this.game.physics.arcade.moveToPointer(this, moveSpeed);

					let mousePointer = this.game.input.mousePointer;
					let mouseLocation = new Phaser.Point(mousePointer.x, mousePointer.y);

					let playerLocation = new Phaser.Point(this.body.x, this.body.y);

					//player to mouse vector in world space
					let playerToMouseWS = Phaser.Point.subtract(mouseLocation, playerLocation);
					//
					let playerToMouseWorldSpaceNormalized = Phaser.Point.normalize(playerToMouseWS);
					//
					this.body.velocity.x = playerToMouseWorldSpaceNormalized.x * moveSpeed;
					this.body.velocity.y = playerToMouseWorldSpaceNormalized.y * moveSpeed;
					//
					//
					let bodies = this.game.physics.p2.hitTest(mouseLocation, [this]);
					if(bodies.length !== 0) {
						console.log('stop');
						this.zeroVelocity();
					}
				}
			}
		}

	}
}
