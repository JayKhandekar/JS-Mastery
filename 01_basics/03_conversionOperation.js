let score = "jay"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33"=> 33
// "33abc" => NaN
// true => 1 ; false => 0
// null => 0
// undefined => NaN


let isLoggedIn = "jay"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log (booleanIsLoggedIn)


// 1 => true ; 0 => false
//"" => false
// "jay"=> true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log (stringNumber);
// console.log (typeof stringNumber);


//************************Operations**************************
let value = 3
let negValue = -value
// console.log(negValue)

// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3/3);
// console.log(3**3);
// console.log(3%3);

let str1 = "Hello"
let str2 = " Jay"

let str3= str1 + str2

// console.log( str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3+5) * 5 / 7);


// console.log(true);
// console.log(+true) //not recommended coversion
// console.log(+"")//not recommended conversion


let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // not good (readability is most important)


let gameCounter = 100

++node 01_basics/03_conversionOperation.jsgameCounter;

console.log(gameCounter);