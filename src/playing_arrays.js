let array1 = Array.of(1,2,3,4,5,6);
let array2 = Array.from("word");
let array3 = Array.from(array1,(value)=> value * 2);


console.group("Array 1");
for(let val of array1)
    console.log(`Array 1 value ${val}`);
console.groupEnd("Array 1");


console.group("Array 2");
for(let val of array2)
    console.log(`Array 2 value ${val}`);
console.groupEnd("Array 2");


console.group("Array 3");
for(let val of array3)
    console.log(`Array 3 value ${val}`);

console.groupEnd("Array 3");