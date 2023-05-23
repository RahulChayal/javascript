console.log(" Q.1.");
console.log("Invoking the function for value 'Javascript' ");
function squareOfWordLength(str) {
    var result = str.length;
    console.log("Length of 'JavaScript' is :",result);

}
squareOfWordLength("JavaScript")
console.log(" ");

console.log("Invoking the function for value 'Google Chrome' ");
function squareOfWordLength(str) {
    var result = str.length;
    console.log("The length of 'Google Chrome' is :",result);
}
squareOfWordLength("Google Chrome")
console.log(" ");

console.log("Invoking the function for value 'Developer Smart' ");
function squareOfWordLength(str) {
    var result = str.length;
    console.log("The length of 'Developer Smart' is :",result);
}
squareOfWordLength("Developer Smart")
console.log("---------------------------------------------------------------------------------------------");

console.log("Q.2.");
var value2 = `I am Angular Developer`;
function divide(){
    console.log(`The given String is : ${value2}`);
    console.log(" ");
    var value2length = value2.length;
    var wordInValue2 = value2.split(" ");
    var valeOfWord = wordInValue2.length;
    var division = value2length/valeOfWord;
    console.log(`length of given string is : ${value2length}`);
    console.log(`total number of words available in that string is : ${valeOfWord}`);
    console.log(`The string length is divided by total number of words available in that string is : ${division}`);
}
divide()

function multiply(){
    console.log(" ");
    var value2length = value2.length;
    var wordInValue2 = value2.split(" ");
    var valeOfWord = wordInValue2.length;
    var multiplication = value2length*valeOfWord;
    console.log(`length of given string is :${value2length}`);
    console.log(`total number of words available in that string is : ${valeOfWord}`);
    console.log(`The string length is multiplied by total number of words available in that string is : ${multiplication}`);
}
multiply()
console.log("---------------------------------------------------------------------------------------------");
