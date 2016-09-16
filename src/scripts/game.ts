/// <reference path="../refs.d.ts" />

module amorphaser {
    export class Game extends Phaser.Game {

        constructor() {
            super({
                width: window.innerWidth,
                height: window.innerHeight,
                renderer: Phaser.AUTO,
                forceSetTimeOut: false
            });

            this.state.add('preloader', State.Preloader, true);
            this.state.add('game', State.Game);
        }
    }
}

// export Game to window
var Game = amorphaser.Game;

