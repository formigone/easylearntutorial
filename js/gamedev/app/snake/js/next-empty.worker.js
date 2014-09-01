self.addEventListener("message", nextEmpty);

function isAt(points, x, y) {
   for (var i = 0, len = points.length; i < len; i += 2) {
      if (points[i] == x && points[i + 1] == y)
         return true;
   }

   return false;
}

function nextEmpty(event) {
   var data = event.data;

   var x = 0;
   var y = 0;

   while (true) {
      x = parseInt(Math.random() * data.width);
      y = parseInt(Math.random() * data.height);

      if (!isAt(data.points, x, y))
         break;
   }

   self.postMessage({x: x, y: y});
}