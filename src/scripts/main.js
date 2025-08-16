'use strict';

const body = document.body;

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.classList.add('notification', `${type}`);
  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  const header = document.createElement('h2');

  header.textContent = `${title}`;
  header.classList.add('title');
  element.appendChild(header);

  element.appendChild(document.createElement('p')).textContent =
    `${description}`;

  body.appendChild(element);

  setTimeout(() => {
    element.style.display = 'none';
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
