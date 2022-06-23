let A = 10;
let B = 60;

//Using 2 condition with AND. if A is greater or equal to 11 and B is less or equal to 60 then A + B. 
if (A >= 11 && B <= 20)
console.log("A + B = ", A + B)
else(console.log("condition dont meet"))


//Using 2 condition with AND. if A is greater or equal to 11 and B is less or equal to 60 then A + B. 
if (A >= 9 && B <= 60)
console.log("A + B  = ", A + B)
else(console.log("condition dont meet"))


//using AND in || form 
let X = 40;
let Y = 12;

//if x is greater than 10 and y is less 3
if ( X > 10 || Y < 3)
console.log("X mod Y = ", X % Y)
else (console.log("X + Y = ", X + Y))

//comparison x is not equal to y 
var result = !(X == Y );
console.log( "Result of !(X == Y)", result)


//another ways to write condition (if else)
let condition;
console.log( "conditions = ", condition = (100 >10 ) ? true : false)
console.log( "conditions = ", condition = (100 < 10 ) ? true : false)


let maxValue;

//result = 100 
console.log( "conditions = ", maxValue = (100 >10 ) ? 100 : 10)
//result = 10
console.log( "conditions = ", maxValue = (100 < 10 ) ? 100 : 10)