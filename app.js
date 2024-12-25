// chapter4
// question1
// let a=1, b=2, c=3;

// question2
// legal variables
// userName
// _privateVar
// $dollarVar
// myVar2
// camelCaseExample

// Illegal variables
// 2ndnum
// my-var
// var
// abdur rahmaan
// @var

// question3
document.write("<h1>Rules for naming JS variables</h1>")
document.write("Variable names can only contain Numbers, $,_For example $my_1stVariable <br>")
document.write("Variables must begin with a ______, ______ or_____. For example $name, _name or name <br>")
document.write("variables names are case sensitive <br>")
document.write("variables names should not be JS keyword <br><br><br><br>")

// chapter5

// question2

let a = 3;
let b = 5;
document.write('Sum of 3 and 5 is ' + (a + b))
document.write('<br>Subtraction of 3 and 5 is ' + (a - b))
document.write('<br>multiplication of 3 and 5 is ' + (a * b))
document.write('<br>division of 3 and    5 is ' + (a / b))
document.write('<br>modulus of 3 and 5 is ' + (a % b))


// question3

document.write(" <br><br><br><br>value after variable declaration is undefined <br>")

let num1 = 5

document.write("initial value: " + num1) 

document.write("<br>value after increment: "+ ++num1)

document.write("<br>value after addition: "+ (num1 = num1 + 7))

document.write("<br>value after decrement: "+ --num1)

document.write("<br>the reminder is: "  + (num1 % 2))


let ticket = 600

document.write(`<br><br><br><br>total cost to buy 5 tickets to a movie is ${ticket *  5}`)


let x = 2, y = 1;

// document.write(`<br><br><br><br>var result = ${--x - --y + ++x + y--}`)


// chapter 6

// question 2

let n = 2, m = 1

document.write(`<br><br><br>n is ${n} <br> m is ${m}`)

let result = --n - --m + ++n + m--;

document.write(`<br>result is ${result}`)


document.write(` <br>n is ${n}`)
document.write(` <br>m is ${m}`)