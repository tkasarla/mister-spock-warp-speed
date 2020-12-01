function FCapture(){

  var fps = 60;
  var capturer = new CCapture({
    format: 'png',
    framerate: fps
  });
  var startMillis;

  	this.startCapture = function(){
      frameRate(fps);
	  capturer.start();
    }

    this.frameCapture = function(){

      if (startMillis == null) {
        startMillis = millis();
      }
      var duration = 32000;

      var elapsed = millis() - startMillis;
      var t = map(elapsed, 0, duration, 0, 1);

      if (t > 1) {
      noLoop();
      console.log('finished recording.');
      capturer.stop();
      capturer.save();
      return;
    }

  }

  this.getCanvas = function(){
    console.log('capturing frame');
    capturer.capture(document.getElementById('defaultCanvas0'));
  }

}
