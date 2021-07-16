// 节流
function jl(fn) {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(this); // 重置this绑定
        timer = null;
      }, 1000);
    }
  };
}
// 节流用法
/* setInterval(
  jl(() => {
    console.log("a");
  }),
  30
); */

// 防抖 --- 重新开始 debounce

function debounce(fn) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
    }, 1000);
    if (!timer) {
      fn.call(this);
    }
  };
}
// 防抖 debounce 用法,永远也不会输出内容
setInterval(
  debounce(() => {
    console.log("a");
  }),
  30
);
