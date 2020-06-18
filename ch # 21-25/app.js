//Task # 01
const fname = prompt('Enter your firstname');
const lname = prompt('Enter your lastname');
alert(`Welcome ${fname + ' ' + lname}`);

//Task # 02
const favMob = prompt('Enter your favourite phone name');
document.write(
  `My favourite phone : ${favMob}<br/>Length of string: ${favMob.length}`
);

//Task # 03
document.write('<br/><br/>');
document.write(
  `String: Pakistani<br/>Index of 'n': ${'Pakistani'.indexOf('n')} `
);

//Task # 04
document.write('<br/><br/>');
document.write(
  `String: Hello World<br/>Last index of 'l': ${'Hello World'.lastIndexOf('l')}`
);

//Task # 05
document.write('<br/><br/>');
document.write(
  `String: Pakistani<br/>Character at index 3: ${'Pakistani'.charAt(3)}`
);

//Task # 06
const fname2 = prompt('Enter your firstname');
const lname2 = prompt('Enter your lastname');
document.write('<br/><br/>');
document.write(`Welcome ${fname2.concat(' ', lname2)}`);

//Task # 07
document.write('<br/><br/>');
document.write(
  `City: Hyderabad<br/>After replacement: ${'Hyderabad'.replace(
    'Hyder',
    'Islam'
  )}`
);

//Task # 08
const message =
  'Ali and Sami are best friends. They play cricket and football together.';
document.write('<br/><br/>');
document.write(
  `Original Message: ${message}<br/>After replacement: ${message.replace(
    /and/g,
    '&'
  )}`
);

//Task # 09
let strNum = '472';
document.write('<br/><br/>');
document.write(`Value: ${strNum}<br/>Type: ${typeof strNum}<br/>`);
strNum = Number(strNum);
document.write(`Value: ${strNum}<br/>Type: ${typeof strNum}<br/>`);

//Task # 10
const userInput = prompt('Enter something');
document.write('<br/><br/>');
document.write(
  `User input: ${userInput}<br/>Upper case: ${userInput.toUpperCase()}`
);

//Task # 11
const userInput1 = prompt('Enter something');
document.write('<br/><br/>');
document.write(
  `User input: ${userInput1}<br/>Title case: ${userInput1
    .toLowerCase()
    .replace(userInput1.charAt(0), userInput1.charAt(0).toUpperCase())}`
);

//Task # 12
const decNum = 35.36;
document.write('<br/><br/>');
document.write(
  `Number: ${decNum}<br/>Result: ${decNum.toString().replace('.', '')}`
);

//Task # 13
const username = prompt('Enter username');
for (let i = 0; i < username.length; i++) {
  if (
    username.charCodeAt(i) === 33 ||
    username.charCodeAt(i) === 44 ||
    username.charCodeAt(i) === 46 ||
    username.charCodeAt(i) === 64
  ) {
    alert('Please enter a valid username');
  }
}

//Task # 14
const foodItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
const order = prompt(
  "Welcome to ABC backery. What do you want to order sir/ma'am"
);
const result = [];
document.write('<br/><br/>');
foodItems.forEach((food, index) => {
  if (food === order) {
    result.push(food, index);
  }
});

if (result.length !== 0) {
  document.write(
    `${result[0]} is available at index ${result[1]} in our bakery`
  );
} else {
  document.write(`We are sorry ${order} is not available in our bakery`);
}

//Task # 15
const pass = prompt('Enter Password');
let check = true;
document.write('<br/><br/>');
if (pass.length >= 6) {
  if (pass.charCodeAt(0) < 48 || pass.charCodeAt(0) > 57) {
    if (pass.match(/^[0-9a-zA-Z]+$/)) {
      document.write('Valid password');
    } else {
      document.write('Password should contain alphabets and numbersr<br/>');
      document.write('Please enter a valid password');
    }
  } else {
    document.write('Password cannot begin wit a number<br/>');
    document.write('Please enter a valid password');
  }
} else {
  document.write('Password must at least 6 characters long<br/>');
  document.write('Please enter a valid password');
}

//Task # 16
const university = 'University of Karachi';
document.write('<br/><br/>');
university.split('').forEach((char) => {
  document.write(`${char}<br/>`);
});

//Task # 17
const userInput2 = prompt('Enter something');
document.write('<br/><br/>');
document.write(
  `User Input: ${userInput2}<br/>Last character of input: ${userInput2.slice(
    -1
  )}`
);

//Task # 18
const text = 'The quick brown fox jumps over the lazy dog';
document.write('<br/><br/>');
document.write(
  `Text: ${text}<br/>There are ${
    (text.match(/the/gi) || []).length
  } occurrence(s) of the word \'the\'`
);
