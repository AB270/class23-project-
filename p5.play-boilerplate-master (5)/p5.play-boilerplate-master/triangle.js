class Triangle {
    constructor() {
      var options = {
          'isStatic':true
      }
      this.body = Bodies.rectangle(200,300,50,50,50,50, options);
      this.width = 100;
      this.height = 100;
      
      World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
      fill("grey");
      triangle(450, 410, 447, 287, 441, 426);
      
    }
  };