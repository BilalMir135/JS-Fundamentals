//Task # 01
let a = 10;
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

//Task # 02
let x = 2,
  y = 1;
const result = --x - --y + ++y + y--;
document.write(`x is ${x} <br>
                y is ${y} <br>
                result is ${result} <br><br>`);

//Task # 03
const userName = prompt('Enter Your Name');
alert(`Welcome ${userName}`);

//Task # 04
let num = prompt('Enter a number');
if (num === '') {
  num = 5;
} else {
  num = Number(num);
}
for (let i = 1; i <= 10; i++) {
  document.write(`${num} * ${i} = ${num * i} <br>`);
}

//Task # 05
document.write('<br>');
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
