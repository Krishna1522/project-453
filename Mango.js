class Mango{
    constructor(x,y,r){
        var options={
            isStatic=true,
            restitution=0,
            friction=1,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("images/mango.png");
        this.body=Bodies.circle(this.x,this.y,this.r);
       World.add(world,this.body);
    }
    display(){
        var mangopos=this.body.position;
        push();
        translate(mangopos.x,mangopos.y);
        rotate(this.body.angle);
        fill(255,0,255);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}