class Square{
    constructor(side){
        this.side = side;
    }
    get area(){
        return this.side*this.side;
    }
    set Side(s){
        this.side = s;
    }
}

let square = new Square(5);
console.log(square.area)
square.Side = 6;
console.log(square.area);

