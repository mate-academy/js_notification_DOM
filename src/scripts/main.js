'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const box = document.createElement('div');

  box.classList.add(`notification`, type);
  box.style.top = `${posTop}px`;
  box.style.right = `${posRight}px`;

  box.insertAdjacentHTML('afterbegin', `
    <h2 class="title">${title}</h2>
    <p>${description.split('\n').join('<br>')}</p>
  `);
  body.append(box);

  const titleMessage = document.querySelector('.title');

  titleMessage.style.fontSize = `18px`;

  setTimeout(() => box.remove(), 2000);
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
