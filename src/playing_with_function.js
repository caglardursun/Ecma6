function getSum(num1 =1, num2=2){

    console.log(`${num1} + ${num2} = ${num1 + num2}`);

    console.log(`${arguments[0]} + ${arguments[1]}`); //like a diagonistic ;)

}


getSum(3);


function getSumMore(...vals){

    let sum=0;

    for(val of vals)
        sum += val;

    console.log(`${sum}`);
}

getSumMore(1,2,3,4,5,6,7);


let difference = (num1,num2) => num1 - num2; // like a lambda expression

console.log(`5-10 = ${difference(5,10)}`);


let valArr = [1,2,3,4,5];

let sumVals = valArr.reduce((a,b)=> a+b );
console.log(`Sums : ${sumVals}`);

let evens = valArr.filter(v=> v%2 ==0 );
console.log(`Evens ${evens}`);


let doubles = valArr.map(v=> v*2);
console.log(`Evens ${doubles}`);