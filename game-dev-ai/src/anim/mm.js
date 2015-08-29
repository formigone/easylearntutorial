const frameKeys = {
    runningRight0: 'runningRight0',
    runningRight1: 'runningRight1',
    runningRight2: 'runningRight2',

    standingRightBlink: 'standingRightBlink',
    standingRight: 'standingRight',

    jumpingRight: 'jumpingRight',

    runningLeft0: 'runningLeft0',
    runningLeft1: 'runningLeft1',
    runningLeft2: 'runningLeft2',

    standingLeftBlink: 'standingLeftBlink',
    standingLeft: 'standingLeft',

    jumpingLeft: 'jumpingLeft'
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
        standingLeft: {
            frames: [
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeft,
                frameKeys.standingLeftBlink
            ],
            rate: 16,
            loop: true
        },
        runningLeft: {
            frames: [
                frameKeys.runningLeft0,
                frameKeys.runningLeft1,
                frameKeys.runningLeft2
            ],
            rate: 10,
            loop: true
        },
        jumpingLeft: {
            frames: [
                frameKeys.jumpingLeft
            ],
            rate: 100,
            loop: false
        }
    }
};
