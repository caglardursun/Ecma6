function uRanAnimal(name,owner){

    return{
        name,
        owner,
        getInfo(){
            return `${this.name} is owned by ${this.owner}`;
        },
        adress:{
            street: "123 Orchard",
            City:"Hell"
        }
    }
}

var animal = uRanAnimal("ho","Someone");
console.log(`${animal.getInfo()}`);

console.log(`${animal.name} is @ ${animal.adress.street}`);

console.log(`${Object.getOwnPropertyNames(animal).join(" / ")}`);

let {name, owner} = animal;
console.log(`Name : ${name}`);

let { adress } = animal;
console.log(`${adress.street}`);

let numbers = [1, 2.3, 5, 8,"asdasddas"];
let[,,chaos] = numbers;
console.log(`${chaos}`);

let [, ...last2] = numbers;
console.log(`2nd number ${last2[0]}`);

let val1 = 1, val2 = 2;
[val1,val2] = [val2,val1];
console.log(`val2 ${val2}`)