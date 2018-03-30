function Obstacle(game) {
  this.game = game;

  this.height = 50;
  this.width = 50;
  this.x = this.game.canvas.width;
  this.y = this.game.player.y0 + this.game.player.height - this.height;

}

Obstacle.prototype.draw = function() {
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};

Obstacle.prototype.move = function() {
  this.x -= this.game.background.dx;
  
};
