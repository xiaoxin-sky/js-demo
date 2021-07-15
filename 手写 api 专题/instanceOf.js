/*
	instanceOf 作用：检测__proto__上面的constructor 是否相等。
*/
function myInstanceOf(obj, obj1) {
  if (!obj.__proto__) return false;
  if (!obj1.prototype) return false;
  if (obj.__proto__ === obj1.prototype) {
    return true;
  } else {
    return myInstanceOf(obj.__proto__, obj1);
  }
}
function Animal(name) {
  this.name = name;
}
const dog = new Animal("leo");
console.log(myInstanceOf(dog, Object));
console.log(dog instanceof Object);
