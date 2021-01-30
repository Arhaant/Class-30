class Box extends BaseClass {
  constructor(x, y, width, height){
    var options ={
      "density" : 0.5,
      "friction" : 0.5
    }
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

};
