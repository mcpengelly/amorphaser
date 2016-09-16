module amorphaser.State {
	export class Game extends Phaser.State {
		img: Phaser.Sprite;

		create() {
			this.img = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaser-logo');
			this.img.anchor.x = 0.5;
			this.img.anchor.y = 0.5;
		}

		update() {
			this.img.angle += 1;
		}
	}
}
