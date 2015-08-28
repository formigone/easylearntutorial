const Phaser = require('phaser');
/*
var Test = function(){
    this.player = null;
    this.heroState = {
        standingRight: 'standingRight',
        runningRight: 'runningRight',
        jumpingRight: 'jumpingRight',

        standingLeft: 'standingLeft',
        runningLeft: 'runningLeft',
        jumpingLeft: 'jumpingLeft'
    };
};

Test.prototype = {
    preload: function() {
        this.load.atlasJSONHash('mm', '/img/megaman.gif', '/asset/sprites/megaman.json');
    },
    create: function() {
        const heroState = this.heroState;
        let player = game.add.sprite(250, 250, 'mm');
        player.scale.x = 3;
        player.scale.y = 3;

        player.anchor.set(0.5, 0.5);
        player.heroState = heroState;

        player.animations.add(heroState.standingRight, [
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRight',
            'standingRightBlink'
        ], 16, true, false);

        player.animations.add(heroState.runningRight, [
            'runningRight0',
            'runningRight1',
            'runningRight2',
        ], 10, true, false);

        player.animations.add(heroState.jumpingRight, [
            'jumpingRight'
        ], 1, true, false);

        this.player = player;
    },
    update: function() {
        const player = this.player;
        player.animations.play(this.heroState.runningRight);
        player.x += 4;
        if (player.x > 800) {
            player.x = -25;
        }
    }
};
*/

const game = new Phaser.Game(800, 450, Phaser.AUTO, 'gdc221Container', null, false, false);

//game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

game.state.add('Placeholder', require('./scenes/Placeholder'));
game.state.add('Intro', require('./scenes/Copyright'));
game.state.add('Falling', require('./scenes/Falling'));
game.state.add('Main', require('./scenes/Main'));

window.kickStart = function(){
   if (!window.didKickStart){
      window.didKickStart = true;
      game.state.start('Intro');
   }
};

game.state.start('Falling');
