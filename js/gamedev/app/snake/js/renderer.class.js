var Renderer = function(canvas) {

   var canvas = canvas;
   var ctx = canvas.getContext("2d");
   var width = canvas.width;
   var height = canvas.height;

   var getIndex = function(x, y) {
      return width * y + x;
   };

   var getPosition = function(index) {
      return {
         x: index % width, 
         y: parseInt(index / width)
      };
   };

   this.clear = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
   }

   this.draw = function(points, img) {
      for (var i = 0, len = points.length; i < len; i += 2) {
         ctx.drawImage(img, points[i] * img.width, points[i + 1] * img.height, img.width, img.height);
      }
   };

   this.toImg = function() {
      var screenShot = new Image();
      screenShot.src = canvas.toDataURL("image/png");
      return screenShot;
   };
};
