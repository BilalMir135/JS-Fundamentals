//Task # 01
const asciiCode = Number(prompt('Enter character').charCodeAt());
if (asciiCode >= 48 && asciiCode <= 57) {
  alert('Number');
} else if (asciiCode >= 65 && asciiCode <= 90) {
  alert('Uppercase Letter');
} else if (asciiCode >= 97 && asciiCode <= 122) {
  alert('Lowercase Letter');
} else {
  alert('Special Character');
}

//Task # 02
const int_1 = Number(prompt('Enter first integer'));
const int_2 = Number(prompt('Enter second integer'));
if (int_1 === int_2) {
  alert('Both integers are equal');
} else if (int_1 > int_2) {
  alert(`${int_1} is greater than ${int_2}`);
} else {
  alert(`${int_2} is greater than ${int_1}`);
}

//Task # 03
const num = Number(prompt('Enter a number'));
if (num > 0) {
  alert('Number is positive');
} else if (num < 0) {
  alert('Number is negative');
} else {
  alert('Number is zero');
}

//Task # 04
const char = prompt('Enter string of length 1 / character').toLowerCase();
if ('aeiou'.includes(char)) {
  alert('True');
} else {
  alert('False');
}

//Task # 05
const correctPassword = 'bilal';
const enteredPassword = prompt('Enter Password');
if (enteredPassword === '') {
  alert('Please enter your password');
} else if (enteredPassword === correctPassword) {
  alert('Correct! The password you entered matches the original password');
} else {
  alert('Incorrect password');
}

//Task # 06
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}

//Task # 07
const time = Number(prompt("Enter time in 24 formate (Don't use : character)"));
if (time >= 0000 && time < 1200) {
  alert('Good Morning!');
} else if (time >= 1200 && time < 1700) {
  alert('Good Afternoon!');
} else if (time >= 1700 && time < 2100) {
  alert('Good Evening!');
} else if (time >= 2100 && time < 2359) {
  alert('Good Night');
}
