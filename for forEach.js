let arrs = new Array(100000000);

console.time("for");
for (let i = 0; i < arrs.length; i++) {}
console.timeEnd("for");

console.time("forEach");

arrs.forEach((arr) => {});
console.timeEnd("forEach");
