//Task # 01
const element = (tag, data) => {
  const element = document.createElement(tag);
  element.append(document.createTextNode(data));
  return element;
};

const getData = (element) => {
  return document.querySelector(element).value;
};

document.querySelector('#signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = document.querySelector('#formData');
  formData.append(element('h3', `Username : ${getData('input[type="text"]')}`));
  formData.append(element('h3', `Email : ${getData('input[type="email"]')}`));
  formData.append(
    element('h3', `Password : ${getData('input[type="password"]')}`)
  );
});

//Task # 02
document.querySelector('#readMore').addEventListener('click', () => {
  document.querySelector('#moreContent').style.display = 'block';
});

//Task # 03
const info = [
  {
    id: 1,
    name: 'Ali',
    _class: '01',
  },
  {
    id: 2,
    name: 'Anas',
    _class: '02',
  },
  {
    id: 3,
    name: 'Bilal',
    _class: '03',
  },
  {
    id: 4,
    name: 'Babar',
    _class: '04',
  },
  {
    id: 5,
    name: 'Farhan',
    _class: '05',
  },
  {
    id: 6,
    name: 'Hamza',
    _class: '06',
  },
  {
    id: 7,
    name: 'Khizram',
    _class: '07',
  },
  {
    id: 8,
    name: 'Moiz',
    _class: '08',
  },
  {
    id: 9,
    name: 'Maaz',
    _class: '09',
  },
  {
    id: 10,
    name: 'Zahid',
    _class: '10',
  },
];

const _tableBody = document.querySelector('tbody');

//create edit/delete button
const createButton = (name) => {
  const btn = document.createElement('button');
  btn.setAttribute('onClick', `${name.toLowerCase()}Row(this)`);
  btn.innerHTML = name;
  return btn;
};

//insert row in table
const _insertRow = ({ id, name, _class }) => {
  if (info.length) {
    const _row = _tableBody.insertRow();
    _row.value = id;
    _row.insertCell(0).innerHTML = _row.rowIndex - 1;
    _row.insertCell(1).innerHTML = name;
    _row.insertCell(2).innerHTML = _class;
    _row.insertCell(3).appendChild(createButton('Edit'));
    _row.insertCell(4).appendChild(createButton('Delete'));
  }
};

//delete data from info list
const deleteData = (id) => {
  const requiredData = info.find((student) => student.id === id);
  const dataIndex = info.indexOf(requiredData);
  dataIndex > -1 && info.splice(dataIndex, 1);
};

//delete table row
const deleteRow = (e) => {
  const _row = e.parentNode.parentNode;
  deleteData(_row.value);
  _tableBody.deleteRow(_row.rowIndex - 1);
  _tableBody.innerHTML = '';
  info.forEach((student) => _insertRow(student));
};

//display data in table on page load
info.forEach((student) => _insertRow(student));

//showData in form on edit click
const showData = ({ id, name, _class }) => {
  const form = document.querySelector('#editForm');
  form.style.display = 'block';
  form.value = id;
  const inputField = document.querySelectorAll('#editForm input[type="text"]');
  inputField[0].value = name;
  inputField[1].value = _class;
};

//edit click handler
const editRow = (e) => {
  const _row = e.parentNode.parentNode.value;
  const requiredData = info.find((student) => student.id === _row);
  showData(requiredData);
};

//update data
document.querySelector('#editForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = document.querySelector('#editForm');
  const inputField = document.querySelectorAll('#editForm input[type="text"]');
  const requiredData = info.find(
    (student) => student.id === Number(form.value)
  );
  requiredData.name = inputField[0].value;
  requiredData._class = inputField[1].value;
  form.style.display = 'none';
  _tableBody.innerHTML = '';
  info.forEach((student) => _insertRow(student));
});
