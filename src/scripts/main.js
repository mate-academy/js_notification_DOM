'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML('beforeend',
    `<div
      class="notification ${type}"
      style="position: absolute; top: ${top}; right: ${right}"
    >
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>`);
};

setTimeout(() => {
  pushNotification('100px', '100px', 'Поздравляем!',
    `Вы стали 228-ым посетителем нашего сайта.
      <br><br> Нажмите здесь чтобы ввести данные
      своей банковской карты и лишиться денег!`,
    'warning');
}, 2000);
