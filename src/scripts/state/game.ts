module amorphaser.State {
	export class Game extends Phaser.State {
		bg: Phaser.Sprite;
		player: Entity.Player;
		testEnemy: Entity.TestEnemy;
		patPlayer: Entity.PatPlayer;
		enemy: Entity.Enemy;
		sprite1: any;
		sprite2: any;

		preload() {
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
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

			this.player = new Entity.Player(this.game, 100, 200);
			this.testEnemy = new Entity.TestEnemy(this.game, 300, 200);
			this.game.physics.enable([ this.player, this.testEnemy ], Phaser.Physics.ARCADE);


			// this.patPlayer = new Entity.PatPlayer(this.game, 100, 200);
			// this.enemy = new Entity.Enemy(this.game, 700, 200);



			//Test stuff
			// this.sprite1 = this.game.add.sprite(50, 300, 'player');
			// console.log(typeof this.sprite1);
			// console.log('sprite1 = ', this.sprite1);
			// this.sprite2 = this.game.add.sprite(700, 320, 'enemy');
			// this.game.physics.enable( [ this.sprite1, this.sprite2 ], Phaser.Physics.ARCADE);
			// this.sprite1.body.velocity.x = 300;
			//this.sprite2.body.velocity.x = -300;
		}

		update() {
			this.bg.rotation += 0.001;

			// if(this.game.physics.arcade.collide(this.player, this.enemy, function() {
			// 	console.log('Ooooooh');
			// }, null, this)) {
			// 	console.log('Boooom');
			// }


			// object1, object2, collideCallback, processCallback, callbackContext
			// this.game.physics.arcade.collide(this.sprite1, this.sprite2, function(obj1, obj2) { this.game.stage.backgroundColor = '#992d2d'; }, null, this);

			this.game.physics.arcade.collide(this.player, this.testEnemy, function(obj1, obj2) { this.game.stage.backgroundColor = '#992d2d'; }, null, this);
		}

		render() {
			// this.game.debug.bodyInfo(this.patPlayer, 32, 32);
			// this.game.debug.body(this.patPlayer);

			// this.game.debug.body(this.enemy);
		}
	}
}
