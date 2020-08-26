'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML('afterbegin',
    `<div
      class="notification ${type}"
      style="position: absolute; top: ${top}; right: ${right}"
    >
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>`);
};

setTimeout(() => document.querySelector('div').remove(), 2000);

pushNotification('50px', '25px', 'Поздравляем!!!'
  , `Вы были избраны рандомным путем и стали обладателем
  автомобиля Toyota Land Cruiser.
  <br><br>
  Как можно быстрее переходите по ссылке и получите ваш подарок!`
  , 'success'
);
