// Assignment.1.  (06/06/2023)

console.log(`1. Log the array element with its index using forEach() with arrow function`);
const arrayNums = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNums.forEach( (currentValue) => {
    console.log(currentValue);
} );
console.log(` `);
console.log(`2. Find the positive numbers and log on console`);
arrayNums.forEach( (element) => {
    if (element>=0) {
        console.log(`${element}`)
     
    }
})
console.log(` `);
console.log(`3. Find the negative numbers and log on console`);
const arrayNegativeNums =[];
arrayNums.forEach((element) => {
    if (element<0) {
        arrayNegativeNums.push(element);
    }
});
console.log(arrayNegativeNums)
console.log(` `);
console.log(`4. Find the Even numbers and log on console`);
arrayNums.forEach( (element) => {
    if (element%2==0) {
        console.log(`${element}`)
     
    }
})
console.log(` `);

console.log(`5. Find the sum of all element `);
