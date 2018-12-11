let d = "local variable";

if(true){
    var t = "global variable";
}

console.log("T global variabtle"+ t);



var y = 10;
if(true){
    let y = 20;
}

console.log("y = "+ y);

const PI=3.14159;
PI = 2.13; //will fucked up