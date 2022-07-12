// function countStr(string) {
//   const data = {};

//   for (let i in string) {
//     const count = string[i];
//     data[count] = (data[count] || 0) + 1;
//   }
//   return data;
// }

// console.log(countStr("adela"));

const countChar = (value, text) => {
  const x = text.split(value);
  const count = x.length - 1;
  console.log(x, count);
  return count;
};
countChar("a", "adela negara putri");
