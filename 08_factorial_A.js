// Assignment 2 : 23/05/2023

function factorialOfNum(num) {
    if (num==0) {
        console.log(`Factorial of zero is : 1`);
        return;
    }
    let factorial = 1;
    for (let index = num; index >= 1; index--) {
        factorial = factorial * index;  
    }    

    console.log(`Factorial of ${num} is : ${factorial}`);
    
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
