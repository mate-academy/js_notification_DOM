'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const createElem = document.createElement('div');

  createElem.classList.add('notification', type);
  createElem.style.top = `${posTop}px`;
  createElem.style.right = `${posRight}px`;

  const message = document.createElement('h2');

  message.classList.add('title');
  message.textContent = title;

  const intro = document.createElement('p');

  intro.textContent = description;

  createElem.append(message, intro);
  document.body.append(createElem);

  setTimeout(() => {
    createElem.style.display = 'none';
  }, 2000);
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
