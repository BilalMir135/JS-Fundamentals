//Task # 01
document.write(new Date());

//Task # 02
const monthsList = [
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

//Task # 03
const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
alert(`Today is ${daysList[new Date().getDay()]}`);

//Task # 04
const currentDay = new Date().getDay();
if (currentDay === 0 || currentDay === 6) {
  document.write("It's Fun day");
}

//Task # 05
document.write('<br/><br/>');
if (new Date().getDate() <= 15) {
  document.write('First fifteen days of the month');
} else {
  document.write('Last days of the month');
}

//Task # 06
const date = new Date();
const milisecs = date.getTime();
document.write('<br/><br/>');
document.write(
  `Current Date: ${date}<br/>Elapsed milliseconds since January 1, 1970: ${milisecs}<br/>Elapsed minutes since January 1, 1970: ${
    milisecs / 60000
  }`
);

//Task # 07
if (new Date().getHours() >= 12) {
  alert("It's PM");
} else {
  alert("It's AM");
}

//Task # 08
const d = new Date();
d.setFullYear(2020, 11, 31);
document.write('<br/><br/>');
document.write(`Later date: ${d}`);

//Task # 09
const firstRamdan = new Date();
firstRamdan.setFullYear(2020, 3, 23);
const today = new Date();
document.write('<br/><br/>');
document.write(
  `${
    (today.getTime() - firstRamdan.getTime()) / (1000 * 60 * 60 * 24)
  } days has passed since 1st Ramdan 2020`
);

//Task # 10
const beg2015 = new Date();
beg2015.setFullYear(2015, 1, 1);
const todayDate = new Date();
document.write('<br/><br/>');
document.write(
  `On reference date ${todayDate}, ${
    (todayDate.getTime() - beg2015.getTime()) / 1000
  } seconds had passed since beginning of 2015`
);

//Task # 11
const plusHour = new Date();
plusHour.setHours(plusHour.getHours() - 1);
document.write('<br/><br/>');
document.write(`current date ${new Date()} 1 hour ago, it was ${plusHour}`);

//Task # 12
const dateBack100 = new Date();
dateBack100.setFullYear(dateBack100.getFullYear() - 100);
document.write('<br/><br/>');
document.write(
  `current date ${new Date()} 100 years back, it was ${dateBack100}`
);

//Task # 13
const userAge = Number(prompt('Enter your age'));
const brithYear = new Date();
brithYear.setFullYear(brithYear.getFullYear() - userAge);
document.write('<br/><br/>');
document.write(
  `Your age is ${userAge}<br/>Your birth year is ${brithYear.getFullYear()}`
);

//Task # 14
const customerName = prompt('Enter Customer Name');
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
