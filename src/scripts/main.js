'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elem =  document.createElement('div');
  elem.className = `notification ${type}`;
  elem.style.top = `${posTop}px`; // Добавляем единицы измерения
  elem.style.right = `${posRight}px`;

  elem.innerHTML= `
      <h2 class="title">${title}</h2>
      <p>${description}</p>
  `;

  document.body.insertAdjacentElement('beforeend', elem);

  function removeElem() {
    elem.remove();
  }

  setTimeout(removeElem, 2000);

};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
