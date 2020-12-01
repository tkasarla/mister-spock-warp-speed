let numStars = 800;
let stars = [];



function setup() {

//  fcapture = new FCapture(); //uncomment to capture frames
//  fcapture.startCapture(); //uncomment to capture frames

  createCanvas(480, 480);

  for(let i=0;i<numStars;i++){
    stars[i] = new Star();
  }

}


function draw() {
//  fcapture.frameCapture(); //uncomment to capture frames
  background(0);
  fill(255);
  textSize(40);
  textAlign(LEFT,TOP);
  text("WARP "+round(warp()*10)/10.0,40,40);

  translate(width/2,height/2);
  for(var star of stars){
    star.update();
    star.display();
    }
//  fcapture.getCanvas(); //uncomment to capture frames
}
