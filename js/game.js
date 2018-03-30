function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.background = new Background(this);

  this.reset();
}

Game.prototype.start = function() { 
  setInterval( function () {
    this.clear();
    this.moveAll();
    this.draw();
  }.bind(this), 30);
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
};

Game.prototype.clearObstacles = function() {
};

Game.prototype.generateObstacle = function() {
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.background.draw();

};

Game.prototype.moveAll = function() {
  this.background.move()
};
