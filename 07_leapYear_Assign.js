// Assignment on Leap Year (22/05/2023)

var checkLeapYear= function (leapYear) {
    if (leapYear == null || leapYear==undefined || isNaN(leapYear) || leapYear == " "){
        console.log(`Please enter valid input :${leapYear}`);
    }else {
        if (leapYear % 4 == 0) {
            console.log(`${leapYear} is a Leap Year`);
            
        } else {console.log(`${leapYear} is not a Leap Year`);
            
        }
    }
    
}
checkLeapYear(2020)
checkLeapYear(1999)
checkLeapYear(1600)
checkLeapYear(2022)
checkLeapYear(1945)
checkLeapYear(null)
checkLeapYear(undefined)
checkLeapYear("Twenty Twenty")
checkLeapYear(NaN)
checkLeapYear(1750)