
//1) დააიმპორტეთ მოვლენების მოდული, შექმენიტ მოვლენის გამომწმვევი ობიექტი კალსის გამოყენებით და გამოიწვიეთ რაიმე მოვლენა თვქენი სურვილით

const EventEmitter = require('events');


const myEmitter = new EventEmitter();


myEmitter.on('greet', (name) => {
  console.log(` ${name}`);
});


myEmitter.emit('greet', 'გიორგი');
