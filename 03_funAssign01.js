console.log("we use any two functions with no arguments and no return type");
function personalDetails(firstName,lastName,collegeName){
    console.log("Personal Details :");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("College Name:",collegeName);
    }
personalDetails("Rahul","Chayal","PRMCEAM Badnera");

console.log("----------------------------------------------------------------------------");
function swapValuesDude(husband,wife){
    var husband = "virat";
    var wife = "anushka";
    console.log("Before Swapping:",husband,wife);
    var temp = husband
    var husband = wife
    var wife = temp
    console.log("After Swapping:",husband,wife);
}
swapValuesDude("virat","anushka")

function swapValuesDude(num1,num2){
    var num1 = 1000;
    var num2 = 2000;
    console.log("Before Swapping:",num1 , num2);
    var temp = num1
    var num1 = num2
    var num2 = temp
    console.log("After Swapping:",num1 , num2);
    }
    console.log("-------------------------------------------------------------");

function addThreeValues(num1, num2, num3){
    var num1 = 10.23 ;
    var num2 = 600 ;
    var num3 = 40 ;
    var temp = num1 + num2 + num3
    console.log("Result:", temp);
}    
addThreeValues("10.23,600,40")

function addThreeValue(a , b , c){
   
    var temp = a + b + c
    console.log("Result:", temp);
}    
addThreeValue("Hello ", "Good ", "Morning ");
console.log("-------------------------------------------------------------");
