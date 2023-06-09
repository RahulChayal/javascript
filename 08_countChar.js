 //Assignment 3.  (23/05/2023)
 
 
 function countcharA(word) {
     var count = 0;
     for (let index = 0; index < word.length; index++) {
     var char =word.charAt(index);
     if (char == 'a' || char == 'A') {
        console.log(char);
        count++;
     } 
    }     
     console.log(`Count total number of character : ${count}`);
 }
 
 countcharA("I AM Learning JavaScript,The Language of internet")
 countcharA("My favorite movie is LAggAn") 
