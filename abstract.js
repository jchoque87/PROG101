const Shape = function(){
    this.shapeName = "none";
    throw new Error("Cannot create an instance of an abstract class");
}

Shape.prototype.draw = function(){
    return "Drawing " + this.shapeName;
}

const Circle = function(shapeName)
{
    this.shapeName = shapeName;
}

Circle.prototype = Object.create(Shape.prototype);

const circle = new Circle("Circle");
console.log(circle.draw());
console.log(circle instanceof Circle);
console.log(circle instanceof Shape);

