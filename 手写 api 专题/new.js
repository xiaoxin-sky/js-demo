/* 
new 作用 
创建对象，获取父类的属性和原型方法。
__proto__ 指向父类的prototype 对象
*/
function newFn(fn) {
  const o = {};
  o.prototype = fn.prototype;
  // 排除掉自身 arguments[0] 
  fn.apply(o, Array.prototype.slice.call(arguments, 1));
  o.__proto__ = fn.prototype;
  return o;
}

function Animal(name) {
  this.name = name;
}
const dog = newFn(Animal, "leo");
console.log(dog.name);
