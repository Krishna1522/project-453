class Tree{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=450;
        this.height=600;
        this.thickness=10;
        this.image=loadImage("images/tree.png");
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
        this.leftWallBody=Bodies.rectangle(0,this.y-this.height/2,this.thickness,this.height,{isStatic:false});
        this.rightWallBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:false});
        World.add(world,this.bottomBody);
        World.add(world,leftWallBody);
        World.add(world.rightWallBody);
    }
    display(){
        var bottompos=this.bottomBody.position;
        push();
        translate(bottompos.x,bottompos.y);
        fill(255);
        imageMode(CENTER);
        image(this.image,0,-this.height/2,this.width,this.height);
        pop();
    }
}