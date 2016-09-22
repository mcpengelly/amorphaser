module amorphaser.State {
	export class Game extends Phaser.State {
		bg: Phaser.Sprite;
		player: Entity.Player;
		patPlayer: Entity.PatPlayer;

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

			//this.player = new Entity.Player(this.game, 100, 200);

			this.patPlayer = new Entity.PatPlayer(this.game, 100, 100);
		}

		update() {
			this.bg.rotation += 0.001;
		}
	}
}
