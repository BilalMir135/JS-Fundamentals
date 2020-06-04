//Task # 01
const mdArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Task # 02
const arr = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

//Task # 03
for (let i = 1; i <= 10; i++) {
  document.write(`${i}<br>`);
}

//Task # 04
const num = Number(prompt('Enter number for table'));
const length = Number(prompt('Enter length of table'));
document.write('<br>');
for (let i = 1; i <= length; i++) {
  document.write(`${num} * ${i} = ${num * i}<br>`);
}

//Task # 05
const fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
document.write('<br>');
fruits.forEach((item) => {
  document.write(`${item}<br>`);
});
document.write('<br>');
fruits.forEach((item, index) => {
  document.write(`Element at index ${index} is ${item}<br>`);
});

//Task # 06
document.write('<h2>Counting</h2>');
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
}

//Task # 07
const A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
const enteredProduct = prompt(
  "Welcome to ABC Bakrey. What do you want to order sir/ma'am?"
);
const indexA = A.indexOf(enteredProduct);
if (indexA !== -1) {
  alert(`${enteredProduct} is available at index ${indexA} in our bakrey`);
} else {
  alert(`We are sorry. ${enteredProduct} is not available in our bakrey`);
}

//Task # 08
const a = [24, 53, 78, 91, 12];
document.write(
  `<br><br>Array items: ${a}<br>The largest number is ${a.sort()[a.length - 1]}`
);

//Task # 09
const _a = [24, 53, 78, 91, 12];
document.write(
  `<br><br>Array items: ${a}<br>The largest number is ${a.sort()[0]}`
);

//Task # 10
document.write('<br><br>');
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(`${i},`);
  }
}
