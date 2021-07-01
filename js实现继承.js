// 寄生继承
function Animal() {
  this.name = "dog";
}

function Dog() {
  Animal.call(this);
  this.age = 18;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

const dog = new Dog();
console.log(dog.name);
