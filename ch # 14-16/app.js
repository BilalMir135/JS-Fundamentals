//Task # 01
const studentLiteral = [];

//Task # 02
const studentObject = new Array();

//Task # 03
const stringArr = ['Mon', 'Tue', 'Wed'];

//Task # 04
const numArr = [1, 2, 3];

//Task # 05
const boolArr = [true, false];

//Task # 06
const mixArr = [1, 'Hello', true, 23.4];

//Task # 07
document.write('<h1>Qualifications</h1>');
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

//Task # 08
const studentNames = ['Michael', 'John', 'Tony'];
const studentMarks = [320, 230, 480];
document.write('<br>');
for (let i = 0; i < 3; i++) {
  document.write(
    `Score of ${studentNames[i]} is ${studentMarks[i]}. Percentage: ${
      (studentMarks[i] / 500) * 100
    }%<br>`
  );
}

//Task # 09
const colors = ['red', 'yello', 'green'];
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

//Task # 10
const studentScores = [320, 230, 480, 120];
document.write(
  `<br>Scores of Student: ${studentScores}<br>Ordered Scores of Student: ${studentScores.sort()}<br>`
);

//Task # 11
const citiesName = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
const selectedcities = citiesName.slice(0, 3);
document.write(
  `<br>Cities list: ${citiesName}<br>Selected cities list: ${selectedcities}<br>`
);

//Task # 12
const arr = ['This', 'is', 'my', 'cat'];
document.write(`<br>Array: ${arr}<br>String: ${arr.join(' ')}<br>`);

//Task # 13
let devices = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write(`<br>Devices: ${devices}<br>`);
while (devices.length !== 0) {
  document.write(`Out: ${devices.shift()}<br>`);
}

//Task # 14
document.write('<br>');
devices = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write(`<br>Devices: ${devices}<br>`);
while (devices.length !== 0) {
  document.write(`Out: ${devices.pop()}<br>`);
}

//Task # 15
const pm = ['Apple', 'Samsung', 'Motorola', 'Nokia', ' Sony', 'Haier'];
document.write('<br><select>');
pm.forEach((item) => {
  document.write(`<option>${item}</option>`);
});
document.write('</select>');
