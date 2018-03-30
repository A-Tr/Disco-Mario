function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.background = new Background(this);
  this.player = new Player(this)

  this.framesCounter = 0,
  this.reset();

  this.obstacles = []
}

Game.prototype.start = function() { 
  setInterval( function () {
    this.clear();
    this.moveAll();
    this.draw();
    this.framesCounter += 1;
    if (this.framesCounter >= 1000){
      this.framesCounter = 0
    }
    if (this.framesCounter % 100 ===0){
      this.generateObstacle()
    }
    if(this.isCollision()){
      this.gameOver();
    }
  }.bind(this), 1000/60);
};

Game.prototype.stop = function() {
};

Game.prototype.gameOver = function() {
  this.stop();
  if(confirm("GAME OVER. Play again?")) {
    this.reset();
    this.start();
  }
};

Game.prototype.reset = function() {
};

Game.prototype.isCollision = function() {
  return true;
};

Game.prototype.clearObstacles = function() {
};

Game.prototype.generateObstacle = function() {
  this.obstacles.push(new Obstacle(this))
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function(o){
    o.draw();
  })
};

Game.prototype.moveAll = function() {
  this.background.move()
  this.player.move()
  this.obstacles.forEach(function(o){
    o.move();
  })
};
