// string manipulation

let empName = "Scala Schelauz";

console.log("Number of character", + empName.length)
console.log("Index of S", + empName.indexOf("s"))
console.log("'ch' occur in position", + empName.search("ch"))

// string can be treated as array of a character 

var line = "I went to Siloso beach";

console.log("Original line: ", + line);
console.log("Line slice (1,12): ", + line.slice(1,12));



// replace substring within string

//Result = I went to Kuta beach
console.log("Replace 'Siloso' with 'Kuta': ", line.replace("Siloso", "Kuta"));

//Result = I went to Siloso beach
console.log("Replace 'siloso' with 'Bali': ", line.replace("siloso", "Bali"));

//Result = Replace 'siloso/i' with 'Bali':  I went to Bali beach
console.log("Replace 'siloso/i' with 'Bali': ", line.replace(/siloso/i, "Bali"));

// Result = Default replace of 'o' with 'O':  I went tO Siloso beach
console.log("Default replace of 'o' with 'O': ", line.replace("o", "O"));

//Result = Global Default replace all of the 'o' with 'O':  I went tO SilOsO beach
console.log("Global Default replace all of the 'o' with 'O': ", line.replace(/o/g, "O"));


// split up string into each character
// result = Splitting the line on space:  [ 'I', 'went', 'to', 'Siloso', 'beach' ]
console.log("Splitting the line on space : ", line.split(" "));


//Eliminate extra spaces 

var extraSpacesText = "               Hey, Jude don't make it bad     ";
console.log("Before the trim: " + extraSpacesText);

//result = After the trim: Hey, Jude don't make it bad
console.log("After the trim: " + extraSpacesText.trim())

