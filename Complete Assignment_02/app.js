//*********************Chapter # 21-25*********************
//Task # 01
/* const fname = prompt('Enter your firstname');
const lname = prompt('Enter your lastname');
alert(`Welcome ${fname + ' ' + lname}`);
 */

//Task # 02
/* const favMob = prompt('Enter your favourite phone name');
document.write(
  `My favourite phone : ${favMob}<br/>Length of string: ${favMob.length}`
); */

//Task # 03
/* document.write('<br/><br/>');
document.write(
  `String: Pakistani<br/>Index of 'n': ${'Pakistani'.indexOf('n')} `
); */

//Task # 04
/* document.write('<br/><br/>');
document.write(
  `String: Hello World<br/>Last index of 'l': ${'Hello World'.lastIndexOf('l')}`
); */

//Task # 05
/* document.write('<br/><br/>');
document.write(
  `String: Pakistani<br/>Character at index 3: ${'Pakistani'.charAt(3)}`
); */

//Task # 06
/* const fname2 = prompt('Enter your firstname');
const lname2 = prompt('Enter your lastname');
document.write('<br/><br/>');
document.write(`Welcome ${fname2.concat(' ', lname2)}`);
 */

//Task # 07
/* document.write('<br/><br/>');
document.write(
  `City: Hyderabad<br/>After replacement: ${'Hyderabad'.replace(
    'Hyder',
    'Islam'
  )}`
); */

//Task # 08
/* const message =
  'Ali and Sami are best friends. They play cricket and football together.';
document.write('<br/><br/>');
document.write(
  `Original Message: ${message}<br/>After replacement: ${message.replace(
    /and/g,
    '&'
  )}`
); */

//Task # 09
/* let strNum = '472';
document.write('<br/><br/>');
document.write(`Value: ${strNum}<br/>Type: ${typeof strNum}<br/>`);
strNum = Number(strNum);
document.write(`Value: ${strNum}<br/>Type: ${typeof strNum}<br/>`);
 */

//Task # 10
/* const userInput = prompt('Enter something');
document.write('<br/><br/>');
document.write(
  `User input: ${userInput}<br/>Upper case: ${userInput.toUpperCase()}`
); */

//Task # 11
/* const userInput1 = prompt('Enter something');
document.write('<br/><br/>');
document.write(
  `User input: ${userInput1}<br/>Title case: ${userInput1
    .toLowerCase()
    .replace(userInput1.charAt(0), userInput1.charAt(0).toUpperCase())}`
); */

//Task # 12
/* const decNum = 35.36;
document.write('<br/><br/>');
document.write(
  `Number: ${decNum}<br/>Result: ${decNum.toString().replace('.', '')}`
); */

//Task # 13
/* const username = prompt('Enter username');
for (let i = 0; i < username.length; i++) {
  if (
    username.charCodeAt(i) === 33 ||
    username.charCodeAt(i) === 44 ||
    username.charCodeAt(i) === 46 ||
    username.charCodeAt(i) === 64
  ) {
    alert('Please enter a valid username');
  }
} */

//Task # 14
/* const foodItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
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
} */

//Task # 15
/* const pass = prompt('Enter Password');
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
} */

//Task # 16
/* const university = 'University of Karachi';
document.write('<br/><br/>');
university.split('').forEach((char) => {
  document.write(`${char}<br/>`);
}); */

//Task # 17
/* const userInput2 = prompt('Enter something');
document.write('<br/><br/>');
document.write(
  `User Input: ${userInput2}<br/>Last character of input: ${userInput2.slice(
    -1
  )}`
); */

//Task # 18
/* const text = 'The quick brown fox jumps over the lazy dog';
document.write('<br/><br/>');
document.write(
  `Text: ${text}<br/>There are ${
    (text.match(/the/gi) || []).length
  } occurrence(s) of the word \'the\'`
); */

//*********************Chapter # 26-30*********************
//Task # 01
/* const positiveNum = Number(prompt('Enter positive integer'));
document.write(
  `number: ${positiveNum}<br/>round off value: ${Math.round(
    positiveNum
  )}<br/>floor value: ${Math.floor(positiveNum)}<br/>ceil value: ${Math.ceil(
    positiveNum
  )}`
); */

//Task # 02
/* const negativeNum = Number(prompt('Enter negative integer'));
document.write('<br/><br/>');
document.write(
  `number: ${negativeNum}<br/>round off value: ${Math.round(
    negativeNum
  )}<br/>floor value: ${Math.floor(negativeNum)}<br/>ceil value: ${Math.ceil(
    negativeNum
  )}`
); */

//Task # 03
/* const num = Number(prompt('Enter a number'));
document.write('<br/><br/>');
document.write(`The absolute value of ${num} is ${num > 0 ? num : num * -1}`);
 */

//Task # 04
/* document.write('<br/><br/>');
document.write(`random dice value: ${Math.floor(Math.random() * 6) + 1}`);
 */

//Task # 05
/* const tossNum = Math.floor(Math.random() * 2) + 1;
document.write('<br/><br/>');
tossNum === 1
  ? document.write(`${tossNum}<br/>random coin value: Tails`)
  : document.write(`${tossNum}<br/>random coin value: Heads`);
 */

//Task # 06
/* document.write('<br/><br/>');
document.write(
  `random number between 1 and 100: ${Math.floor(Math.random() * 100) + 1}`
); */

//Task # 07
/* let weight = prompt('Enter your weight in kilograms');
document.write('<br/><br/>');
const units = ['kgs', 'kilograms'];
units.forEach((unit) => {
  weight = weight.replace(unit, '');
});
document.write(`The weight of the user is ${weight} kilograms`);
 */

//Task # 08
/* const secretNum = Math.floor(Math.random * 10) + 1;
const userNum = Number(prompt('Enter a number between 1 and 10'));
if (userNum === secretNum) {
  alert('Congratulations! You chose right number');
} else {
  alert('Try again!');
} */

//*********************Chapter # 31-34*********************
//Task # 01
//document.write(new Date());

//Task # 02
/* const monthsList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
alert(`Current mounth: ${monthsList[new Date().getMonth()]}`);
 */

//Task # 03
/* const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
alert(`Today is ${daysList[new Date().getDay()]}`);
 */

//Task # 04
/* const currentDay = new Date().getDay();
if (currentDay === 0 || currentDay === 6) {
  document.write("It's Fun day");
} */

//Task # 05
/* document.write('<br/><br/>');
if (new Date().getDate() <= 15) {
  document.write('First fifteen days of the month');
} else {
  document.write('Last days of the month');
} */

//Task # 06
/* const date = new Date();
const milisecs = date.getTime();
document.write('<br/><br/>');
document.write(
  `Current Date: ${date}<br/>Elapsed milliseconds since January 1, 1970: ${milisecs}<br/>Elapsed minutes since January 1, 1970: ${
    milisecs / 60000
  }`
); */

//Task # 07
/* if (new Date().getHours() >= 12) {
  alert("It's PM");
} else {
  alert("It's AM");
} */

//Task # 08
/* const d = new Date();
d.setFullYear(2020, 11, 31);
document.write('<br/><br/>');
document.write(`Later date: ${d}`);
 */

//Task # 09
/* const firstRamdan = new Date();
firstRamdan.setFullYear(2020, 3, 23);
const today = new Date();
document.write('<br/><br/>');
document.write(
  `${
    (today.getTime() - firstRamdan.getTime()) / (1000 * 60 * 60 * 24)
  } days has passed since 1st Ramdan 2020`
); */

//Task # 10
/* const beg2015 = new Date();
beg2015.setFullYear(2015, 1, 1);
const todayDate = new Date();
document.write('<br/><br/>');
document.write(
  `On reference date ${todayDate}, ${
    (todayDate.getTime() - beg2015.getTime()) / 1000
  } seconds had passed since beginning of 2015`
); */

//Task # 11
/* const plusHour = new Date();
plusHour.setHours(plusHour.getHours() - 1);
document.write('<br/><br/>');
document.write(`current date ${new Date()} 1 hour ago, it was ${plusHour}`);
 */

//Task # 12
/* const dateBack100 = new Date();
dateBack100.setFullYear(dateBack100.getFullYear() - 100);
document.write('<br/><br/>');
document.write(
  `current date ${new Date()} 100 years back, it was ${dateBack100}`
); */

//Task # 13
/* const userAge = Number(prompt('Enter your age'));
const brithYear = new Date();
brithYear.setFullYear(brithYear.getFullYear() - userAge);
document.write('<br/><br/>');
document.write(
  `Your age is ${userAge}<br/>Your birth year is ${brithYear.getFullYear()}`
); */

//Task # 14
/* const customerName = prompt('Enter Customer Name');
const numUnits = Number(prompt('Enter the units'));
document.write('<br/><br/>');
document.write(`<h1>K-Electric Bill</h1>
                Customer Name: <span style="font-weight:bold">${customerName}</span><br/>
                Month: <span style="font-weight:bold">${new Date().getMonth()}</span><br/>
                Number of units: <span style="font-weight:bold">${numUnits}</span><br/>
                Charges per unit: <span style="font-weight:bold">16</span><br/><br/>,
                Net Amount Payable (within Due Date): <span style="font-weight:bold">${
                  numUnits * 16
                }</span><br/>
                Late payment surcharge: <span style="font-weight:bold">350</span><br/>
                Gross Amount Payable (after Due Date): <span style="font-weight:bold">${
                  numUnits * 16 + 350
                }</span>`);
 */

//*********************Chapter # 35-38*********************
//Task # 01
/* function displayDD() {
  document.write(new Date());
}
displayDD();
 */

//Task # 02
/* function greetUser(fname, lname) {
  document.write(`Hello ${fname + ' ' + lname}`);
}
document.write('<br/><br/>');
greetUser('Bilal', 'Mir');
 */

//Task # 03
/* function sum(num1, num2) {
  return num1 + num2;
}
document.write('<br/><br/>');
document.write(
  `Sum = ${sum(
    Number(prompt('Enter first num')),
    Number(prompt('Enter second num'))
  )}`
); */

//Task # 04
/* function calculator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else if (operator === '%') {
    return num1 % num2;
  } else {
    return false;
  }
}
document.write('<br/><br/>');
const result = calculator(
  Number(prompt('Enter first num')),
  Number(prompt('Enter second num')),
  prompt('Enter operator')
);

result
  ? document.write(`Result = ${result}`)
  : document.write('Wrong Operator');
 */

//Task # 05
/* function squares(num) {
  return num * num;
}
document.write('<br/><br/>');
document.write(`${squares(10)}`);
 */

//Task # 06
/* let numFactorial = '1';
function factorial(num) {
  if (num > 0) {
    numFactorial *= num;
    return factorial(num - 1);
  } else {
    return numFactorial;
  }
}
document.write('<br/><br/>');
document.write(`${factorial(6)}`);
 */

//Task # 07
/* function counting(startNum, endNum) {
  while (startNum !== endNum) {
    document.write(`${startNum}<br/>`);
    startNum++;
  }
  document.write(`${startNum}<br/>`);
}
document.write('<br/><br/>');
counting(10, 20);
 */

//Task # 08
/* function calculateHypothesis(base, per) {
  function calculateSquare(num) {
    return num ** 2;
  }
  return Math.sqrt(calculateSquare(base) + calculateSquare(per));
}
document.write('<br/><br/>');
document.write(calculateHypothesis(2, 4));
 */

//Task # 09
/* function rectangleArea(width, height) {
  return width * height;
}
document.write('<br/><br/>');
document.write(`${rectangleArea(10, 20)}<br/>`);
const width = 10;
const height = 20;
document.write(rectangleArea(width, height));
 */

//Task # 10
/* function palindromeCheck(str) {
  if (str.split('').reverse().join('') === str) {
    return true;
  } else {
    return false;
  }
}
document.write('<br/><br/>');
document.write(`Is madam string palindrome : ${palindromeCheck('madam')}<br/>`);
document.write(`Is hello string palindrome : ${palindromeCheck('hello')}`);
 */

//Task # 11
/* function titleCase(str) {
  const strList = str.split(' ');
  strList.forEach((element, index) => {
    strList[index] = element
      .toLowerCase()
      .replace(element.charAt(0), element.charAt(0).toUpperCase());
  });
  return strList.join(' ');
}
document.write('<br/><br/>');
document.write(
  `EXAMPLE STRING : the quick brown fox<br/>EXPECTED OUTPUT : ${titleCase(
    'the quick brown fox'
  )}`
); */

//Task # 12
/* function longWord(str) {
  const strList = str.split(' ');
  let word = '';
  strList.forEach((element) => {
    if (element.length > word.length) {
      word = element;
    }
  });
  return word;
}
document.write('<br/><br/>');
document.write(
  `EXAMPLE STRING : Web Development Tutorial<br/>EXPECTED OUTPUT : ${longWord(
    'Web Development Tutorial'
  )}`
); */

//Task # 13
/* function letterCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === letter) {
      count++;
    }
  }
  return count;
}
document.write('<br/><br/>');
document.write(
  `String : JSResourceS.com <br/> Letter o occurrence in string : ${letterCount(
    'JSResourceS.com',
    'o'
  )}`
); */

//Task # 14
/* function calcCircumference(radius) {
  document.write(`The circumference is : ${2 * 3.142 * radius}<br/>`);
}

function calcArea(radius) {
  document.write(`The area is : ${3.142 * radius ** 2}`);
}

document.write('<br/><br/>');
calcCircumference(10);
calcArea(10);
 */
