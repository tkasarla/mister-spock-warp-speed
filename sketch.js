let numStars = 600;
let stars = [];
var fps = 30;
var capturer = new CCapture({ format: 'png', framerate: fps });

function setup() {
  frameRate(fps);
  capturer.start();
  createCanvas(480, 480);

  for(let i=0;i<numStars;i++){
    stars[i] = new Star();
  }
}

var startMillis;
function draw() {

  if (startMillis == null) {
  startMillis = millis();
}

// duration in milliseconds
var duration = 60000;

// compute how far we are through the animation as a value
// between 0 and 1.
var elapsed = millis() - startMillis;
var t = map(elapsed, 0, duration, 0, 1);

// if we have passed t=1 then end the animation.
if (t > 1) {
  noLoop();
  console.log('finished recording.');
  capturer.stop();
  capturer.save();
  return;
}

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

    // handle saving the frame
  console.log('capturing frame');
  capturer.capture(document.getElementById('defaultCanvas0'));


}
