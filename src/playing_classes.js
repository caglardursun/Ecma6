class Mammal{
    constructor(name){
        this._name = name; //protection cannot access outside of the class
    }
    get name(){
        return this._name;
    }
    set name(name){
        if(name != "")
            this._name = name;
    }

    static makeMamal(name){
        return new Mammal(name);
    }
    getInfo(){
        return `${this.name} is a mamal`;
    }
}

let ho = new Mammal("Bla Bla");
ho.name = "Hakan";
console.log(`${ho.name}`);

let chipmunk = Mammal.makeMamal("Clipper");
console.log(`${chipmunk.name}`);


class Reptile extends Mammal{
    constructor(name,hasNail){
        super(name);
        this._hasNail;
    }
    get hasNail(){
        return this._hasNail;
    }
    set hasNail(hasNail){
        this._hasNail = this._hasNail;
    }
    getInfo(){
        return `${this.name} is a reptile`;
    }

}

let snake = new Reptile("ho", true);
console.log(`${snake.hasNail} that ${snake.name}`);

console.log(`${snake.getInfo()}`);
function getClass(classType){
    if(classType == 1){
        return Mammal;
    }else{
        return Reptile;
    }
}


class Dinosaur extends getClass(2){
    constructor(name){
        super(name);
    }
}

let h = new Dinosaur("ho");
console.log(`${h.getInfo()}`)