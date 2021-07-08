class Abstract {
    constructor(){
        if(this.constructor === Abstract){
            throw new Error("Cannot constructor Abstract instances directly");
        }
        /*
        if(this.method === undefined){
                throw new TypeError("Cannot constructor Abstract instances directly");
        }
        */
    }
    doSomething() {
        throw new Error('You have to implement the method doSomething!');
     }
}

class Derived extends Abstract{
    /*
    constructor(){

    }
    */
    doSomething(){
        console.log("xD");
    }
}

//const a = new Abstract();
const b = new Derived();
b.doSomething();