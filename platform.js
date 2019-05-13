function platform(){
  this.x = 500;
  this.y = 500;
  this.height = 100;
  this.width = 100;

  this.show = function(){

    
  fill(color("green"));
  rect(this.x,this.y,this.height,this.width);
};
  
}