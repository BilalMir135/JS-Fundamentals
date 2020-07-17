//Task # 01
function power(a, b) {
  return a ** b;
}

document.write(`2<sup>3</sup> = ${power(2, 3)}`);

//Task # 02
const year = Number(prompt('Enter year'));

function checkLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

document.write('<br/><br/>');
document.write(`${year} is ${checkLeapYear(year) ? '' : 'not'} a leap year`);

//Task # 03
function calculate_S(a, b, c) {
  return (a + b + c) / 2;
}

function calculateAreaOfTriangle(a, b, c) {
  const S = calculate_S(a, b, c);
  return S * (S - a) * (S - b) * (S - c);
}

document.write('<br/><br/>');
document.write(`Area of triangle = ${calculateAreaOfTriangle(22, 22, 33)}`);

//Task # 04
function average(sub1, sub2, sub3) {
  return (sub1 + sub2 + sub3) / 3;
}

function percentage(avearge) {
  return avearge + '%';
}

function mainFunction() {
  document.write('<br/><br/>');
  document.write(`Result = ${percentage(average(60, 70, 80))}`);
}

mainFunction();

//Task # 05
function customIndexOf(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (char === string[i]) {
      return i;
    }
  }
  return -1;
}

document.write('<br/><br/>');
document.write(`Index of e in string Hello = ${customIndexOf('Hello', 'e')}`);

//Task # 06
function delVowels(sentence) {
  let newSentence = '';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  [...sentence].forEach((char) => {
    if (vowels.includes(char)) {
      return;
    } else {
      newSentence += char;
    }
  });
  return newSentence;
}

document.write('<br/><br/>');
document.write(
  `Sentence before the deletion of vowels = Hello World<br/>Sentence after the deletion of vowels = ${delVowels(
    'Hello World'
  )}`
);

//Task # 07
function checkVowel(char) {
  switch (char) {
    case 'a':
      return true;
    case 'e':
      return true;
    case 'i':
      return true;
    case 'o':
      return true;
    case 'u':
      return true;
    default:
      return false;
  }
}

const sentence = [...'Pleases read this application and give me gratuity'];
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  if (checkVowel(sentence[i])) {
    if (checkVowel(sentence[i + 1])) {
      count += 1;
      i++;
    }
  }
}

document.write('<br/><br/>');
document.write(`Count = ${count}`);

//Task # 08
const distanceKM = Number(
  prompt('Enter the distance between two cities in km')
);

function km_to_m(km) {
  return km * 1000;
}

function km_to_feet(km) {
  return km * 3281;
}

function km_to_inch(km) {
  return km * 39370;
}

function km_to_cm(km) {
  return km * 100000;
}

function kmConversions(km) {
  document.write(
    `Dinstance in kilometers = ${km}<br/>Distance in meters = ${km_to_m(
      km
    )}<br/>Distance in feets = ${km_to_feet(
      km
    )}<br/>Distance in inches = ${km_to_inch(
      km
    )}<br/>Distance in centimeters = ${km_to_cm(km)}`
  );
}

document.write(`<br/><br/>`);
kmConversions(distanceKM);

//Task # 09
function overTimePay(hours) {
  if (hours > 40) {
    return (hours - 40) * 12;
  } else {
    return 0;
  }
}

document.write(`<br/><br/>`);
document.write(`Overtime pay for 50 hours = Rs.${overTimePay(50)}`);

//Task # 10
const amount = prompt('Enter amount to withdraw!');
function currencyNotes(amount) {
  let tempAmount = amount;
  let notes = '';
  if (amount.length <= 3) {
    if (tempAmount.length === 3) {
      notes += `${tempAmount[0]} hundred notes `;
      tempAmount = tempAmount.slice(1, 3);
    }
    if (Number(tempAmount) >= 50) {
      notes += '1 fifty note ';
      tempAmount = (tempAmount - 50).toString();
    }
    if (Number(tempAmount) >= 10) {
      notes += `${tempAmount[0]} ten notes`;
    }
  }

  return notes;
}

document.write(`<br/><br/>`);
document.write(`you will have ${currencyNotes(amount)}`);
