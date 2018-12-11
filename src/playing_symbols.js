let capital = Symbol("State Capital");

let Turkey = {};
Turkey[capital] = "Ankara";

console.log(`Capital of Turkey : ${Turkey[capital]}`)
console.log(`Symbol Capital : ${capital.toString()}`)

let employNum = Symbol.for("Employee Number");

let ait = {};
ait[employNum] = 10;


let digi = {};
digi[employNum] = 15;

console.log(`Ait ${ait[employNum]}`);

console.log(`Digi ${digi[employNum]}`);