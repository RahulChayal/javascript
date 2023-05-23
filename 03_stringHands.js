console.log("1. Print the String as it as Console");
console.log("   Hey you are doing good,keep it up   ");
console.log(" ");
console.log("2. Calculate the length of the String");
function stringHandsOn() {
    var handsOn = "  Hey you are doing good,keep it up   ";
    lengthOfhandsOn = handsOn.length;
    console.log("Length of String is :",lengthOfhandsOn);
    console.log(" ");

    console.log("3 . Remove the leading and trailing extra spaces and log string on console with its length");
    var cut = handsOn.trim();
    var trimLength = cut.length
    console.log("Leading and Trailing extra spaces is:",cut);
    console.log("Length of String after trim is:",trimLength);
    console.log(" ");

    console.log("4. Print the total number extra spaces count that is removed in step 3 ");
    console.log("Total number extra spaces count is :",lengthOfhandsOn - trimLength);
    console.log(" ");

    console.log("5. Print the first and last character on the same line after trim");
    var  afterTrim = "Hey you are doing good,keep it up";
    var firstChar = afterTrim.charAt(0)
    console.log("First character after trim :",firstChar);
    var lastChar = afterTrim.charAt(afterTrim.length-1)
    console.log("Last character after trim :",lastChar);
    console.log(" ");

    console.log("6. Print the count of total words available in the string after step 3");
    var totalWord = "Hey you are doing good, keep it up";
    var str = totalWord.split(" ");
    console.log("Total number of words in string is :",str);
    console.log("  ");

    console.log("7.Print the index of word 'good' from the given string");
    var indexGood = totalWord.split()
    console.log("The index of word good is :",indexGood);    
    console.log("");

    console.log("8. Print the substring starting from index 22,using substring() and slice ()");
    console.log(`index 22 using substring(22) is:${totalWord.substring(22)}
index 22 using slice is:${totalWord.slice(22)}`);
console.log("");

console.log("9. Check,is string ends with word up after step 3");
console.log(`Is string ends with word 'up' is: ${totalWord.endsWith("up")}`);
console.log(" ");

console.log("10. Check is string starts with word 'Hey' after trimming i.e after step 3 output string value");
console.log(`Is string starts with word 'Hey' is : ${totalWord.startsWith("Hey")}`);
}
stringHandsOn()
