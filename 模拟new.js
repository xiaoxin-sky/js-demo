/* 
实现一下new 
new 的作用
1. 创建一个当前对象的实例
2。实例对象拥有实例方法和属性
3。通过__proto__ 可以访问父类的prototype原型对象

*/

function newFn(supperFn) {
  const sub = {};
  sub.__proto__ = supperFn.prototype;
  supperFn.call(sub);
  return sub;
}
