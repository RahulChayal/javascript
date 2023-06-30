// Fabonacci Series (01/06/2023)

let n1 = 0, n2 = 1, nextNo;
 for (let i = 0; i <= 11; i++) {
    console.log(n1);  
    nextNo = n1 + n2;
    n1 = n2 ;
    n2 = nextNo
}
 