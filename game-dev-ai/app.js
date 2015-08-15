/**
 * Copyright (c) 2015 Rodrigo Silveira. All rights reserved.
 * Mega Man is copyrighted by Capcom. Any use of Mega Man and its related works is intended for educational purposes only.
 */

function Renderer(width, height){
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;

    this.ctx = this.canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
}
