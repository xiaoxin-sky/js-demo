let arr = [1, [2, [3, [4, 5]]], 6]; // -> [1, 2, 3, 4, 5, 6] */

console.log(arr.flat(10));

for (let i = 0; i < arr.length; i++) {
  let tmpItem = arr[i];
  if (Array.isArray(tmpItem)) {
    arr.splice(i, 1, ...tmpItem);
  }
}

console.log(arr);
