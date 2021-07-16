/* 
  手写迭代器 ,现在怼迭代器有问题
*/

function myIterator(params) {
  let i = 0;
  return {
    next: () => {
      if (i > 3) {
        return {
          value: i,
          done: true,
        };
      } else {
        i++;
        return {
          value: i,
          done: false,
        };
      }
    },
  };
}
const iterator = myIterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
