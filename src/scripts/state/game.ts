module amorphaser.State {
	export class Game extends Phaser.State {
		bg: Phaser.Sprite;
		player: Entity.Player;
		patPlayer: Entity.PatPlayer;
		enemy: Entity.Enemy;


		preload() {
			//this.game.physics.startSystem(Phaser.Physics.ARCADE);
			this.game.physics.startSystem(Phaser.Physics.P2JS);
			this.game.physics.p2.restitution = 0.8;
		}

		create() {
			this.bg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaser-logo');
			this.bg.anchor.x = 0.5;
			this.bg.anchor.y = 0.5;

			// Center game canvas on page
			this.game.scale.pageAlignHorizontally = true;
			this.game.scale.pageAlignVertically = true;
			// Change bg color
			this.game.stage.backgroundColor = '#87CEEB';


			this.patPlayer = new Entity.PatPlayer(this.game, 100, 200);
			this.enemy = new Entity.Enemy(this.game, 700, 200);

			//  Enable if for physics. This creates a default rectangular body.
			this.game.physics.p2.enable(this.patPlayer, true);
			this.patPlayer.body.setZeroDamping();

		}

		update() {
			this.bg.rotation += 0.001;

			// object1, object2, collideCallback, processCallback, callbackContext
			//this.game.physics.arcade.collide(this.patPlayer, this.enemy, function(obj1, obj2) { this.game.stage.backgroundColor = '#992d2d'; }, null, this);
		}
	}
}
