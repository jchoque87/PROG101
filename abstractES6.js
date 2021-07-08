class Shape{
    constructor(color){
        //if(this.constructor === Shape)
        if(new.target ===Shape) 
            throw Error('Abstract class cannot be Instantiated');
        this.color = color;    
    }   

    getarea(){
        throw new Error("Abstract Method has no implementation");
    }
    getcolor(){
        console.log(this.color);
    }

    getDummy(){
        console.log("I'm dummy");
    }
}

class Rectangle extends Shape{
    constructor(color, width, height){
        super(color);
        this.width  = width;
        this.height = height;
    }
    getarea(){
        console.log(this.width*this.height);
    }
}

let Rect = new Rectangle('Red', 40, 50);
Rect.getarea();
Rect.getcolor();
Rect.getDummy();

//let shape = new Shape("Blue");
