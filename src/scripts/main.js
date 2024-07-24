/* eslint-disable no-template-curly-in-string */
'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  const notTitle = document.createElement('h2');

  notTitle.classList.add('title');
  notTitle.textContent = title;
  notification.appendChild(notTitle);

  const notDescription = document.createElement('p');

  notDescription.textContent = description;
  notification.appendChild(notDescription);

  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notification.style.width = '320px';

  document.body.appendChild(notification);
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
