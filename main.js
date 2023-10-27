//01 Declare a variable named challenge and assign it to an initial value 'learn Javascript'.
  
var a='learn Javascript';
console.log(a)


//02 Print the string on the browser console using console.log()
var b ="sanker";
console.log(b)

//03 Print the length of the string on the browser console using console.log()

let js = 'JavaScript'
console.log(js.length) 


//04 Change all the string characters to capital letters using toUpperCase() method

let string = 'JavaScript'

console.log(string.toUpperCase()) 



//05 Change all the string characters to lowercase letters using toLowerCase() method

let strin = 'JavasCript'

console.log(strin.toLowerCase()) 



//06 Cut (slice) out the first word of the string using substr() or substring() method

let country = 'Finland'
console.log(country.substr(0, 7))


let stri = 'JavaScript'

console.log(stri.substring(0,9))


//07 Slice out the phrase Days Of JavaScript from learn Javascript.

var k='learn JavaScript'
console.log(k.slice(10))




//08 Check if the string contains a word Script using includes() method

var z="learn JavaScript";
z.includes("Java");
console.log(z)





// 09 Split the string into an array using split() method

console.log(string.split()) 


// 10 Split the string learn Javascript at the space using split() method

let str = 'learn Javascript'
console.log(str.split(' '))



// 11 Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

var d= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(d.split(' '))




// 12 Change learn Javascript to 30 Days Of Python using replace() method.

var E = 'learn Javascript to 30 days!';
var f = E.replace("Javascript", "python");
console.log(f)


let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
console.log(result)



// 13 What is character at index 15 in 'learn Javascript' string? Use charAt() method.

var g = 'learn Javascript'
console.log(g.charAt(8)) 



// 14 What is the character code of J in 'learn Javascript' string using charCodeAt()


var h = 'learn Javascript'
console.log(h.charAt(6)) 


// 15 Use indexOf to determine the position of the first occurrence of a in learn Javascript

var i = 'learn Javascript'

console.log(i.indexOf('i'))



// 16 Use lastIndexOf to determine the position of the last occurrence of a in learn Javascript.


var j="learn Javascript"
console.log(j.lastIndexOf(''))

// 17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'


var k="You cannot end a sentence with because because because is a conjunction"
console.log(k.indexOf('b'))




// 18  Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(k.lastIndexOf())



// 19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'




// 20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' learn Javascript '.

let st = '   learn Javascript  ';
console.log(st.trim())



// 21 Use startsWith() method with the string learn Javascript and make the result true


var h = 'Love is the best to in this world'

console.log(h.startsWith('Love'))

// 22 Use endsWith() method with the string learn Javascript and make the result true

var j = 'Love is the most powerful feeling in the world'

console.log(j.endsWith('world'))         
console.log(j.endsWith('love'))          
console.log(j.endsWith('in the world')) 


// 23 Use match() method to find all the a’s in learn Javascript

var l =' learn javascript'
console.log(l.match('learn'))

// 24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, 'learn Javascript'

let s = '30'
console.log(s.concat("Days", "Of", "JavaScript")) 


// 25 Use repeat() method to print learn Javascript 2 times

var h = 'love'
console.log(h.repeat(10)) 