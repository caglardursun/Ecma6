let name = "Crappy";
let surname = "Asshole";

console.log(`${name} ${surname}`);


let x = 10;
let y = 300;

console.log(`Holly crap it cost me ${ x * y} $`);


//this is interesting 

function doMath(strings, ...values)
{

    if(strings[0] === 'Add')
        console.log(`${values[0]} + ${values[1]} = ${values[0] + values[1]}`);
    else if(strings[0] === 'Sub' )
    console.log(`${values[0]} - ${values[1]} = ${values[0] - values[1]}`);
}

doMath `Add${10} ${20}`;
doMath `Sub${30} ${20}`;


for(let c of name)
    console.log(`${c}`);


console.log("Aq. ".repeat(3));
console.log("Aq. ".startsWith("Aq"));
console.log("Aq. ".endsWith(". "));
console.log("Aq. ".includes("q"));
console.log("Aq. ".includes("a")); // is case sensitive