module amorphaser.Entity {
	export class Player {
		game: Game;
		width: number;
		height: number;
		playerImg: Phaser.Sprite;

		constructor(game) {
			this.game = game;
			this.width = game.width * 0.5;
			this.height = 40;

			var centreX = this.width / 2;

			// this.playerImg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
		}
	}
}
