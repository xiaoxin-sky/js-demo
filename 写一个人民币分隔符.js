/* 
10000000000.00 => 100,000.00
*/
function split(str) {
  const float = str.split(".")[1];
  const int = str.split(".")[0].split("").reverse();
  for (let i = 0; i < int.length - 1; i++) {
    if (i % 3 === 0 && i !== 0) {
      int[i] = int[i] + ",";
    }
  }
  return int.reverse().join("") + "." + float;
}
console.log(split("10000000000.00"));
