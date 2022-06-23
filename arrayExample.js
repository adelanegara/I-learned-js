//nested array to flat

var array = ["a", "b", "c", "d", [[[[["e"]]], "f", ["g"]]]];

var flatten = (arr) => {
  newArray = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return newArray;
};

console.log(flatten(array));