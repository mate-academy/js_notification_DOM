'use strict';

const pushNotification = (coordinates, title, description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');

  message.classList.add('notification', type);
  message.style.position = 'fixed';
  message.style.top = coordinates.top + 'px';
  message.style.right = coordinates.right + 'px';

  const header = document.createElement('h2');

  header.textContent = title;
  header.classList.add('title');

  const p = document.createElement('p');

  p.textContent = description;
  message.append(header, p);
  body.append(message);

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
