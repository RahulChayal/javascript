// Assignment 1  (26/05/2023)

console.log("Print numbers from 5 to 15 by incrementing by 1");
let i=5;
while (i<=15) {
   console.log(i);
    i = i + 1; 
}
console.log("Print numbers from 50 to 40 by decrementing by 1 ");
let j= 50;
while (j>=40) {
    console.log(j);
 j = j -1;
}
 console.log("Find first 15 odd number");
let a = 1;
while (a<=15){    
    if  (a%2!=0){
        console.log(a);
    }        
    a++ ;   
}
console.log("Find first 15 Even number");
let b = 1;
while (b<=10) {
    if (b%2==0) {
        console.log(b);
    }
    b=b+1;
}
console.log("Print table of 5");
let t = 5;
while (t<=50){
    console.log(t);
    t = t+5
}
console.log("Print table of 10");
let c = 10;
while (c<=100){
    console.log(c);
    c = c+10
}
console.log("Print table of 10 in reverse order ");
let d = 100;
while (d>=10){
    console.log(d);
    d=d-10;
}
d--