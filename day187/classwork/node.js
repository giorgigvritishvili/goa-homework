const os = require("os");


console.log(os.type())
// აბრუნებს ოპერაციული სისტემის ტიპს

console.log(os.arch())
// აბრუნებს რამდენ ბიტიანია კომპი

console.log(os.networkInterfaces())
// აბრუნებს ქსეულურ ინტერფეისებს
console.log(os.homedir())
// os.homedir() – აბრუნებს მომხმარებლის მთავარი საქაღალდის მისამართს

console.log(os.hostname())
// აბრუნებს კომპის სახელს
console.log(os.uptime())
// აბრუნებს სისტემის გაშვებიდან რამდენი დრო გავიდა