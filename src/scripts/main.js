'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  message.className = `notification ${type}`;

  const titl = document.createElement('h2');

  titl.className = 'title';

  const desc = document.createElement('p');

  titl.textContent = title;
  desc.textContent = description;

  message.append(titl, desc);
  body.appendChild(message);
  setTimeout(() => (message.hidden = true), 2000);
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
