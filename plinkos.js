class Plinkos{
    constructor(x,y,radius){
        var options={ 
        restitution:1, 
        friction:0,
        density:0.8,
        isStatic:true
         }
    
    this.body=Bodies.circle(x,y,radius,options) 
    this.radius=radius
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    ellipseMode(CENTER);
    fill("white")
    translate(pos.x,pos.y)
    rotate(angle)
    ellipse(0,0,this.radius,this.radius)
    pop()
    
    }
    
    }
   