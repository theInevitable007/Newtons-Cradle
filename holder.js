class Holder{
    constructor(body1,body2,offsetX,offsetY){
      
          this.offsetX = offsetX
          this.offsetY = offsetY;
          var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x :this.offsetX, y:this.offsetY}         
        }      
       
        this.holder = Constraint.create(options);
        World.add(world, this.holder);
    }
   
    
    display(){
        
        if(this.holder.bodyA){
            var pointA = this.holder.bodyA.position;
            var pointB = this.holder.bodyB.position;
            push();
            
            stroke(48,22,8);
                       
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);                                            
            
            pop();
        }
    }
    
}