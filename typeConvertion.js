let num = 40;
let str = "350"
let boolean = true;
let date = new Date ( '2019-01-22');

console.log("Type of num: ", typeof(num)) // number
console.log("Type of str: ", str) // "350"
console.log("Type of bool: ", typeof(boolean)) // boolean
console.log("Type of date: ", typeof(date)) // object 


//change the type from int to str
let num_str = String(num);
console.log("Type of num to string: ", typeof(num_str)) //string
console.log("Value of num to string: ", num_str) // "40"

//change the type from str to int
let int_str = Number(str);
console.log("Type of str to num: ", typeof(int_str)) //Number
console.log("Value of str to num: ", int_str) // 350

//change the type from bool to str
let bool_str = Boolean(str);
console.log("Type of bool to string: ", typeof(bool_str)) //Boolean
console.log("Value of bool to string: ", bool_str) // True

//change the type from int to bool 
let bool_int = Number(boolean);
console.log("Type of bool to num: ", typeof(bool_int)) //Number
console.log("Value of bool to num: ", bool_int) // 1

//change the type from date to str 
let date_str = String(date);
console.log("Type of date to str: ", typeof(date_str)) //String
console.log("Value of date to str: ", date_str) // Tue Jan 22 2019 08:00:00 GMT+0800 (Singapore Standard Time)

//change to Boolean 
console.log("Value of num to bool: ", Boolean(num)) // True
console.log("Value of str to bool: ", Boolean(str)) // True
console.log("Value of date to bool: ", Boolean(date)) // True
console.log("Boolean value of 0: ", Boolean(0)) // false
console.log("Boolean value of blank str: ", Boolean("")) // false


console.log("Value Null cast to str: ", String(null)) // null
console.log("Value Null cast to Number: ", Number(null)) // 0
console.log("Value Null cast to Bool: ", Boolean(null)) // false








