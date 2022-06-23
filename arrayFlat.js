//Solution 1

const arr3 = [1, 2, [3, 4, [5, 6]]];

var flatten = (arr) => {
    newArray = arr.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc = acc.concat(flatten(item));
      } else {
        acc.push(item);
        //add new item to the array
      }
      return acc;
    }, []);
    return newArray;
  };
  
  console.log(flatten(arr3));


//Solution 2 
//The Array.flat() method is primarily used to flatten a Nested JavaScript array. 
//It accepts the depth level as an argument and returns a new array in which all of the elements of sub-arrays are concatenated according to the specified depth.
//If you have no idea about the array depth level, pass “infinity” as an argument.

const arr2 = [1, 2, [3, 4, [5, 6]]];

const flatArray= arr2.flat(Infinity);

console.log(flatArray);