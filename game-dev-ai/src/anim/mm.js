const frameKeys = {
    runningRight0: 'runningRight0',
    runningRight1: 'runningRight1',
    runningRight2: 'runningRight2',

    standingRightBlink: 'standingRightBlink',
    standingRight: 'standingRight',

    jumpingRight: 'jumpingRight'
};

module.exports = {
    states: {
        standingRight: 'standingRight',
        runningRight: 'runningRight',
        jumpingRight: 'jumpingRight',

        standingLeft: 'standingLeft',
        jumpingLeft: 'jumpingLeft'
    },
    anim: {
        standingRight: {
            frames: [
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRight,
                frameKeys.standingRightBlink
            ],
            rate: 16,
            loop: true
        },
        runningRight: {
            frames: [
                frameKeys.runningRight0,
                frameKeys.runningRight1,
                frameKeys.runningRight2
            ],
            rate: 10,
            loop: true
        },
        jumpingRight: {
            frames: [
                frameKeys.jumpingRight
            ],
            rate: 1,
            loop: true
        },
    }
};
