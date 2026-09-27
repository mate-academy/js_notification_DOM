'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  document.body.append(notification);
  notification.classList.add('notification', type);
  notification.style.cssText = `top: ${posTop}px; right: ${posRight}px;`;

  const titleElement = document.createElement('h2');
  const messagePush = document.createElement('p');

  titleElement.classList.add('title');
  notification.append(titleElement, messagePush);

  titleElement.textContent = title;
  messagePush.textContent = description;

  setTimeout(() => {
    notification.style.visibility = 'hidden';
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
