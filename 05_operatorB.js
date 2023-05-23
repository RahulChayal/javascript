console.log("Q.1. Find the greatest number amongst two number ?");
var greaterNumber = function(num1,num2){
    var result = num1>=num2 ? `${num1} is greater` : `${num2} is greater`;
    console.log("The greatest number amongst two nmber is :",result);
}
greaterNumber(10,-10);

var greaterNumber = function(num1,num2){
    var result = num1>=num2 ? `${num1} is greater` : `${num2} is greater`;
    console.log("The greatest number amongst two nmber is :",result);
}
greaterNumber(800,899);
console.log("-------------------------------------------------------------------");

console.log("Q.2. Check Even or Odd numbers");
var isEvenOrOddNum = function(num){
    var result = num%2 == 0 ? true : false;
    return result;
}
var result = isEvenOrOddNum(29);
var res = result == true ? "29 is even" : "29 is odd";
console.log(`${res}`);

var isEvenOrOddNum = function(num){
    var result = num%2 == 0 ? true : false;
    return result;
}
var result = isEvenOrOddNum(44);
var res = result == true ? "44 is even" : "4 is odd";
console.log(`${res}`);

var isEvenOrOddNum = function(num){
    var result = num%2 == 0 ? true : false;
    return result;
}
var result = isEvenOrOddNum(0);
var res = result == true ? "0 is even" : "0 is odd";
console.log(`${res}`);

var isEvenOrOddNum = function(num){
    var result =num%2 == 0 ? true : false;
    return result;
}
var result = isEvenOrOddNum(101);
var res = result == true ? "101 is even" : "101 is odd";
console.log(`${res}`);

console.log("-------------------------------------------------------------------");

console.log("Q.3. Check which word has even or odd length");
var wordLength = function(word){
    var len = word.length;
    var result = len %2 == 0 ? "EVEN" : "ODD";
    return result;

}
var returnValue = wordLength("JavaScript");
console.log(`JavaScript has ${returnValue}`);

var wordLength = function(word){
    var len = word.length;
    var result = len %2 == 0 ? "EVEN" : "ODD";
    return result;

}
var returnValue = wordLength("Developer");
console.log(`Developer has ${returnValue}`);

var wordLength = function(word){
    var len = word.length;
    var result = len %2 == 0 ? "EVEN" : "ODD";
    return result;

}
var returnValue = wordLength("Google");
console.log(`Google has ${returnValue}`);
console.log("-------------------------------------------------------------------");
