class Cradle {

    constructor(x,y,radius){
        var options = {
            restitution : 1,
            friction : 0,
            density : 0.6
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
                       
    }
    display(){
         push();
        strokeWeight(2.5);
        fill("purple");
        stroke("purple");

        translate (this.body.position.x,this.body.position.y);

        
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}