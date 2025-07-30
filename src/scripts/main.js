'use strict';

const body = document.body;

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.textContent = title;
  h2.classList.add('title');
  p.textContent = description;
  message.appendChild(h2);
  message.appendChild(p);
  message.classList.add('notification', type);

  message.setAttribute(
    'style',
    `position: fixed; top: ${posTop}px; right: ${posRight}px;`,
  );

  body.appendChild(message);

  setTimeout(() => {
    message.style.display = 'none';
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
