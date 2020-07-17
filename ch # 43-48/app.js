//Task # 01
document.querySelector('#link').addEventListener('click', () => {
  alert('Hello');
});

//Task # 02
function imageClick() {
  alert('Thanks for purchasing a phone from us');
}

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

//create delete button
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
    _row.insertCell(3).appendChild(createButton('Delete'));
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

//Task # 04
const img = document.querySelector('#changeImg');

img.addEventListener('mouseover', () => {
  img.src = './images/phone2.jpg';
});

img.addEventListener('mouseout', () => {
  img.src = './images/phone1.jpg';
});

//Task # 05
const counter = document.querySelector('#counter');

document.querySelector('#decrement').addEventListener('click', () => {
  counter.innerHTML -= 1;
});

document.querySelector('#increment').addEventListener('click', () => {
  counter.innerHTML = Number(counter.innerHTML) + 1;
});
