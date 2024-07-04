'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const header = document.createElement('h2');
  const text = document.createElement('p');

  notification.classList.add('notification', type);
  header.classList.add('title');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  header.innerText = title;
  text.innerText = description;

  document.body.append(notification);
  notification.append(header);
  notification.append(text);

  setTimeout(() => notification.remove(), 2000);
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
