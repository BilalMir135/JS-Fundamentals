//*********************Chapter # 01*********************
// Task # 01
//alert('Hello');

// Task # 02
//alert('Error! Please enter a valid password.');

// Task # 03
//alert('Welcome to JS land...\nHappy Coading!');

//Task # 04
//alert('Welcome to JS land...');

//*********************Chapter # 02*********************
//Task # 01
//let username;

//Task # 02
//const myName = 'Bilal Mir';

//Task # 03
/* let message;
message = 'Hello World';
alert(message); */

//Task # 04
/* const studentName = 'Jhone Doe';
const studentAge = 15;
const studentCourse = 'Certified Mobile Application Development';
alert(studentName);
alert(`${studentAge} years old`);
alert(studentCourse); */

//Task # 05
/* let displayFood = '';
const food = 'PIZZA';
for (let i = food.length; i > 0; i--) {
  displayFood += food.slice(0, i) + '\n';
}
alert(displayFood.slice(0, displayFood.length - 1)); //to remove last \n
 */

//Task # 06
/* const email = 'bilalmir135@gmail.com';
alert(`My email address is ${email}`); */

//Task # 07
/* const book = 'A smater way to learn JavaScript';
alert(`I am trying to learn from Book ${book}`);
 */

//Task # 08
//document.write('<h1>Yah! I can write HTML content through JavaScript</h1>');

//Task # 09
/* const design = '▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬';
alert(design);
 */

//*********************Chapter # 03*********************
// Task # 01
/* const age = 21;
alert(`I am ${age} years old`);
 */

//Task # 02
/* const visitor = 14;
alert(`You have visited this site ${visitor} times.`);
 */

//Task # 03
/* const birthYear = 1998;
document.write(
  `My birth year is ${birthYear} <br> Data type of my declared variable is ${typeof birthYear}`
); */

//Task # 04
/* const visitorName = 'John Doe';
const productTitle = 'T-shirt';
const quantity = 5;
document.write('<br><br>');
document.write(
  `<span style="font-weight: bold;">${visitorName}</span> ordered <span style="font-weight: bold;">${quantity} 
   ${productTitle}</span>(s) on XYZ Clothing store`
); */

//*********************Chapter # 04*********************
//Task # 01
//let var1, var2, var3;

//Task # 02
//Legal Varaible
//let abc, _xyz, name_001, tempVar, __temp;

//Illegal Variable
//let @abc, 123a, xy@z, #abc, %temp;

//Task # 03
/* document.write('<h1>Rules for naming JS variables</h1> <br>');
document.write(
  'Variable name can only contain numbers, $ and _. For example $my_1stVariable <br>'
);
document.write(
  'Variables must begin with a letter, $ or _. For example $name, _name or name <br>'
);
document.write('Variable names are case sensitive <br>');
document.write('Variable names should not be JS keywords');
 */

//*********************Chapter # 05*********************
//Task # 01
/* const num1 = Number(prompt('Enter first num'));
const num2 = Number(prompt('Enter second num'));
const sum = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${sum} <br>`);
 */

//Task # 02
/* const sub = num1 - num2;
document.write(`Subtraction of ${num1} and ${num2} is ${sub} <br>`);
 */

/* const mul = num1 * num2;
document.write(`Multiplication of ${num1} and ${num2} is ${mul} <br>`);
 */

/* const div = num1 / num2;
document.write(`Division of ${num1} and ${num2} is ${div} <br>`);
 */

/* const mod = num1 % num2;
document.write(`Modulus of ${num1} and ${num2} is ${mod} <br><br>`);
 */

//Task # 03
/* let temp;
document.write(`Value after declaration is ${temp} <br>`);
temp = 5;
document.write(`Initial value is: ${temp} <br>`);
temp++;
document.write(`Value after increment is: ${temp} <br>`);
temp += 7;
document.write(`Value after addition is: ${temp} <br>`);
temp--;
document.write(`Value after decrement is: ${temp} <br>`);
temp %= 3;
document.write(`The remainder is: ${temp} <br><br>`);

//Task # 04
const cost = 600;
document.write(
  `Total cost to buy 5 tickets to a movie is ${600 * 5} PKR <br><br>`
);
 */

//Task # 05
/* const num = 4;
document.write(`Table of ${num}<br>`);
for (let i = 1; i <= 10; i++) {
  document.write(`${num} * ${i} = ${num * i} <br>`);
} */

//Task # 06
/* const celsiusTemp = 25;
document.write(
  `<br>${celsiusTemp}<sup>o</sup>C is ${
    celsiusTemp * (9 / 5) + 32
  }<sup>o</sup>F <br>`
);
const fahrenheitTemp = 70;
document.write(
  `${fahrenheitTemp}<sup>o</sup>F is ${
    (fahrenheitTemp - 32) * (5 / 9)
  }<sup>o</sup>C <br><br>`
); */

//Task # 07
/* const priceItem_1 = 650;
const priceItem_2 = 100;
const quantityItem_1 = 3;
const quantityItem_2 = 7;
const shippingCharges = 100;
document.write('<h1>Shopping Cart</h1><br>');
document.write(`Price of item 1 is ${priceItem_1} <br>
                Quantity of item 1 is ${quantityItem_1} <br>
                Price of item 2 is ${priceItem_2} <br>
                Quantity of item 2 is ${quantityItem_2} <br>
                Shipping Charges ${shippingCharges} <br><br>
                Total cost of your order is ${
                  priceItem_1 * quantityItem_1 +
                  priceItem_2 * quantityItem_2 +
                  shippingCharges
                } <br><br>`);
 */

//Task # 08
/* const totalMarks = 980;
const marksObtained = 804;
document.write('<h1>Marks Sheet</h1><br>');
document.write(`Total Marks = ${totalMarks} <br>
                Marks Obtained = ${marksObtained} <br>
                Percentage = ${(marksObtained / totalMarks) * 100}%<br><br>`);
 */

//Task # 09
/* document.write('<h1>Currency in PKR</h1><br>');
document.write(`Total Currency in PKR: ${10 * 104.8 + 25 * 28}<br><br>`);
 */

//Task # 10
/* let number = 5;
number = ((number + 5) * 10) / 12;
 */

//Task # 11
/* const currentYear = 2020;
const birthYear = 1998;
document.write('<h1>Age Calculator</h1><br>');
document.write(`Current Year: ${currentYear} <br>
                Birth Year: ${birthYear} <br>
                Your Age is: ${currentYear - birthYear}<br><br>`);
 */

//Task # 12
/* const radius = 20;
document.write('<h1>The Geometrizer</h1> <br>');
document.write(`Radius of Circle: ${radius} <br>
                The circumference is: ${2 * 3.142 * radius} <br>
                The area is: ${3.142 * radius ** 2} <br><br>`);
 */

//Task # 13
/* const favSnack = 'chocolate chip';
const currentAge = 21;
const maxAge = 65;
const amountSnack = 3;
document.write('<h1>The Lifetime Suppply Calculator</h1> <br>');
document.write(`Favourite Snack: ${favSnack} <br>
                Current age: ${currentAge} <br>
                Estimated Maximum Age: ${maxAge} <br>
                Amount of snacks per day: ${amountSnack} <br>
                You will need ${
                  (maxAge - currentAge) * amountSnack
                } ${favSnack} to last you until the ripe old age of ${maxAge} <br><br>`);
 */

//*********************Chapter # 06-09*********************
//Task # 01
/* let a = 10;
document.write(`Result: <br>The value of a is: ${a} <br>`);
document.write('----------------------------------------------<br><br>');
document.write(`The value of ++a is: ${++a} <br>`);
document.write(`Now the value of a is: ${a} <br><br>`);
document.write(`The value of a++ is: ${a++} <br>`);
document.write(`Now the value of a is: ${a} <br><br>`);
document.write(`The value of --a is: ${--a} <br>`);
document.write(`Now the value of a is: ${a} <br><br>`);
document.write(`The value of a-- is: ${a--} <br>`);
document.write(`Now the value of a is: ${a} <br><br>`);
 */

//Task # 02
/* let x = 2,
  y = 1;
const result = --x - --y + ++y + y--;
document.write(`x is ${x} <br>
                y is ${y} <br>
                result is ${result} <br><br>`);
 */

//Task # 03
/* const userName = prompt('Enter Your Name');
alert(`Welcome ${userName}`);
 */

//Task # 04
/* let num = prompt('Enter a number');
if (num === '') {
  num = 5;
} else {
  num = Number(num);
}
for (let i = 1; i <= 10; i++) {
  document.write(`${num} * ${i} = ${num * i} <br>`);
} */

//Task # 05
/* document.write('<br>');
// to create td/th
function createTableData(type, data) {
  let tdata = document.createElement(type);
  tdata.textContent = data;
  return tdata;
}

const table = document.createElement('table');
const markSheet = [];
//take name % marks as an input from user
for (let i = 1; i <= 3; i++) {
  markSheet.push([
    prompt(`Enter Subject-0${i} Name`),
    100,
    Number(prompt(`Enter Subject-0${i} Marks`)),
  ]);
}

//calculate the % of each subject
markSheet.forEach((item) => {
  item.push(Math.round((item[2] / item[1]) * 100) + '%');
});

//table header
markSheet.unshift(['Subject', 'Total Marks', 'Obtained Marks', 'Percentage']);
let finalRow = new Array(4).fill(0);

markSheet.forEach((item, index) => {
  let trow = document.createElement('tr');
  //for last row calculation
  if (index > 0) {
    finalRow[1] += item[1];
    finalRow[2] += item[2];
  }
  //appending elements in table with data
  item.forEach((sub_item) => {
    if (index === 0) {
      trow.appendChild(createTableData('th', sub_item));
    } else {
      trow.appendChild(createTableData('td', sub_item));
    }
  });
  table.appendChild(trow);
});

//last row calculation
finalRow[0] = '';
finalRow[3] = Math.round((finalRow[2] / finalRow[1]) * 100) + '%';
let trow = document.createElement('tr');
//appending last row
finalRow.forEach((item) => {
  trow.appendChild(createTableData('td', item));
});
trow.style.fontWeight = '600';
table.appendChild(trow);

document.body.appendChild(table);
 */

//*********************Chapter # 09-11*********************
//Task # 01
/* const cityName = prompt('Enter your city');
if (cityName.toLowerCase() === 'karachi') {
  alert('Welcome to city of lights');
} */

//Task # 02
/* const gender = prompt('Enter Your Gender').toLowerCase();
if (gender === 'male') {
  alert('Good Morning Sir');
} else if (gender === 'female') {
  alert("Good Morning Ma'am");
} */

//Task # 03
/* const color = prompt('Enter color of road traffic signal').toLowerCase();
if (color === 'red') {
  alert('Must Stop');
} else if (color === 'yellow') {
  alert('Ready to move');
} else {
  alert('Move Now');
} */

//Task # 04
/* if (Number(prompt('Enter the amount of fuel present in your car')) < 0.25) {
  alert('Please refill the fuel in your car');
} */

//Task # 05
/* var a = 4;
if (++a === 5) {
  alert('given condition for variable a is true');
}

var b = 82;
if (b++ === 83) {
  alert('given condition for variable b is true');
}

var c = 12;
if (c++ === 13) {
  alert('condition 1 is true');
}
if (c === 13) {
  alert('condition 2 is true');
}
if (++c < 14) {
  alert('condition 3 is true');
}
if (c === 14) {
  alert('condition 4 is true');
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert('The cost equals');
}

if (true) {
  alert('True');
}
if (false) {
  alert('False');
}

if ('car' < 'cat') {
  alert('car is smaller than cat');
} */

//Task # 06
/* const sub_1 = Number(prompt('Enter Subject One Marks'));
const sub_2 = Number(prompt('Enter Subject Two Marks'));
const sub_3 = Number(prompt('Enter Subject Three Marks'));
const percentage = ((sub_1 + sub_2 + sub_3) / 300) * 100;
document.write('<h1>Marks Sheet</h1><br>');
document.write('Total Marks: 100<br>');
document.write(`Marks Obtained: ${sub_1 + sub_2 + sub_3}<br>`);
document.write(`Percentage: ${percentage}%<br>`);
if (percentage >= 80) {
  document.write('Grade: A-one<br>');
  document.write('Remarks: Excellent<br>');
} else if (percentage >= 70) {
  document.write('Grade: A<br>');
  document.write('Remarks: Good<br>');
} else if (percentage >= 60) {
  document.write('Grade: B<br>');
  document.write('Remarks: You need to improve<br>');
} else {
  document.write('Grade: Fail<br>');
  document.write('Remarks: Sorry<br>');
} */

//Task # 07
/* const actualNumber = 7;
const guessNumber = Number(prompt('Guess a Number'));
if (actualNumber === guessNumber) {
  alert('Bingo! Correct answer');
} else if (actualNumber === guessNumber + 1) {
  alert('Close enough to the correct answer');
} else {
  alert('Wrong guess');
} */

//Task # 08
/* if (Number(prompt('Enter a number')) % 3 === 0) {
  alert('Number is divisible by 3');
} else {
  alert('Number is not divisible by 3');
} */

//Task # 09
/* if (Number(prompt('Enter a number')) % 2 === 0) {
  alert('Even Number');
} else {
  alert('Odd Number');
} */

//Task # 10
/* const temp = Number(prompt('Enter temperature'));
if (temp > 40) {
  alert('It is too hot outside.');
} else if (temp > 30) {
  alert('The Weather today is Normal.');
} else if (temp > 20) {
  alert('Today’s Weather is cool.');
} else {
  alert('OMG! Today’s weather is so Cool.');
} */

//Task # 11
/* const num_1 = Number(prompt('Enter first number'));
const num_2 = Number(prompt('Enter second number'));
const operator = prompt('Enter operation you want to perform');
if (operator === '+') {
  alert(`Result: ${num_1 + num_2}`);
} else if (operator === '-') {
  alert(`Result: ${num_1 - num_2}`);
} else if (operator === '*') {
  alert(`Result: ${num_1 * num_2}`);
} else if (operator === '/') {
  alert(`Result: ${num_1 / num_2}`);
} else if (operator === '%') {
  alert(`Result: ${num_1 % num_2}`);
} else {
  alert('Wrong operator');
} */

//*********************Chapter # 12-13*********************
//Task # 01
/* const asciiCode = Number(prompt('Enter character').charCodeAt());
if (asciiCode >= 48 && asciiCode <= 57) {
  alert('Number');
} else if (asciiCode >= 65 && asciiCode <= 90) {
  alert('Uppercase Letter');
} else if (asciiCode >= 97 && asciiCode <= 122) {
  alert('Lowercase Letter');
} else {
  alert('Special Character');
} */

//Task # 02
/* const int_1 = Number(prompt('Enter first integer'));
const int_2 = Number(prompt('Enter second integer'));
if (int_1 === int_2) {
  alert('Both integers are equal');
} else if (int_1 > int_2) {
  alert(`${int_1} is greater than ${int_2}`);
} else {
  alert(`${int_2} is greater than ${int_1}`);
} */

//Task # 03
/* const num = Number(prompt('Enter a number'));
if (num > 0) {
  alert('Number is positive');
} else if (num < 0) {
  alert('Number is negative');
} else {
  alert('Number is zero');
} */

//Task # 04
/* const char = prompt('Enter string of length 1 / character').toLowerCase();
if ('aeiou'.includes(char)) {
  alert('True');
} else {
  alert('False');
} */

//Task # 05
/* const correctPassword = 'bilal';
const enteredPassword = prompt('Enter Password');
if (enteredPassword === '') {
  alert('Please enter your password');
} else if (enteredPassword === correctPassword) {
  alert('Correct! The password you entered matches the original password');
} else {
  alert('Incorrect password');
} */

//Task # 06
/* var greeting;
var hour = 13;
if (hour < 18) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
} */

//Task # 07
/* const time = Number(prompt("Enter time in 24 formate (Don't use : character)"));
if (time >= 0000 && time < 1200) {
  alert('Good Morning!');
} else if (time >= 1200 && time < 1700) {
  alert('Good Afternoon!');
} else if (time >= 1700 && time < 2100) {
  alert('Good Evening!');
} else if (time >= 2100 && time < 2359) {
  alert('Good Night');
} */

//*********************Chapter # 14-16*********************
//Task # 01
//const studentLiteral = [];

//Task # 02
//const studentObject = new Array();

//Task # 03
//const stringArr = ['Mon', 'Tue', 'Wed'];

//Task # 04
//const numArr = [1, 2, 3];

//Task # 05
//const boolArr = [true, false];

//Task # 06
//const mixArr = [1, 'Hello', true, 23.4];

//Task # 07
/* document.write('<h1>Qualifications</h1>');
const qualifications = [
  'SSC',
  'HSC',
  'BSC',
  'BS',
  'BCOM',
  'MS',
  'M.Phil',
  'PhD',
];
const list = document.createElement('ol');
qualifications.forEach((item) => {
  let listItem = document.createElement('li');
  listItem.textContent = item;
  list.appendChild(listItem);
});
document.body.appendChild(list);
 */

//Task # 08
/* const studentNames = ['Michael', 'John', 'Tony'];
const studentMarks = [320, 230, 480];
document.write('<br>');
for (let i = 0; i < 3; i++) {
  document.write(
    `Score of ${studentNames[i]} is ${studentMarks[i]}. Percentage: ${
      (studentMarks[i] / 500) * 100
    }%<br>`
  );
} */

//Task # 09
/* const colors = ['red', 'yello', 'green'];
alert(colors);
colors.unshift(prompt('Color you want to add at the beginning of array'));
alert(colors);
colors.push(prompt('Color you want to add at the end of array'));
alert(colors);
colors.unshift('violet', 'indigo');
alert(`Tow more colors are added at the beginning of array\n${colors}`);
colors.shift();
alert(`First color is removed from array\n${colors}`);
colors.pop();
alert(`Last color is removed from array\n${colors}`);
colors.splice(
  Number(prompt('Enter the index at which you want to add color')),
  0,
  prompt('Enter color name')
);
alert(colors);
colors.splice(
  Number(prompt('Enter the index at which you want to remove color')),
  Number(prompt('How many colors you want to remove')),
  prompt('Enter color name')
);
alert(colors);
 */

//Task # 10
/* const studentScores = [320, 230, 480, 120];
document.write(
  `<br>Scores of Student: ${studentScores}<br>Ordered Scores of Student: ${studentScores.sort()}<br>`
); */

//Task # 11
/* const citiesName = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
const selectedcities = citiesName.slice(0, 3);
document.write(
  `<br>Cities list: ${citiesName}<br>Selected cities list: ${selectedcities}<br>`
); */

//Task # 12
/* const arr = ['This', 'is', 'my', 'cat'];
document.write(`<br>Array: ${arr}<br>String: ${arr.join(' ')}<br>`);
 */

//Task # 13
/* let devices = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write(`<br>Devices: ${devices}<br>`);
while (devices.length !== 0) {
  document.write(`Out: ${devices.shift()}<br>`);
} */

//Task # 14
/* document.write('<br>');
devices = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write(`<br>Devices: ${devices}<br>`);
while (devices.length !== 0) {
  document.write(`Out: ${devices.pop()}<br>`);
} */

//Task # 15
/* const pm = ['Apple', 'Samsung', 'Motorola', 'Nokia', ' Sony', 'Haier'];
document.write('<br><select>');
pm.forEach((item) => {
  document.write(`<option>${item}</option>`);
});
document.write('</select>');
 */

//*********************Chapter # 17-20*********************
//Task # 01
/* const mdArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; */

//Task # 02
/* const arr = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
]; */

//Task # 03
/* for (let i = 1; i <= 10; i++) {
  document.write(`${i}<br>`);
} */

//Task # 04
/* const num = Number(prompt('Enter number for table'));
const length = Number(prompt('Enter length of table'));
document.write('<br>');
for (let i = 1; i <= length; i++) {
  document.write(`${num} * ${i} = ${num * i}<br>`);
} */

//Task # 05
/* const fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
document.write('<br>');
fruits.forEach((item) => {
  document.write(`${item}<br>`);
});
document.write('<br>');
fruits.forEach((item, index) => {
  document.write(`Element at index ${index} is ${item}<br>`);
}); */

//Task # 06
/* document.write('<h2>Counting</h2>');
for (let i = 1; i <= 15; i++) {
  document.write(`${i},`);
}

document.write('<h2>Reverse Counting</h2>');
for (let i = 10; i >= 1; i--) {
  document.write(`${i},`);
}

document.write('<h2>Even</h2>');
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(`${i},`);
  }
}

document.write('<h2>Odd</h2>');
for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    document.write(`${i},`);
  }
}

document.write('<h2>Series</h2>');
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(`${i}k,`);
  }
} */

//Task # 07
/* const A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
const enteredProduct = prompt(
  "Welcome to ABC Bakrey. What do you want to order sir/ma'am?"
);
const indexA = A.indexOf(enteredProduct);
if (indexA !== -1) {
  alert(`${enteredProduct} is available at index ${indexA} in our bakrey`);
} else {
  alert(`We are sorry. ${enteredProduct} is not available in our bakrey`);
} */

//Task # 08
/* const a = [24, 53, 78, 91, 12];
document.write(
  `<br><br>Array items: ${a}<br>The largest number is ${a.sort()[a.length - 1]}`
); */

//Task # 09
/* const _a = [24, 53, 78, 91, 12];
document.write(
  `<br><br>Array items: ${a}<br>The largest number is ${a.sort()[0]}`
); */

//Task # 10
/* document.write('<br><br>');
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(`${i},`);
  }
} */
