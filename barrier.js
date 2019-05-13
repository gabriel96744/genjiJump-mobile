function barrier(){
  this.leftPull = 0.4;
  this.velocity = 0;
  this.width = 100;
  this.height = 100;
 this.y = Math.floor((Math.random()*h)-100);
  this.x = w + this.width;
  this.show = function(){
    this.x;
    this.y;
    image(img1,this.x, this.y, this.width,this.height);
    imageMode('center');
    audio.play();
  }
  this.update = function(){
    this.velocity += this.leftPull;
    this.x -= this.velocity;
    if(this.x < 0 - this.width){
      bar += 1;
      this.velocity = 0;
      this.y = Math.floor((Math.random()*h)-100);
  this.x = w + this.width;
  audio.play();
    }
  }
  
}