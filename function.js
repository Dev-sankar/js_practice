// 01 Declare a function fullName and it will print out your full name.

function fullname(){

}

//02 Declare a function fullName and now it takes firstName, lastName as parameters and returns your full-name.
function fullname(firstName,lastname){
    return firstName+lastname;
}

console.log(fullname("sivarasa  " ,"sivasanger"));

//03 Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(sum1,sum2){
    return sum1+sum2;
}

console.log(addNumbers(50,42));

//04 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,width){
    return length*width;
}

console.log(areaOfRectangle(6,5))

//05 A perimeter of a rectangle is calculated as follows: perimeter = 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width){
    return (2*(length+width))
}
console.log(perimeterOfRectangle(4,4))

// 06 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,width,height){
    return (length*width*height)
}
console.log(volumeOfRectPrism(5,5,5))

// 07Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius){
    const pi=Math.PI
    return (pi*radius*radius)
}
console.log(areaOfCircle(7))


// 08 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(circumference){
    let pi=Math.PI
    return(2*pi*circumference)
}
console.log(circumOfCircle(7))


// 09 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFa.




function convertCelsiusToFahrenheit(oC){
    let oF = (oC*9/5)+ 32;
    return oF+'(°F)';
}
console.log(convertCelsiusToFahrenheit(50))










// 10 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function calculatedBMI(weight,height){
    var BMI=(weight/ (height * height))
     
    if ( BMI>=18.5){
        return "underweight";
    }
    else if (18.5<= BMI <= 24.9){
        return "Normal Weight";
    }
    else if(25 <= BMI <= 29.9){
        return "overweight";
    }

    else {
        return "obese";
    }
      

}


var result = calculatedBMI(80,2);
console.log(result)

 
