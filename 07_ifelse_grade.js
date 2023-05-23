function voteEligibility(age){
    if (age>=18 && age<120){
        console.log(`Eligible for vote Age is : ${age}`);
    }else{
        if (age == 0 || age<0 || age>120) {
            console.log(`Invalid Data : ${age}`);
            
        }   
         else {if (age==null && age == undefined) {
            console.log(`Invalid Data : ${age}`);

         }
         console.log(`Not eligible for vote Age is : ${age}`);

        }
    }


}
voteEligibility(45)
voteEligibility(0)
voteEligibility(-10)
voteEligibility(17)
voteEligibility(8)
voteEligibility(20)
voteEligibility(200)
voteEligibility(undefined)
voteEligibility(null)

