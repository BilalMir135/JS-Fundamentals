//Task # 01
const num1 = Number(prompt('Enter first num'));
const num2 = Number(prompt('Enter second num'));
const sum = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${sum} <br>`);

//Task # 02
const sub = num1 - num2;
document.write(`Subtraction of ${num1} and ${num2} is ${sub} <br>`);

const mul = num1 * num2;
document.write(`Multiplication of ${num1} and ${num2} is ${mul} <br>`);

const div = num1 / num2;
document.write(`Division of ${num1} and ${num2} is ${div} <br>`);

const mod = num1 % num2;
document.write(`Modulus of ${num1} and ${num2} is ${mod} <br><br>`);

//Task # 03
let temp;
document.write(`Value after declaration is ${temp} <br>`);
temp = 5;
document.write(`Initial value is: ${temp} <br>`);
temp++;
document.write(`Value after increment is: ${temp} <br>`);
temp += 7;
document.write(`Value after addition is: ${temp} <br>`);
temp--;
document.write(`Value after decrement is: ${temp} <br>`);
temp %= 3;
document.write(`The remainder is: ${temp} <br><br>`);

//Task # 04
const cost = 600;
document.write(
  `Total cost to buy 5 tickets to a movie is ${600 * 5} PKR <br><br>`
);

//Task # 05
const num = 4;
document.write(`Table of ${num}<br>`);
for (let i = 1; i <= 10; i++) {
  document.write(`${num} * ${i} = ${num * i} <br>`);
}

//Task # 06
const celsiusTemp = 25;
document.write(
  `<br>${celsiusTemp}<sup>o</sup>C is ${
    celsiusTemp * (9 / 5) + 32
  }<sup>o</sup>F <br>`
);
const fahrenheitTemp = 70;
document.write(
  `${fahrenheitTemp}<sup>o</sup>F is ${
    (fahrenheitTemp - 32) * (5 / 9)
  }<sup>o</sup>C <br><br>`
);

//Task # 07
const priceItem_1 = 650;
const priceItem_2 = 100;
const quantityItem_1 = 3;
const quantityItem_2 = 7;
const shippingCharges = 100;
document.write('<h1>Shopping Cart</h1><br>');
document.write(`Price of item 1 is ${priceItem_1} <br>
                Quantity of item 1 is ${quantityItem_1} <br>
                Price of item 2 is ${priceItem_2} <br>
                Quantity of item 2 is ${quantityItem_2} <br>
                Shipping Charges ${shippingCharges} <br><br>
                Total cost of your order is ${
                  priceItem_1 * quantityItem_1 +
                  priceItem_2 * quantityItem_2 +
                  shippingCharges
                } <br><br>`);

//Task # 08
const totalMarks = 980;
const marksObtained = 804;
document.write('<h1>Marks Sheet</h1><br>');
document.write(`Total Marks = ${totalMarks} <br>
                Marks Obtained = ${marksObtained} <br>
                Percentage = ${(marksObtained / totalMarks) * 100}%<br><br>`);

//Task # 09
document.write('<h1>Currency in PKR</h1><br>');
document.write(`Total Currency in PKR: ${10 * 104.8 + 25 * 28}<br><br>`);

//Task # 10
let number = 5;
number = ((number + 5) * 10) / 12;

//Task # 11
const currentYear = 2020;
const birthYear = 1998;
document.write('<h1>Age Calculator</h1><br>');
document.write(`Current Year: ${currentYear} <br>
                Birth Year: ${birthYear} <br>
                Your Age is: ${currentYear - birthYear}<br><br>`);

//Task # 12
const radius = 20;
document.write('<h1>The Geometrizer</h1> <br>');
document.write(`Radius of Circle: ${radius} <br>
                The circumference is: ${2 * 3.142 * radius} <br>
                The area is: ${3.142 * radius ** 2} <br><br>`);

//Task # 13
const favSnack = 'chocolate chip';
const currentAge = 21;
const maxAge = 65;
const amountSnack = 3;
document.write('<h1>The Lifetime Suppply Calculator</h1> <br>');
document.write(`Favourite Snack: ${favSnack} <br>
                Current age: ${currentAge} <br>
                Estimated Maximum Age: ${maxAge} <br>
                Amount of snacks per day: ${amountSnack} <br>
                You will need ${
                  (maxAge - currentAge) * amountSnack
                } ${favSnack} to last you until the ripe old age of ${maxAge} <br><br>`);
