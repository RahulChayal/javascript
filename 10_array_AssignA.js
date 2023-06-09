//Assignment No 1 Arrays (23/05/23)

console.log("Fruits : Banana,Orange,Apple,Mango,Water Malon");

var arrayFruits =  ["Banana","Orange","Apple","Mango","Water Malon"];
const arrayLength = arrayFruits.length;
const firstElement = arrayFruits[0];
var lastElement = arrayFruits[arrayLength-1];
console.log(`First element of array is : ${firstElement}`);
console.log(" ");

console.log(`Last element of array is : ${lastElement}`);
console.log(" ");

 arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(" ");

arrayFruits.push("pineapple");
console.log(arrayFruits);
console.log(" ");

arrayFruits[4]= "Dragon Fruit";
console.log(arrayFruits);
console.log(" ");

arrayFruits.splice(2,1,"Kiwi");
console.log(arrayFruits);
console.log(" ");

var slice = arrayFruits.slice(1,4);
console.log(slice);
console.log(" ");

var arrayFruits =  ["Banana","Orange","Apple","Mango","Water Malon"];
var last3 = arrayFruits.slice(2);
console.log(last3);
console.log(" ");


