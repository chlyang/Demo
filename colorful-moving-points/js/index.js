var Point = function() {
  this.id = ++Point.counter; 
  this.x = Math.random() * 400;
  this.y = Math.random() * 300;
  this.color = {
    h: Math.random() * 360,
    s: 50,
    l: 50
  };
  this.size = 3 + Math.random() * 6;
}

Point.counter = 0;

Point.prototype.getCssColor = function() {
  return 'hsl(' + this.color.h + ', ' + this.color.s + '%, ' + this.color.l + '%)'
}

var points = [];

for (var i = 0; i < 100; ++i) {
  var point = new Point();
//   console.log(point);
  
  points.push(point);  
}

var newElem;

points.forEach(function(p) {
  newElem = $('<div class="point" id="point' + p.id + '"></div>').css({
    backgroundColor: p.getCssColor(),
    width: p.size,
    height: p.size
  });
  
  $('#scene').append(newElem)
});

function moveRandomly() {
  points.forEach(function(p) {
    p.x += (-1 + Math.random() * 2);

    while (p.x < 0 || p.x > 400) {
      p.x += (-1 + Math.random() * 2);
    }

    p.y += (-1 + Math.random() * 2)

    while (p.y < 0 || p.y > 300) {
      p.y += (-1 + Math.random() * 2);
    }
  });    
}

function updatePosition() {
  points.forEach(function(p) {  
    $('#point' + p.id).css({
      left: p.x,
      top: p.y
    });
  });
}

setInterval(function() {
  moveRandomly();
  updatePosition();
}, 10);