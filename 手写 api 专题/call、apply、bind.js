Function.prototype.myCall = function (obj, ...arg) {
  obj.fn = this;
  const res = obj.fn(...arg);
  delete obj.fn;
  return res;
};
const a = {
  name: "leo-a",
  logName(daa, bbb) {
    console.log(this.name + daa + bbb);
  },
};
const b = { name: "leo-b" };
a.logName.myCall(b, "xxx", "bbbb");

Function.prototype.myApply = function (obj, arg) {
  obj.fn = this;
  const res = obj.fn(...arg);
  delete obj.fn;
  return res;
};
const b1 = { name: "leo-b1" };
a.logName.myCall(b1, "xxx1", "bbbb1");

Function.prototype.myBind = function (obj, ...arg) {
  obj.fn = this;
  return () => {
    const res = obj.fn(...arg);
    delete obj.fn;
    return res;
  };
};
const moduleObj = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = moduleObj.getX;
console.log(unboundGetX()); // expected output: undefined

const boundGetX = unboundGetX.myBind(moduleObj);
console.log(boundGetX());