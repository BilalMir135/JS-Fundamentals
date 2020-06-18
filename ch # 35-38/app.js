//Task # 01
function displayDD() {
  document.write(new Date());
}
displayDD();

//Task # 02
function greetUser(fname, lname) {
  document.write(`Hello ${fname + ' ' + lname}`);
}
document.write('<br/><br/>');
greetUser('Bilal', 'Mir');

//Task # 03
function sum(num1, num2) {
  return num1 + num2;
}
document.write('<br/><br/>');
document.write(
  `Sum = ${sum(
    Number(prompt('Enter first num')),
    Number(prompt('Enter second num'))
  )}`
);

//Task # 04
function calculator(num1, num2, operator) {
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

//Task # 05
function squares(num) {
  return num * num;
}
document.write('<br/><br/>');
document.write(`${squares(10)}`);

//Task # 06
let numFactorial = '1';
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

//Task # 07
function counting(startNum, endNum) {
  while (startNum !== endNum) {
    document.write(`${startNum}<br/>`);
    startNum++;
  }
  document.write(`${startNum}<br/>`);
}
document.write('<br/><br/>');
counting(10, 20);

//Task # 08
function calculateHypothesis(base, per) {
  function calculateSquare(num) {
    return num ** 2;
  }
  return Math.sqrt(calculateSquare(base) + calculateSquare(per));
}
document.write('<br/><br/>');
document.write(calculateHypothesis(2, 4));

//Task # 09
function rectangleArea(width, height) {
  return width * height;
}
document.write('<br/><br/>');
document.write(`${rectangleArea(10, 20)}<br/>`);
const width = 10;
const height = 20;
document.write(rectangleArea(width, height));

//Task # 10
function palindromeCheck(str) {
  if (str.split('').reverse().join('') === str) {
    return true;
  } else {
    return false;
  }
}
document.write('<br/><br/>');
document.write(`Is madam string palindrome : ${palindromeCheck('madam')}<br/>`);
document.write(`Is hello string palindrome : ${palindromeCheck('hello')}`);

//Task # 11
function titleCase(str) {
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
);

//Task # 12
function longWord(str) {
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
);

//Task # 13
function letterCount(str, letter) {
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
);

//Task # 14
function calcCircumference(radius) {
  document.write(`The circumference is : ${2 * 3.142 * radius}<br/>`);
}

function calcArea(radius) {
  document.write(`The area is : ${3.142 * radius ** 2}`);
}

document.write('<br/><br/>');
calcCircumference(10);
calcArea(10);
