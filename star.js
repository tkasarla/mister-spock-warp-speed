function Star(){
  this.dist = random(width+height);
  this.angle = random(0,2*PI);
  this.speed = random(0*warp(),0.3*warp());
  this.bright = 0;
  this.weight = random(1,2);
  
  this.display = function() {
    push();
    rotate(this.angle);
    translate(this.dist,0);
    stroke(this.colormap(this.bright));
    strokeWeight(this.weight);
    line(0,0,this.speed,0);
    pop();
    this.bright+=5;
  }

  this.update = function() {
    this.speed += 0.3*warp();
    this.dist += this.speed;
    
    
    if(this.dist>width+height){
      this.angle = random(2*PI);
      this.dist = random(width/50,width);
      this.speed = random(0*warp(),0.3*warp());
      this.bright = 0
      this.weight = random(1,2)
    }

  }
  
  this.colormap = function(b){
    colorMode(HSB);
    sat = map(warp(),1,7,0,100);
    return color(200,sat,b);
  
  }
}