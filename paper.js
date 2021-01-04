class paper{
    constructor(x,y,wid,hei){
        this.x = x;
        this.y = y;
        this.width = wid; 
        this.height = hei ; 
        var options = {
        'isStatic':false , 
        'restitution':0.3 ,
        'friction':0.5 , 
        'density':1.2 
        }
        this.body = Matter.Bodies.circle(x,y,wid,options);
        World.add(world,this.body);
       
    }

    display(){
        var pos = this.body.position ;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,this.width,this.height);

    }

    
}
