//Task # 01
const positiveNum = Number(prompt('Enter positive integer'));
document.write(
  `number: ${positiveNum}<br/>round off value: ${Math.round(
    positiveNum
  )}<br/>floor value: ${Math.floor(positiveNum)}<br/>ceil value: ${Math.ceil(
    positiveNum
  )}`
);

//Task # 02
const negativeNum = Number(prompt('Enter negative integer'));
document.write('<br/><br/>');
document.write(
  `number: ${negativeNum}<br/>round off value: ${Math.round(
    negativeNum
  )}<br/>floor value: ${Math.floor(negativeNum)}<br/>ceil value: ${Math.ceil(
    negativeNum
  )}`
);

//Task # 03
const num = Number(prompt('Enter a number'));
document.write('<br/><br/>');
document.write(`The absolute value of ${num} is ${num > 0 ? num : num * -1}`);

//Task # 04
document.write('<br/><br/>');
document.write(`random dice value: ${Math.floor(Math.random() * 6) + 1}`);

//Task # 05
const tossNum = Math.floor(Math.random() * 2) + 1;
document.write('<br/><br/>');
tossNum === 1
  ? document.write(`${tossNum}<br/>random coin value: Tails`)
  : document.write(`${tossNum}<br/>random coin value: Heads`);

//Task # 06
document.write('<br/><br/>');
document.write(
  `random number between 1 and 100: ${Math.floor(Math.random() * 100) + 1}`
);

//Task # 07
let weight = prompt('Enter your weight in kilograms');
document.write('<br/><br/>');
const units = ['kgs', 'kilograms'];
units.forEach((unit) => {
  weight = weight.replace(unit, '');
});
document.write(`The weight of the user is ${weight} kilograms`);

//Task # 08
const secretNum = Math.floor(Math.random * 10) + 1;
const userNum = Number(prompt('Enter a number between 1 and 10'));
if (userNum === secretNum) {
  alert('Congratulations! You chose right number');
} else {
  alert('Try again!');
}
