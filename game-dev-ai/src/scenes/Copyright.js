/**
 * @inherits Phaser.Game
 * @constructor
 */
function Copyright() {
    this.style = {
        font: '2em "Press Start 2P"',
        fill: '#fff',
        align: 'center'
    };

    this.styleSub = {
        font: '1.25em "Press Start 2P"',
        fill: '#555',
        align: 'center'
    };

    this.text = [];
    this.delayBeforeFadeout_ms = 1000;
    this.fullyLoaded = false;
    this.startFadingOut = false;
    this.fadeRate = 0.008;
    this.done = false;
}

Copyright.prototype.create = function () {
    this.text.push(this.add.text(this.world.centerX, 80, 'GAME DEVELOPMENT COURSE: GDC 221', this.style));
    this.text.push(this.add.text(this.world.centerX, 120, 'FREE GAME DEVELOPMENT LESSONS', this.style));
    this.text.push(this.add.text(this.world.centerX, 240, '(C) EASY LEARN TUTORIAL  2015.', this.style));
    this.text.push(this.add.text(this.world.centerX, 280, 'ALL RIGHTS RESERVED.', this.style));
    this.text.push(this.add.text(this.world.centerX, 320, 'WWW.EASYLEARNTUTORIAL.COM.', this.style));
    this.text.push(this.add.text(this.world.centerX, 400, 'MEGA MAN AND ALL RELATED ITEMS ARE COPYRIGHT OF CAPCOM.', this.styleSub));

    this.text.forEach(txt => {
        txt.anchor.set(0.5);
        txt.alpha = 0;
    });
};

Copyright.prototype.update = function () {
    if (this.done) {
        this.state.start('Placeholder');
    }

    this.text.forEach(txt => {
        if (!this.startFadingOut && txt.alpha < 1.0) {
            txt.alpha += this.fadeRate;
        } else if (!this.fullyLoaded) {
            this.fullyLoaded = true;
            setTimeout(_ => {
                this.startFadingOut = true;
            }, this.delayBeforeFadeout_ms);
        }

        if (this.startFadingOut && txt.alpha > 0.0) {
            txt.alpha -= this.fadeRate;
        }

        if (this.startFadingOut && txt.alpha <= 0.0) {
            this.done = true;
        }
    });
};

module.exports = Copyright;
