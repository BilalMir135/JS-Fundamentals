//Task # 01
const cityName = prompt('Enter your city');
if (cityName.toLowerCase() === 'karachi') {
  alert('Welcome to city of lights');
}

//Task # 02
const gender = prompt('Enter Your Gender').toLowerCase();
if (gender === 'male') {
  alert('Good Morning Sir');
} else if (gender === 'female') {
  alert("Good Morning Ma'am");
}

//Task # 03
const color = prompt('Enter color of road traffic signal').toLowerCase();
if (color === 'red') {
  alert('Must Stop');
} else if (color === 'yellow') {
  alert('Ready to move');
} else {
  alert('Move Now');
}

//Task # 04
if (Number(prompt('Enter the amount of fuel present in your car')) < 0.25) {
  alert('Please refill the fuel in your car');
}

//Task # 05
var a = 4;
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
}

//Task # 06
const sub_1 = Number(prompt('Enter Subject One Marks'));
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
}

//Task # 07
const actualNumber = 7;
const guessNumber = Number(prompt('Guess a Number'));
if (actualNumber === guessNumber) {
  alert('Bingo! Correct answer');
} else if (actualNumber === guessNumber + 1) {
  alert('Close enough to the correct answer');
} else {
  alert('Wrong guess');
}

//Task # 08
if (Number(prompt('Enter a number')) % 3 === 0) {
  alert('Number is divisible by 3');
} else {
  alert('Number is not divisible by 3');
}

//Task # 09
if (Number(prompt('Enter a number')) % 2 === 0) {
  alert('Even Number');
} else {
  alert('Odd Number');
}

//Task # 10
const temp = Number(prompt('Enter temperature'));
if (temp > 40) {
  alert('It is too hot outside.');
} else if (temp > 30) {
  alert('The Weather today is Normal.');
} else if (temp > 20) {
  alert('Today’s Weather is cool.');
} else {
  alert('OMG! Today’s weather is so Cool.');
}

//Task # 11
const num_1 = Number(prompt('Enter first number'));
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
}
