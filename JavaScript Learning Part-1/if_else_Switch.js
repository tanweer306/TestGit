let num = +prompt("Guess a Number?" ); // Plus(+) converts a string into number

if (num===15) {
    console.log("Your gussed the right number 15");}
   
else {
            if (num > 15) {
                console.log("The number is high");
            }
            else {
                console.log("The number is low");
            }
    }

    //if-else-if
   let msg;
    if (num<0) {
        msg = "Extremely cold";
    } else if (num < 15) {
        msg="Too Cold";
    } else if (num< 20) {
        msg= "Its cold";
    } else if (num < 30){
        msg= "Its Normal";
    } else if ( num<40) {
        msg = "Its Hot";
    } else if (num < 48) {
        msg=" very hot";
    } else {
       msg =  "Extremely Hot";
    }
    console.log(msg);

    //switch-case

    let day = 5;

    switch (day){
        case 0 : {console.log("Sunday"); break;}
        case 1 : {console.log("Monday"); break;}
        case 2 : {console.log("Tuesday"); break;}
        case 3 : {console.log("Wednesday"); break;}
        case 4 : {console.log("Thursday"); break;}
        case 5 : {console.log("Friday"); break;}
        case 6 : {console.log("Saturday"); break;}
        default : {console.log("Invalid day");}
    }
   