'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const messageTitle = document.createElement('h2');

  messageTitle.classList.add('title');
  messageTitle.textContent = title;
  notification.appendChild(messageTitle);

  const message = document.createElement('p');

  message.textContent = description;
  notification.appendChild(message);

  const body = document.querySelector('body');

  body.appendChild(notification);

  setTimeout(() => {
    notification.style.display = 'none';
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
