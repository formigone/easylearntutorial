const Phaser = require('phaser');

const game = new Phaser.Game(800, 450, Phaser.AUTO, 'gdc221Container', null, false, false);

//game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

game.state.add('Placeholder', require('./scenes/Placeholder'));
game.state.add('Intro', require('./scenes/Copyright'));
game.state.add('Falling', require('./scenes/Falling'));
game.state.add('Main', require('./scenes/Main'));

game.state.add('Map', require('./scenes/Map'));

window.kickStart = function(){
   if (!window.didKickStart){
      window.didKickStart = true;
      game.state.start('Intro');
   }
};


game.state.add('Col', require('./scenes/Col'));
game.state.start('Col');
