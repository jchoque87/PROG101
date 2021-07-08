class AbstractBase{
    constructor(){}
    checkConstructor(c){
        if(this.constructor!=c) return;
        throw new Error(`Abstract class ${this.constructor.name} cannot be instantiated`);
    }
    throwAbstract(){
        throw new Error(`${this.constructor.name} must implement abstract member`);}    
}

class FooBase extends AbstractBase{
    constructor(){
        super();
        this.checkConstructor(FooBase)}
    doStuff(){this.throwAbstract();}
    doOtherStuff(){this.throwAbstract();}
}

class FooBar extends FooBase{
    constructor(){
        super();}
    doOtherStuff(){/*some code here*/;}
}

var fooBase = new FooBase(); //<- Error: Abstract class FooBase cannot be instantiated
var fooBar = new FooBar(); //<- OK
fooBar.doStuff(); //<- Error: FooBar must implement abstract member
fooBar.doOtherStuff(); //<- OK