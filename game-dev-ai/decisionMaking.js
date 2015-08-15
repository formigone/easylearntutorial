/**
 *
 * @param {Renderer} renderer
 * @constructor
 */
function DecisionMaking(renderer) {
    this.renderer = renderer;
    this.imgs = {};
    this.player = {
        x: 0,
        y: 150,
        frames: [
            {x: 588, y: 2584, width: 17, height: 27},
            {x: 613, y: 2584, width: 16, height: 27},
            {x: 630, y: 2584, width: 17, height: 27},
            {x: 648, y: 2584, width: 16, height: 27},
            {x: 665, y: 2584, width: 16, height: 27},
            {x: 682, y: 2584, width: 17, height: 27},
            {x: 682, y: 2584, width: 17, height: 27},
            {x: 709, y: 2585, width: 17, height: 26}
        ]
    };
    this.currFrame = 0;
    this.ticks = 0;

    this.init();
}

DecisionMaking.prototype = {
    init: function(){
        var totalLoaded = 0;
        var totalToLoad = 1;

        // TODO: Load other sprites
        function onLoad(name, event){
            this.imgs[name] = event.target;
            this.render();
        }
        var img = document.createElement('img');
        img.addEventListener('load', onLoad.bind(this, 'mm'));
        img.src = '/img/megaman.png';
    },
    render: function(){
        var ctx = this.renderer.ctx;
        var canvas = this.renderer.canvas;
        var frame = this.player.frames[this.currFrame];
        var player = this.player;

        this.ticks += 1;
        if (this.ticks % 8 === 0) {
            this.currFrame = (this.currFrame + 1) % 3;
        }

        player.x -= 2.5;

        if (player.x + frame.width < 0) {
            player.x = canvas.width;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(this.imgs.mm, frame.x, frame.y, frame.width, frame.height, player.x, player.y, frame.width * 3, frame.height * 3);

        requestAnimationFrame(this.render.bind(this));
    }
};
