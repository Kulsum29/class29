class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
    
            if(pointA.x<=200){
                push()
                strokeWeight(8);
                stroke(48,22,8)
                line(pointA.x-15, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-15, pointA.y, pointB.x+30, pointB.y);
                image(this.sling3,pointA.x-20, pointA.y-10,15,30)
                pop()
            }
            else{
                push()
                strokeWeight(8);
                stroke(48,22,8)
                line(pointA.x+15, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+21, pointA.y, pointB.x+30, pointB.y);
                image(this.sling3,pointA.x+20, pointA.y-10,15,30)
                pop()
            }
            
            
        }
        image(this.sling1,200,70,40,150)
        image(this.sling2,175,75,40,80)
        
    }
    
}