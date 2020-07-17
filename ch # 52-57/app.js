//Task # 01
const imgDiv = document.querySelector('#images');

for (let i = 1; i < 13; i++) {
  let img = document.createElement('img');
  img.src = `./images/others/${i}.jpg`;
  img.alt = 'modal_pic';
  img.setAttribute('onClick', 'openModal(this)');
  imgDiv.appendChild(img);
}

const modal = document.querySelector('#myModal');
const modalImg = document.querySelector('#modal-content');

const openModal = (e) => {
  console.log(e.src);
  modal.style.display = 'block';
  modalImg.src = e.src;
};

const span = document.querySelector('.close');

span.onclick = function () {
  modal.style.display = 'none';
};

//Task # 02
const para = document.querySelector('#para');
para.style.fontSize = '16px';

document.querySelector('#zoomIn').addEventListener('click', () => {
  para.style.fontSize = `${
    Number(para.style.fontSize.replace('px', '')) + 10
  }px`;
});

document.querySelector('#zoomOut').addEventListener('click', () => {
  para.style.fontSize = `${
    Number(para.style.fontSize.replace('px', '')) - 10
  }px`;
});
