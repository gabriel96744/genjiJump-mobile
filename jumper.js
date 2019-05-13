
      function jumper(){
        this.x = 50;
        this.y = 50;
        this.gravity = 0.5; //the force of gravity
        this.lift = -10;//this is the opposing force
        this.velocity = 0; //speed of gravity
        this.show = function(){
          
          image(img,this.x,this.y,50,50);
          imageMode('center');
        }
        this.up = function(){
          this.velocity += this.lift;
        }
        this.update = function(){
          this.velocity += this.gravity;
          this.y += this.velocity;
          this.velocity *= 0.9;
          if(this.y > h){//stop on celing
            this.y = h;
            this.velocity = -10;
          }
          if(this.y < 0){//stop on floor
            this.y= 0;
            this.velocity  = 0;
          }
         
        }
        this.move = function(){

             if(keyIsDown(39) && this.x < w - 50){
            this.x += 10;
          }
          if(keyIsDown(37) && this.x > 50){
            this.x -= 10;
          }
          }
      }
      function keyPressed(){
        if(keyCode === 32){
          jumper.up();
        }
        if(keyCode === 82){
          window.location.reload(false);
        }
      }