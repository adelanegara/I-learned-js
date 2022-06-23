
"use strict";

//date manipulation 

var time = new Date();
console.log("Current time:\n", time);

time = new Date (2020, 7, 29, 18, 21, 15);
console.log("Year, Month, Day, hour, minute, sec: \n", time);

time = new Date ("October 18, 2000");
console.log("Initialized with date string: \n", time);

time = new Date ("2000-10-18");
console.log("Initialized with (yyy-mmm-ddd): \n", time)


//result =  2022-06-21T18:25:32.129Z
time = new Date ();
console.log("Current time \n", time)

//check difference to GMT in minutes to my current time zone
console.log("My timezone offset in minutes \n", time.getTimezoneOffset())

//check GMT
console.log("The UTC time is \n", time.toUTCString())

