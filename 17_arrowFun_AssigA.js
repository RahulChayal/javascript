// Assignment 1  (05/06/2023)

console.log("1. Arrow Function with no args & no return value");
let display = () => {
    console.log(`Good Morning,Today is Monday`);
}
display();
console.log(`--------------------------------------------------------------------------------- `);

console.log(`2. Arrow function with 3 args & no return value,perform the multiplication`);
let mul1 = (num1,num2,num3) => {
    result = num1*num2*num3
    console.log(`Multiplication for received 3 parameter is : ${result}`);
}
mul1(5,5,2)

let mul2 = (num1,num2) => {
    result = num1*num2
    console.log(`Multiplication is : ${result}`);
}
mul2(10,4)
console.log(`--------------------------------------------------------------------------------- `);

console.log(`With 5 args and return value such as,for received params it should do addition `);
let add = (num1,num2,num3,num4,num5) => {
    result = num1 + num2 + num3 + num4 + num5
    console.log(`Addition of values passed is : ${result}`);
}
add(100,100,200,349,756)

let msg = (word1,word2,word3,word4,word5) => {
   result = word1 + word2 + word3 + word4 + word5
   console.log(`${result}`);
}
msg("I am"," learning"," ES6"," features"," in depth")