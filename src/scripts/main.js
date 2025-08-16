'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.className = `notification ${type}`;
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  div.style.position = 'absolute';

  const nameMessage = document.createElement('h2');

  nameMessage.className = 'title';
  nameMessage.textContent = `${title}`;

  const paragraph = document.createElement('p');

  paragraph.textContent = `${description}`;

  div.appendChild(nameMessage);
  div.appendChild(paragraph);
  body.appendChild(div);

  setTimeout(() => div.remove(), 2000);
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
