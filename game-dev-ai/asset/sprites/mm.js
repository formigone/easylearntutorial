module.exports = {
    preload: function (game) {
        game.load.atlasJSONHash('mm', '/img/megaman.gif', '/res/megaman.json');
    },
    get: function (game, x, y) {
        var heroState = {
            standingRight: 'standingRight',
            runningRight: 'runningRight',
            jumpingRight: 'jumpingRight',

            standingLeft: 'standingLeft',
            runningLeft: 'runningLeft',
            jumpingLeft: 'jumpingLeft'
        };

        var hero = game.add.sprite(x, y, 'mm');
        hero.anchor.set(0.5, 0.5);
        hero.heroState = heroState;

        hero.animations.add(heroState.standingRight, [
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

        hero.animations.add(heroState.runningRight, [
            'runningRight0',
            'runningRight1',
            'runningRight2',
        ], 10, true, false);

        hero.animations.add(heroState.jumpingRight, [
            'jumpingRight'
        ], 1, true, false);

        return hero;
    }
};
