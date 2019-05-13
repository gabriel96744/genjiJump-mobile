function health(){
  if(bar === 4){
    this.show = function(){
      this.x = (Math.random()*w);
      this.y = (Math.random()*h);
      this.width = 200;
      this.height = 200;
      rect(this.x,this.y,this.width,this.height);
    }
  }
}