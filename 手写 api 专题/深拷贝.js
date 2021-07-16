/* 
  完美深拷贝，支持数组和对象
  要点：
  1.递归
  2.weakSet 保存全部遍历过的对象（Object Array）
*/
function clone(obj, weak = new WeakSet()) {
  if (!Object.prototype.toString.call(obj).match(/Array|Object/)) return obj;
  if (weak.has(obj)) return; // 已经存在过的，直接抛弃
  weak.add(obj);
  const newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const item = obj[key];
      newObj[key] = clone(item, weak);
    }
  }
  return newObj;
}

const obj = {
  name: "--------name--------",
  arr: [{ a: "sdss" }, 2, 3],
  json: {
    a: 1,
    b: 3,
    j: {
      ccc: 1,
      bbb: 222,
    },
  },
};
obj.json.j.jj = obj.json;

const val = clone(obj);
val.json.a = "dj";
val.arr[0]["a"] = "lpz";
val.name = "leo";
console.log(val);
console.log(obj);
