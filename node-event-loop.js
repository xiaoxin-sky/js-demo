const fs = require("fs");
const EventEmitter = require("events").EventEmitter;

let pos = 0;
const messenger = new EventEmitter();

messenger.on("message", function (msg) {
  console.log(++pos + "message:" + msg);
});

console.log(++pos + "first");

process.nextTick(function () {
  console.log(++pos + "nextTick");
});

messenger.emit("message", "hello");

fs.stat(__filename, function () {
  console.log(++pos + "stat");
});

setTimeout(function () {
  console.log(++pos + "quick timer");
}, 0);

setTimeout(function () {
  console.log(++pos + "long timer");
}, 30);
setImmediate(function () {
  console.log(++pos + " immediate");
});

console.log(++pos + "last");
