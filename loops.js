let i = 1;

console.log ("Integers from 1 to 10: ")
// //while the value of is is less or equal to 10, then print 1 - 10
while (i <= 10 ){
    console.log(i);
    i++
}



console.log ("Integers from 1 to 20: ")
while (i <= 20 ){
    let num = i%2; 
    if (num == 0 ) {
        console.log(i)
    }

    i++;
}


// //make a break condition. if it reach 5 then break the loop
while (i <= 10 ){
    console.log(i);
    i++;
    if (i ==5){
        break;
    }
}

// decrement number from 12 to 1 but when it reach 6 skip. (the 6 is not written)
i = 12;
while ( i > 1){
    i--;
    if ( i ==6 ){
        continue;
    }

    console.log(i)

}

// DoWhileLoops the iteration is done first before the condition is checked 

let factorial = 1;
let n = 5 
i = 1;

do {
    factorial *= i;
    i++;
}
while ( i <= n )

console.log("Factorial of  " + n + " = " + factorial)