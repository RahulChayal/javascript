function education(gradScore,hscScore,sscScore,candidateName){
    var result = (gradScore = 80 && gradScore>=70) || (hscScore = 86 && hscScore>=80) || (sscScore = 90 && sscScore>=90) ? "Congrats Pratik you are eligible for TCS interview" : "Unfortunately Pratik you are not eligible for TCS interview"
    console.log(result);
}
education(80,86,90,"Pratik")

function education1(gradScore,hscScore,sscScore,candidateName){
    var result = (gradScore = 70 && gradScore>=70) || (hscScore = 65 && hscScore>=80) || (sscScore = 55 && sscScore>=90) ? "Congrats Prashanjit you are eligible for TCS interview" : "Unfortunately Prashanjit you are not eligible for TCS interview"
    console.log(result);
}
education1(70,65,55,"Prashanjit")

function education1(gradScore,hscScore,sscScore,candidateName){
    var result = (gradScore = 60 && gradScore>=70) || (hscScore = 79 && hscScore>=80) || (sscScore = 88 && sscScore>=90) ? "Congrats Akash you are eligible for TCS interview" : "Unfortunately Akash you are not eligible for TCS interview"
    console.log(result);
}
education1(60,79,88,"Akash")
