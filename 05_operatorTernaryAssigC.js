console.log("----------------------------STEP.1.-----------------------------");
function maleMarriageEligibility(gender, age, boyname){
    var result = (gender == "male" && age>=21) ? `Hey ${boyname} you are eligible for marriage` : `Hey ${boyname} you are not eligible for marriage`
    console.log(result);
}
maleMarriageEligibility("male", 25, "BillGates")

function maleMarriageEligibility(gender, age, boyname){
    var result = (gender == "male" && age>=21) ? `Hey ${boyname} you are eligible for marriage` : `Hey ${boyname} you are not eligible for marriage`
    console.log(result);
}
maleMarriageEligibility("male", 17, "SteveJobs")

console.log("----------------------------STEP.2.-----------------------------");

function femaleMarriageEligibility(gender, age, girlname){
    var result = (gender == "female" && age>=18) ? `Hey ${girlname} you are eligible for marriage` : `Hey ${girlname} you are not eligible for marriage`
    console.log(result);
}
femaleMarriageEligibility("female", 16, "Jenifer")

function femaleMarriageEligibility(gender, age, girlname){
    var result = (gender == "female" && age>=18) ? `Hey ${girlname} you are eligible for marriage` : `Hey ${girlname} you are not eligible for marriage`
    console.log(result);
}
femaleMarriageEligibility("female", 27, "Malinda Gates")
