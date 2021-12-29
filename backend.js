// const User = require('./greeting.js');
// let u = new User('99');
// u.sayHi();
// console.log(u.age);

// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";
// emitter.on(eventName, function(){
//     console.log("Hello all!");
// });
//  
// emitter.on(eventName, function(){
//     console.log("Привет!");
// });
//  
// emitter.emit(eventName);

const fs = require("fs");
 
let writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир! \n");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");
let readableStream = fs.createReadStream("hello.txt", "utf8");
 
readableStream.on("data", function(chunk){ 
    console.log(chunk);
});