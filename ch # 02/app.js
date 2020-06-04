//Task # 01
let username;

//Task # 02
const myName = 'Bilal Mir';

//Task # 03
let message;
message = 'Hello World';
alert(message);

//Task # 04
const studentName = 'Jhone Doe';
const studentAge = 15;
const studentCourse = 'Certified Mobile Application Development';
alert(studentName);
alert(`${studentAge} years old`);
alert(studentCourse);

//Task # 05
let displayFood = '';
const food = 'PIZZA';
for (let i = food.length; i > 0; i--) {
  displayFood += food.slice(0, i) + '\n';
}
alert(displayFood.slice(0, displayFood.length - 1)); //to remove last \n

//Task # 06
const email = 'bilalmir135@gmail.com';
alert(`My email address is ${email}`);

//Task # 07
const book = 'A smater way to learn JavaScript';
alert(`I am trying to learn from Book ${book}`);

//Task # 08
document.write('<h1>Yah! I can write HTML content through JavaScript</h1>');

//Task # 09
const design = '▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬';
alert(design);
