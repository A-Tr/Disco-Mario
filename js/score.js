function Score (game){
  this.game = game;
  this.point = 0;

  this.width = 300;

  this.height = 200


}


Score.prototype.incrementScore = function(){
  this.point++
}

Score.prototype.draw = function () {
  this.game.ctx.font = "30px sans-serif",
  this.game.ctx.fillText("Score: " + this.point, this.width, this.height);
}