const items = [
    { 
    name: 'Schala', 
    country: 'Germany',
    age: 24
},
{ 
    name: 'Rob', 
    country: 'Germany',
    age: 26
},
{ 
    name: 'Perry', 
    country: 'Norway',
    age: 25
},
{ 
    name: 'Saint', 
    country: 'Singapore',
    age: 21
},
]

//The filter() method creates a new array filled with elements that pass a test provided by a function
//filter does not original array 


//filter all data which age is greater or equal to 22 
const filteredItems = items.filter((item) => {
    return item.age >=22
});
console.log(filteredItems)



//Map create a new array for every array elements 
//sho show a single key 
//does not change the original array
//just return what we want in the new arry
//it's good when you only want to take certain value, like only the name.

const mappedItems = items.map((item) => {
    return item.name
});
console.log(mappedItems)



//Find 
//To find a single object in an array
const foundItems = items.find((item) => {
    return item.name === 'Rob'
});
console.log(foundItems)

//For Each 
//to call each elements in an array 
//kinda similiar to for loops
items.forEach((item) => {
    console.log(item.age)
});


//Some
//it will check the array and return a bool. 
//Checck whether the func has the age that is younger or equal to 21.
const youngestAge = items.some((item)=> {
    return item. age <=21 
})
console.log(youngestAge)

//Reduce 
//moslty for getting sum of the total of a list of number in the array 
const totalAge = items.reduce((currentTotal, item)=> {
    return item.age + currentTotal
})
console.log(totalAge)