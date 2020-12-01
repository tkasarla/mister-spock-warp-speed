function warp(){
  return map(cos(PI + frameCount / 60.0 / 5),-1,1,0,7);
}