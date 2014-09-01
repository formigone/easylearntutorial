var Snake = function(x, y, width, height, maxSize) {

   var isAlive = true;
   var size = 0;
   var body = new Int8Array(maxSize * 2);

   for (var i = 0, len = body.length; i < len; i++)
      body[i] = -1;

   body[0] = x;
   body[1] = y;

   var worldWidth = width;
   var worldHeight = height;

   var skin;

   var dir = {
      38: false,
      40: false,
      37: false,
      39: false
   };

   var keys = {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39
   };

   var move = function() {

      // Traverse the snake backwards and shift each piece one spot
      for (var i = size * 2 + 1; i > 1; i -= 2) {
         body[i] = body[i - 2];
         body[i - 1] = body[i - 3];
      }

      if (dir[keys.UP]) {
         body[1]--;
      } else if (dir[keys.DOWN]) {
         body[1]++;
      } else if (dir[keys.LEFT]) {
         body[0]--;
      } else if (dir[keys.RIGHT]) {
         body[0]++;
      }
   };

   this.doOnKeyDown = function(event) {
      var key = event.which;

      // Don't process a key that's already down
      if (dir[key])
         return;

      if (key == keys.UP && !dir[keys.DOWN]) {
         dir[keys.UP] = true;
         dir[keys.DOWN] = false;
         dir[keys.LEFT] = false;
         dir[keys.RIGHT] = false;

         return;
      } else if (key == keys.DOWN && !dir[keys.UP]) {
         dir[keys.UP] = false;
         dir[keys.DOWN] = true;
         dir[keys.LEFT] = false;
         dir[keys.RIGHT] = false;

         return;
      } else if (key == keys.LEFT && !dir[keys.RIGHT]) {
         dir[keys.UP] = false;
         dir[keys.DOWN] = false;
         dir[keys.LEFT] = true;
         dir[keys.RIGHT] = false;

         return;
      } else if (key == keys.RIGHT && !dir[keys.LEFT]) {
         dir[keys.UP] = false;
         dir[keys.DOWN] = false;
         dir[keys.LEFT] = false;
         dir[keys.RIGHT] = true;

         return;
      }
   };

   this.move = function() {
      move();
   };

   this.setSkin = function(img) {
      skin = new Image();
      skin.onload = function() {
         skin.width = this.width;
         skin.height = this.height;
      };

      skin.src = img;
   };

   this.getSkin = function() {
      return skin;
   };

   this.setDead = function(isDead) {
      isAlive = !isDead;
   };

   this.isAlive = function() {
      return isAlive;
   };

   this.getBody = function() {
      return body;
   };

   this.getHead = function() {
      return {x: body[0], y: body[1]};
   };

   this.isAt = function(x, y, includeHead) {
      var offset = includeHead ? 0 : 2;

      for (var i = 2, len = body.length; i < len; i += 2) {
         if (body[i] == x && body[i + 1] == y)
            return true;
      }

      return false;
   };

   this.grow = function() {
      if (size * 2 < body.length)
        return size++;
   };

   this.reset = function(x, y) {
      for (var i = 0, len = body.length; i < len; i++)
         body[i] = -1;

      body[0] = x;
      body[1] = y;
      size = 0;

      isAlive = true;
      dir[keys.UP] = false;
      dir[keys.DOWN] = false;
      dir[keys.LEFT] = false;
      dir[keys.RIGHT] = false;
   };
};
