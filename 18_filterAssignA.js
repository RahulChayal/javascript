// Assignment 2.  (07/06/2023)

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given Array is : ${arrayNumbers}` );
console.log(`---------------------------------------------------------------`);

console.log(" 1. Find out the number which are greater then 50");
const arrayGreaterThan50 = arrayNumbers.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan50);
console.log(`-----------------------------------------------------------------`);
console.log(" 2. Find out all the Even Numbers");
const arrayEven = arrayNumbers.filter( (element)=> {
    return element%2==0;
} );
console.log(arrayEven);
console.log(`-----------------------------------------------------------------`);

console.log(" 3. Find out all the Odd Numbers");
const arrayOdd = arrayNumbers.filter( (element)=> {
    return element%2!=0;
} );
console.log(arrayOdd);
console.log(`-----------------------------------------------------------------`);

console.log(" 4. Find out all numbers which are multiple of 5");

// const arrayTransformed = [4, 9, 25, 36, 49, 81 ];
// const arrayTransformed= [];
// array.forEach( (element)=> {
//    return  arrayTransformed.push(element*5==0);
// });
// console.log(arrayTransformed);


const arrayMulFive = arrayNumbers.filter( (element)=> {
    return element%5==0;
} );
console.log(arrayMulFive);
console.log(`-----------------------------------------------------------------`);

console.log(" 5. Find out all numbers which are between 20 and 50 ");

const arrayBet = arrayNumbers.filter( (element)=> {
    if (element >=20 && element <=50){
        return element ;
       }
    
} );
console.log(arrayBet);
console.log(`-----------------------------------------------------------------`);
