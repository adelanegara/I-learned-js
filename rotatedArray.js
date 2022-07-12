function rotLeft(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    const frontItem = arr.shift();
    arr.push(frontItem);
  }
  return arr;
}
