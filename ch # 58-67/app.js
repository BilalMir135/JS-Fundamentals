//Task # 01

//Part (i)
const mainContent = document.querySelector('#main-content');

//part (ii)
console.log(mainContent.children, 'Main Content all child elements');

//part (iii)
const renderElements = document.querySelectorAll('.render');
document.write(`<h2>Task # 01</h2> <h4>Part iii</h4>`);
renderElements.forEach((element) =>
  document.write(`${element.innerHTML} <br/>`)
);

//part (iv)
document.querySelector('#first-name').value = 'Bilal';

//part (v)
document.querySelector('#last-name').value = 'Mir';
document.querySelector('#email').value = 'bilalmir135@gmail.com';

//Task # 02

//part (i)
document.write(`<h2>Task # 02</h2> <h4>Part i</h4>`);
document.write(
  `Node type = ${document.querySelector('#form-content').nodeType}`
);

//part (ii)
document.write(`<h4>Part ii</h4>`);
const lastName = document.querySelector('#lastName');
document.write(`Node type = ${lastName.nodeType}<br/>`);
const lastNameChilds = lastName.childNodes;
lastNameChilds.forEach((child) =>
  document.write(`Node type of its child = ${child.nodeType}`)
);

//part (iii)
document.write(`<h4>Part iii</h4>`);
document.write(`Before update = ${lastName.textContent}<br/>`);
lastName.textContent = 'Hello';
document.write(`After update = ${lastName.textContent}`);

//part (iv)
const mainContentFirstChild = mainContent.firstElementChild;
console.log(mainContentFirstChild, 'Main Content First Child');
const mainContentLastChild = mainContent.lastElementChild;
console.log(mainContentLastChild, 'Main Content Last Child');

//part (v)
const lastName_Next_Sibling = lastName.nextSibling;
console.log(lastName_Next_Sibling, 'last Name Next Sibling');
const lastName_Previous_Sibling = lastName.previousSibling;
console.log(lastName_Previous_Sibling, 'last Name Previous Sibling');

//pasrt (vi)
const email = document.querySelector('#email');
console.log(email.parentNode, 'Email Parent Node');
console.log(email.nodeType, 'Email Node type');
