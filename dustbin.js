class dustbin{
    constructor(x,y){
            this.x = x;
        this.y = 660;
        this.dustbinWidth = 290;
this.dustbinHeight = 240;
this.wallThickness = 20;
this.angle = 0; 

this.image = loadImage("Sprites/dustbin.png");
this.bottomBody =  Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
this.leftWallBody =  Bodies.rectangle(1100,600,this.wallThickness,this.dustbinHeight,{isStatic:true})
Matter.Body.setAngle(this.leftWallBody,this.angle);
this.rightWallBody = Bodies.rectangle(1300,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
Matter.Body.setAngle(this.rightWallBody,this.angle);  

World.add(world,this.bottomBody)
World.add(world,this.leftWallBody)
World.add(world,this.rightWallBody)  
        }
        display()
        {      

                    var posBottom = this.bottomBody.position;
            var posLeft = this.leftWallBody.position;
            var posRight = this.rightWallBody.position;
           



         push()
         translate(posBottom.x,posBottom.y);
         rectMode(CENTER)
         //strokeWeight(4);
         stroke(255)
         angleMode(RADIANS)
         fill(255)
        // rect(0,0,this.dustbinWidth,this.wallThickness);
        imageMode(CENTER);
        image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);                                    
         pop()
     
        }
    
}




