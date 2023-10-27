  // 03 If a is greater than b, return that a is greater than b else a is less than b.
 /*var a=16
 var b=10
 if (a>b){
    console.log(a);
 }

 else {
    console.log(b);
 } */

 // 04 Write a code that gives grades to students according to their scores:

 /*
 let score = prompt("Please enter your score");
 let grade;
if (score>=80 && score<=100)
 { //console.log("A")
 grade="a";
 }
else if (score>=70 && score<=79)
 {
    grade="b";
 }

 else if(score>=60 && score<=69)
 {
    grade="c";
 }

 else if (score>=50 && score<=59)
 {
    grade="D";
 }

 else
 {
    grade="F";
 }

 console.log(grade)

 */

/*
var days=prompt("enter day");

switch(days){
    case 'monday':
    case 'Tuesday':
    case 'wednesday':
        case 'thursday':
            case 'friday':
                console.log("week day");
                break;
                case 'saturday':
                    case 'sunday':
                        console.log("week end");
                        break 
                        default:
                            console.log("not found");


}
*/

/*

function summation(num1, num2) {
    return num1+num2;
}

summation(3,6)
summation(2000,4000)
console.log( summation(3,6) )
console.log(summation(2000,4000))

*/


//5. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:

/*
var month= prompt( "please enter the month " );

switch(month){
    case'september':
    case'october':
    case'november':
    console.log("Autumn");
    break;
    case 'december':
        case 'january':
            case 'feberuary':
                console.log( "winter" );
                break;
                case 'march':
                    case 'April':
                        case 'may':
                            console.log( "spring" );
                            break;
                        case 'june':
                            case 'july':
                                case 'Auguest':
                                    console.log( "Summer" );
                                    break;
                                    default:
                                        console.log( "not the weather" );
        

}

*/


//Switch 
 //01 Using the JavaScript switch statement to get the day count based on a month
// If the month is 1, 3,5, 7, 8, 10, or 12, the number of days in a month is 31.

/*
var month = prompt ( "Enter the month number" );

switch(month){
    case '1':
        case '3':
            case '5':
                case '7':
                    case '8':
                        case '10':
                            case '12':
                                console.log( "the number of days in a month is 31" );
                                break;
                                console.log( "Not found" );
                                case '4':
        case '6':
            case '9':
                case '11':
                    console.log( "the number of days in that month is 30" );
}

*/



//If the month is 4, 6, 9, or 11, the number of days in that month is 30.

/*
var month = prompt ("Enter the month number");

switch(month){
    case '4':
        case '6':
            case '9':
                case '11':
                    console.log( "the number of days in that month is 30" );
}
*/


//If the month is 2, and the year is not the leap year, the number of days is 28. If the year is the leap year, the number of days is 29.