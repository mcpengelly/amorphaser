module amorphaser.State {
	export class Preloader extends Phaser.State {
		loadingBar: Entity.PreloadBar;

		preload() {
			this.loadingBar = new Entity.PreloadBar(this.game);
			this.load.image('phaser-logo', 'assets/images/phaser-logo.png');
			this.load.image('player', 'assets/images/player_1.png');
			this.load.image('blade', 'assets/images/blade.png');
			this.load.image('enemy', 'assets/images/enemy.png');
		}

		create() {
			this.loadingBar.setFillPercent(100);
			let tween = this.game.add.tween(this.loadingBar).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
			tween.onComplete.add(this.startGame, this);
		}

		startGame() {
			this.game.state.start('game', true);
		}

		loadUpdate() {
			this.loadingBar.setFillPercent(this.load.progress);
		}
	}
}
